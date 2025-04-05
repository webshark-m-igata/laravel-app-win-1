<?php

namespace App\Imports;

use App\Models\Shop;
use Illuminate\Support\Facades\Validator;

class ShopImport
{
    /**
     * Import shops from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate shop data
            $validator = Validator::make($data, [
                'name' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if shop exists
            $shop = isset($data['id']) ? Shop::find($data['id']) : null;

            if ($shop && $updateExisting) {
                // Update existing shop
                $shop->update([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? null,
                    'opening_hours' => $data['opening_hours'] ?? null,
                    'status' => $data['status'] ?? null,
                    'phone_number' => $data['phone_number'] ?? null,
                    'url' => $data['url'] ?? null,
                ]);
            } elseif (!$shop) {
                // Create new shop
                Shop::create([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? null,
                    'opening_hours' => $data['opening_hours'] ?? null,
                    'status' => $data['status'] ?? null,
                    'phone_number' => $data['phone_number'] ?? null,
                    'url' => $data['url'] ?? null,
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
