<?php

namespace App\Http\Controllers;

use App\Models\WarehousePost;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class WarehousePostController extends Controller
{
    /**
     * Display a listing of the warehouse posts.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // ログインユーザーが所属する倉庫IDを取得
        $warehouseIds = auth()->user()->warehouse_ids;

        // warehouse_idsがnullまたは空の場合は空の配列を使用する
        if ($warehouseIds === null || empty($warehouseIds)) {
            $posts = collect(); // 空のコレクションを返す
        } else {
            // ユーザーが所属する倉庫の投稿のみを取得
            $posts = WarehousePost::with(['user', 'warehouse'])
                ->whereIn('warehouse_id', $warehouseIds)
                ->latest()
                ->get();
        }

        return Inertia::render('Warehouse/Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new warehouse post.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // ログインユーザーが所属する倉庫IDを取得
        $warehouseIds = auth()->user()->warehouse_ids;

        // ユーザーが所属する倉庫のみを取得
        $warehouses = [];
        if ($warehouseIds && !empty($warehouseIds)) {
            $warehouses = Warehouse::whereIn('id', $warehouseIds)->get();
        }

        return Inertia::render('Warehouse/Posts/Create', [
            'warehouses' => $warehouses
        ]);
    }

    /**
     * Store a newly created warehouse post in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'warehouse_id' => 'required|exists:warehouses,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $request->title,
            'content' => $request->content,
            'warehouse_id' => $request->warehouse_id,
            'user_id' => auth()->id(),
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('warehouse_posts', 'public');
            $data['photo'] = $path;
        }

        $post = WarehousePost::create($data);

        return redirect()->route('warehouse.posts.show', $post->id)->with('success', '投稿が作成されました。');
    }

    /**
     * Display the specified warehouse post.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $post = WarehousePost::findOrFail($id);

        // 投稿に関連する倉庫、ユーザー、コメント情報を取得
        $post->load(['warehouse', 'user', 'comments.user']);

        return Inertia::render('Warehouse/Posts/Show', [
            'post' => $post,
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    /**
     * Display a listing of the user's warehouse posts for management.
     *
     * @return \Inertia\Response
     */
    public function manage()
    {
        // ログインユーザーのIDを取得
        $userId = auth()->id();

        // ユーザーの投稿のみを取得
        $posts = WarehousePost::with(['warehouse'])
            ->where('user_id', $userId)
            ->latest()
            ->get();

        return Inertia::render('Warehouse/Posts/Manage', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for editing the specified warehouse post.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $post = WarehousePost::findOrFail($id);

        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ編集できます。');
        }

        // ログインユーザーが所属する倉庫IDを取得
        $warehouseIds = auth()->user()->warehouse_ids;

        // ユーザーが所属する倉庫のみを取得
        $warehouses = [];
        if ($warehouseIds && !empty($warehouseIds)) {
            $warehouses = Warehouse::whereIn('id', $warehouseIds)->get();
        }

        return Inertia::render('Warehouse/Posts/Edit', [
            'post' => $post,
            'warehouses' => $warehouses
        ]);
    }

    /**
     * Update the specified warehouse post in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $post = WarehousePost::findOrFail($id);

        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ編集できます。');
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'warehouse_id' => 'required|exists:warehouses,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $request->title,
            'content' => $request->content,
            'warehouse_id' => $request->warehouse_id,
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            // 古い画像が存在する場合は削除
            if ($post->photo) {
                Storage::disk('public')->delete($post->photo);
            }
            $path = $request->file('photo')->store('warehouse_posts', 'public');
            $data['photo'] = $path;
        }

        $post->update($data);

        return redirect()->route('warehouse.posts.show', $post->id)->with('success', '投稿が更新されました。');
    }

    /**
     * Remove the specified warehouse post from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $post = WarehousePost::findOrFail($id);

        // 投稿の所有者かどうかを確認
        if ($post->user_id !== auth()->id()) {
            abort(403, '自分の投稿のみ削除できます。');
        }

        // 画像が存在する場合は削除
        if ($post->photo) {
            Storage::disk('public')->delete($post->photo);
        }

        $post->delete();

        return redirect()->route('warehouse.posts.manage')->with('success', '投稿が削除されました。');
    }
}
