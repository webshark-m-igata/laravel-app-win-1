<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the posts.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // ログインユーザーが所属するショップIDを取得
        $shopIds = auth()->user()->shop_ids;

        // shop_idsがnullまたは空の場合は空の配列を使用する
        if ($shopIds === null || empty($shopIds)) {
            $posts = collect(); // 空のコレクションを返す
        } else {
            // ユーザーが所属するショップの投稿のみを取得
            $posts = Post::with(['user', 'shop'])
                ->whereIn('shop_id', $shopIds)
                ->latest()
                ->get();
        }

        // ログインユーザーが所属する倉庫IDを取得
        $warehouseIds = auth()->user()->warehouse_ids;

        // warehouse_idsがnullまたは空の場合は空の配列を使用する
        if ($warehouseIds === null || empty($warehouseIds)) {
            $warehousePosts = collect(); // 空のコレクションを返す
        } else {
            // ユーザーが所属する倉庫の投稿のみを取得
            $warehousePosts = \App\Models\WarehousePost::with(['user', 'warehouse'])
                ->whereIn('warehouse_id', $warehouseIds)
                ->latest()
                ->get();
        }

        return Inertia::render('Dashboard', [
            'posts' => $posts,
            'warehousePosts' => $warehousePosts
        ]);
    }

    /**
     * Show the form for creating a new post.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // ログインユーザーが所属するショップIDを取得
        $shopIds = auth()->user()->shop_ids;

        // ユーザーが所属するショップのみを取得
        $shops = [];
        if ($shopIds && !empty($shopIds)) {
            $shops = Shop::whereIn('id', $shopIds)->get();
        }

        return Inertia::render('Posts/Create', [
            'shops' => $shops
        ]);
    }

    /**
     * Store a newly created post in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'shop_id' => 'required|exists:shops,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $request->title,
            'content' => $request->content,
            'shop_id' => $request->shop_id,
            'user_id' => auth()->id(),
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('posts', 'public');
            $data['photo'] = $path;
        }

        $post = Post::create($data);

        return redirect()->route('post.show', $post)->with('success', '投稿が作成されました。');
    }

    /**
     * Display the specified post.
     *
     * @param  \App\Models\Post  $post
     * @return \Inertia\Response
     */
    public function show(Post $post)
    {
        // 投稿に関連するコメントとユーザー情報を取得
        $post->load(['comments.user']);
        // 投稿に関連するショップとユーザー情報を取得
        $post->load(['shop', 'user']);

        return Inertia::render('Posts/Show', [
            'post' => $post,
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    /**
     * Display a listing of the user's posts for management.
     *
     * @return \Inertia\Response
     */
    public function manage()
    {
        // ログインユーザーのIDを取得
        $userId = auth()->id();

        // ユーザーの投稿のみを取得
        $posts = Post::with(['shop'])
            ->where('user_id', $userId)
            ->latest()
            ->get();

        return Inertia::render('Posts/Manage', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for editing the specified post.
     *
     * @param  \App\Models\Post  $post
     * @return \Inertia\Response
     */
    public function edit(Post $post)
    {
        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ編集できます。');
        }

        // ログインユーザーが所属するショップIDを取得
        $shopIds = auth()->user()->shop_ids;

        // ユーザーが所属するショップのみを取得
        $shops = [];
        if ($shopIds && !empty($shopIds)) {
            $shops = Shop::whereIn('id', $shopIds)->get();
        }

        return Inertia::render('Posts/Edit', [
            'post' => $post,
            'shops' => $shops
        ]);
    }

    /**
     * Update the specified post in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Post $post)
    {
        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ編集できます。');
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'shop_id' => 'required|exists:shops,id',
            'photo' => 'nullable|image|max:2048',
            'delete_photo' => 'nullable|boolean'
        ]);

        $data = [
            'title' => $request->title,
            'content' => $request->content,
            'shop_id' => $request->shop_id,
        ];

        // 画像の削除が要求された場合
        if ($request->delete_photo && $post->photo) {
            Storage::disk('public')->delete($post->photo);
            $data['photo'] = null;
        }
        // 新しい画像がアップロードされた場合
        elseif ($request->hasFile('photo')) {
            // 古い画像が存在する場合は削除
            if ($post->photo) {
                Storage::disk('public')->delete($post->photo);
            }
            $path = $request->file('photo')->store('posts', 'public');
            $data['photo'] = $path;
        }

        $post->update($data);

        return redirect()->route('post.show', $post)->with('success', '投稿が更新されました。');
    }

    /**
     * Remove the specified post from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Post $post)
    {
        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ削除できます。');
        }

        // 画像が存在する場合は削除
        if ($post->photo) {
            Storage::disk('public')->delete($post->photo);
        }

        $post->delete();

        return redirect()->route('post.manage')->with('success', '投稿が削除されました。');
    }
}
