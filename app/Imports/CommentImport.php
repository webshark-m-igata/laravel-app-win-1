<?php

namespace App\Imports;

use App\Models\Comment;
use Illuminate\Support\Facades\Validator;

class CommentImport
{
    /**
     * Import comments from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate comment data
            $validator = Validator::make($data, [
                'post_id' => 'nullable|exists:posts,id',
                'warehouse_post_id' => 'nullable|exists:warehouse_posts,id',
                'user_id' => 'required|exists:users,id',
                'content' => 'required|string',
            ], [
                'user_id.required' => 'ユーザーIDは必須です',
                'user_id.exists' => '指定されたユーザーIDは存在しません',
                'content.required' => 'コメント内容は必須です',
                'content.string' => 'コメント内容は文字列で入力してください'
            ]);

            // コメントは投稿IDか倉庫投稿IDのどちらかが必要
            if (empty($data['post_id']) && empty($data['warehouse_post_id'])) {
                return ['success' => false, 'message' => '投稿IDか倉庫投稿IDのどちらかが必要です。'];
            }

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if comment exists
            $comment = isset($data['id']) ? Comment::find($data['id']) : null;

            if ($comment && $updateExisting) {
                // Update existing comment
                $comment->update([
                    'post_id' => $data['post_id'] ?? null,
                    'warehouse_post_id' => $data['warehouse_post_id'] ?? null,
                    'user_id' => $data['user_id'],
                    'content' => $data['content'],
                    'image' => $data['image'] ?? null,
                ]);
            } elseif (!$comment) {
                // Create new comment
                Comment::create([
                    'post_id' => $data['post_id'] ?? null,
                    'warehouse_post_id' => $data['warehouse_post_id'] ?? null,
                    'user_id' => $data['user_id'],
                    'content' => $data['content'],
                    'image' => $data['image'] ?? null,
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
