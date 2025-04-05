<?php

namespace App\Imports;

use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostImport
{
    /**
     * Import posts from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate post data
            $validator = Validator::make($data, [
                'title' => 'required|string|max:255',
                'content' => 'required|string',
                'shop_id' => 'required|exists:shops,id',
                'user_id' => 'required|exists:users,id',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if post exists
            $post = isset($data['id']) ? Post::find($data['id']) : null;

            if ($post && $updateExisting) {
                // Update existing post
                $post->update([
                    'title' => $data['title'],
                    'content' => $data['content'],
                    'shop_id' => $data['shop_id'],
                    'user_id' => $data['user_id'],
                    'photo' => $data['photo'] ?? null,
                ]);
            } elseif (!$post) {
                // Create new post
                Post::create([
                    'title' => $data['title'],
                    'content' => $data['content'],
                    'shop_id' => $data['shop_id'],
                    'user_id' => $data['user_id'],
                    'photo' => $data['photo'] ?? null,
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
