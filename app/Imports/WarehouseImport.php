<?php

namespace App\Imports;

use App\Models\Warehouse;
use Illuminate\Support\Facades\Validator;

class WarehouseImport
{
    /**
     * Import warehouses from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate warehouse data
            $validator = Validator::make($data, [
                'name' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if warehouse exists
            $warehouse = isset($data['id']) ? Warehouse::find($data['id']) : null;

            if ($warehouse && $updateExisting) {
                // Update existing warehouse
                $warehouse->update([
                    'name' => $data['name'],
                    'address' => $data['address'] ?? null,
                    'phone_number' => $data['phone_number'] ?? null,
                    'email' => $data['email'] ?? null,
                ]);
            } elseif (!$warehouse) {
                // Create new warehouse
                Warehouse::create([
                    'name' => $data['name'],
                    'address' => $data['address'] ?? null,
                    'phone_number' => $data['phone_number'] ?? null,
                    'email' => $data['email'] ?? null,
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
