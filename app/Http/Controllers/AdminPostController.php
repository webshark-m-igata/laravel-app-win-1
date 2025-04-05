<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;

class AdminPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Post::query();

        $search_title = $request->input('search_title');
        $search_content = $request->input('search_content');

        if ($search_title) {
            $query->where('title', 'like', "%{$search_title}%");
        }

        if ($search_content) {
            $query->where('content', 'like', "%{$search_content}%");
        }

        // 店舗情報とユーザー情報を一緒に取得
        $posts = $query->with(['shop', 'user'])->get();

        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts,
            'search_title' => $search_title,
            'search_content' => $search_content,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $shops = \App\Models\Shop::all();
        return Inertia::render('Admin/Posts/Create', [
            'shops' => $shops
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'shop_id' => 'required|exists:shops,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $validated['title'],
            'content' => $validated['content'],
            'shop_id' => $validated['shop_id'],
            'user_id' => auth()->id(), // ログインユーザーのIDを自動的に設定
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('posts', 'public');
            $data['photo'] = $path;
        }

        Post::create($data);

        return redirect()->route('admin.posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::find($id);
        $shops = \App\Models\Shop::all();
        return Inertia::render('Admin/Posts/Edit', [
            'post' => $post,
            'shops' => $shops
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'shop_id' => 'required|exists:shops,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $post = Post::find($id);
        $data = [
            'title' => $validated['title'],
            'content' => $validated['content'],
            'shop_id' => $validated['shop_id'],
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            // 古い画像が存在する場合は削除
            if ($post->photo) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($post->photo);
            }
            $path = $request->file('photo')->store('posts', 'public');
            $data['photo'] = $path;
        }

        // user_idは変更しないようにする（元のユーザーIDを維持）
        $post->update($data);

        return redirect()->route('admin.posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Post::destroy($id);

        return redirect()->route('admin.posts.index');
    }
}