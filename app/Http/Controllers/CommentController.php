<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CommentController extends Controller
{
    /**
     * Store a newly created comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $postId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $postId)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
            'image' => 'nullable|image|max:2048',
        ]);

        $post = Post::findOrFail($postId);

        $comment = new Comment([
            'content' => $request->content,
            'user_id' => Auth::id(),
            'image_path' => null,
        ]);

        // 画像がアップロードされた場合は保存する
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('comments', 'public');
            $comment->image_path = $imagePath;
        }

        $post->comments()->save($comment);

        return back()->with('success', 'コメントが投稿されました。');
    }

    /**
     * Remove the specified comment from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);

        // 認証ユーザーがコメントの所有者であるか確認
        if (Auth::id() !== $comment->user_id) {
            return back()->with('error', 'このコメントを削除する権限がありません。');
        }

        $comment->delete();

        return back()->with('success', 'コメントが削除されました。');
    }

    /**
     * Display a listing of the user's comments.
     *
     * @return \Inertia\Response
     */
    public function manage()
    {
        // 通常の掲示板のコメントを取得
        $postComments = Comment::with(['post', 'user'])
            ->where('user_id', Auth::id())
            ->whereNotNull('post_id')
            ->orderBy('created_at', 'desc')
            ->get();

        // 倉庫掲示板のコメントを取得
        $warehousePostComments = Comment::with(['warehousePost', 'warehousePost.warehouse', 'user'])
            ->where('user_id', Auth::id())
            ->whereNotNull('warehouse_post_id')
            ->orderBy('created_at', 'desc')
            ->get();


        // 両方のコメントを結合
        $comments = $postComments->concat($warehousePostComments)->sortByDesc('created_at')->values();

        // コメントデータをJSON形式に変換する前に、関連データが正しく含まれていることを確認
        $commentsArray = $comments->map(function ($comment) {
            // 基本的なコメント情報
            $commentData = $comment->toArray();

            // 明示的に関連データを含める
            if ($comment->post) {
                $commentData['post'] = $comment->post->toArray();
            }

            // 倉庫投稿コメントの場合、warehousePostプロパティを確実に設定
            if ($comment->warehouse_post_id) {
                // warehousePostリレーションが読み込まれているか確認
                if ($comment->warehousePost) {
                    $commentData['warehousePost'] = $comment->warehousePost->toArray();
                    if ($comment->warehousePost->warehouse) {
                        $commentData['warehousePost']['warehouse'] = $comment->warehousePost->warehouse->toArray();
                    }
                } else {
                    // リレーションが読み込まれていない場合は、手動で読み込む
                    $warehousePost = \App\Models\WarehousePost::find($comment->warehouse_post_id);
                    if ($warehousePost) {
                        $warehousePost->load('warehouse');
                        $commentData['warehousePost'] = $warehousePost->toArray();
                        if ($warehousePost->warehouse) {
                            $commentData['warehousePost']['warehouse'] = $warehousePost->warehouse->toArray();
                        }
                    }
                }
            }

            if ($comment->user) {
                $commentData['user'] = $comment->user->toArray();
            }

            return $commentData;
        })->values()->all();


        return Inertia::render('Comments/Manage', [
            'comments' => $commentsArray
        ]);
    }
}
