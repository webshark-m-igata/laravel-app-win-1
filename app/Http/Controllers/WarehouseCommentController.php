<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\WarehousePost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WarehouseCommentController extends Controller
{
    /**
     * Store a newly created comment for warehouse post in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $warehousePostId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $warehousePostId)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
            'image' => 'nullable|image|max:2048',
        ]);

        $warehousePost = WarehousePost::findOrFail($warehousePostId);

        $comment = new Comment([
            'content' => $request->content,
            'user_id' => Auth::id(),
            'warehouse_post_id' => $warehousePostId,
            'post_id' => null, // post_idにnull値を設定
            'image_path' => null,
        ]);

        // 画像がアップロードされた場合は保存する
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('comments', 'public');
            $comment->image_path = $imagePath;
        }

        // コメントを保存
        $comment->save();

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
}
