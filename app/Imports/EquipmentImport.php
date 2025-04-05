<?php

namespace App\Imports;

use App\Models\Equipment;
use Illuminate\Support\Facades\Validator;

class EquipmentImport
{
    /**
     * Import equipments from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate equipment data
            $validator = Validator::make($data, [
                'name' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if equipment exists
            $equipment = isset($data['id']) ? Equipment::find($data['id']) : null;

            if ($equipment && $updateExisting) {
                // Update existing equipment
                $equipment->update([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? null,
                ]);
            } elseif (!$equipment) {
                // Create new equipment
                Equipment::create([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? null,
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
