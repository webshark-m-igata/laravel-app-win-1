<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserImport
{
    /**
     * Import users from CSV
     *
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    public function import(array $data, bool $updateExisting = true)
    {
        try {
            // Validate user data
            $validator = Validator::make($data, [
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'role' => 'required|string|in:admin,user',
            ]);

            if ($validator->fails()) {
                return ['success' => false, 'message' => $validator->errors()->first()];
            }

            // Check if user exists
            $user = User::where('email', $data['email'])->first();

            if ($user && $updateExisting) {
                // Update existing user
                $user->update([
                    'name' => $data['name'],
                    'role' => $data['role'],
                    'shop_ids' => json_decode($data['shop_ids'] ?? '[]'),
                ]);
            } elseif (!$user) {
                // Create new user with random password
                User::create([
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'password' => Hash::make(\Illuminate\Support\Str::random(10)),
                    'role' => $data['role'],
                    'shop_ids' => json_decode($data['shop_ids'] ?? '[]'),
                ]);
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
