<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Storage;

class AdminCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Comment::query();

        $search_content = $request->input('search_content');
        $search_user = $request->input('search_user');

        if ($search_content) {
            $query->where('content', 'like', "%{$search_content}%");
        }

        if ($search_user) {
            $query->whereHas('user', function ($q) use ($search_user) {
                $q->where('name', 'like', "%{$search_user}%");
            });
        }

        // ポスト情報、倉庫投稿情報、ユーザー情報を一緒に取得
        $comments = $query->with(['post', 'user', 'warehousePost'])->orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/Comments/Index', [
            'comments' => $comments,
            'search_content' => $search_content,
            'search_user' => $search_user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $posts = \App\Models\Post::all();
        $warehousePosts = \App\Models\WarehousePost::all();
        return Inertia::render('Admin/Comments/Create', [
            'posts' => $posts,
            'warehousePosts' => $warehousePosts
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
            'post_id' => 'nullable|exists:posts,id',
            'warehouse_post_id' => 'nullable|exists:warehouse_posts,id',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = [
            'content' => $validated['content'],
            'user_id' => auth()->id(),
        ];

        // 投稿IDまたは倉庫投稿IDのいずれかを設定
        if (!empty($validated['post_id'])) {
            $data['post_id'] = $validated['post_id'];
            $data['warehouse_post_id'] = null;
        } elseif (!empty($validated['warehouse_post_id'])) {
            $data['warehouse_post_id'] = $validated['warehouse_post_id'];
            $data['post_id'] = null;
        }

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('comments', 'public');
            $data['image_path'] = $path;
        }

        Comment::create($data);

        return redirect()->route('admin.comments.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $comment = Comment::with(['post', 'user'])->findOrFail($id);

        return Inertia::render('Admin/Comments/Show', [
            'comment' => $comment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $comment = Comment::with(['post', 'warehousePost'])->findOrFail($id);
        $posts = \App\Models\Post::all();
        $warehousePosts = \App\Models\WarehousePost::all();
        $users = \App\Models\User::all();

        return Inertia::render('Admin/Comments/Edit', [
            'comment' => $comment,
            'posts' => $posts,
            'warehousePosts' => $warehousePosts,
            'users' => $users
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
            'post_id' => 'nullable|exists:posts,id',
            'warehouse_post_id' => 'nullable|exists:warehouse_posts,id',
            'user_id' => 'required|exists:users,id',
            'image' => 'nullable|image|max:2048',
        ]);

        $comment = Comment::findOrFail($id);
        $data = [
            'content' => $validated['content'],
            'user_id' => $validated['user_id'],
        ];

        // 投稿IDまたは倉庫投稿IDのいずれかを設定
        if (!empty($validated['post_id'])) {
            $data['post_id'] = $validated['post_id'];
            $data['warehouse_post_id'] = null;
        } elseif (!empty($validated['warehouse_post_id'])) {
            $data['warehouse_post_id'] = $validated['warehouse_post_id'];
            $data['post_id'] = null;
        }

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('image')) {
            // 古い画像が存在する場合は削除
            if ($comment->image_path) {
                Storage::disk('public')->delete($comment->image_path);
            }
            $path = $request->file('image')->store('comments', 'public');
            $data['image_path'] = $path;
        }

        $comment->update($data);

        return redirect()->route('admin.comments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $comment = Comment::findOrFail($id);

        // 画像が存在する場合は削除
        if ($comment->image_path) {
            Storage::disk('public')->delete($comment->image_path);
        }

        $comment->delete();

        return redirect()->route('admin.comments.index');
    }
}
