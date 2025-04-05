<?php

namespace App\Imports;

use App\Models\WarehousePost;
use Illuminate\Support\Facades\Validator;

class WarehousePostImport
{
    /**
     * Import warehouse posts from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate warehouse post data
            $validator = Validator::make($data, [
                'warehouse_id' => 'required|exists:warehouses,id',
                'user_id' => 'required|exists:users,id',
                'title' => 'nullable|string|max:255',
                'content' => 'nullable|string',
                'created_at' => 'nullable|date',
                'updated_at' => 'nullable|date',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if warehouse post exists
            $warehousePost = isset($data['id']) ? WarehousePost::find($data['id']) : null;

            if ($warehousePost && $updateExisting) {
                // Update existing warehouse post
                $warehousePost->update([
                    'warehouse_id' => $data['warehouse_id'],
                    'user_id' => $data['user_id'],
                    'title' => $data['title'],
                    'content' => $data['content'],
                ]);
            } elseif (!$warehousePost) {
                // Create new warehouse post
                WarehousePost::create([
                    'warehouse_id' => $data['warehouse_id'],
                    'user_id' => $data['user_id'],
                    'title' => $data['title'],
                    'content' => $data['content'],
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
