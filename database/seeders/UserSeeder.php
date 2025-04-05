<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a default admin user with fixed credentials for easy access
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'is_admin' => true,
            'role' => 'admin',
            'shop_ids' => null,
        ]);

        // Create a default regular user with fixed credentials for easy access
        User::create([
            'name' => 'Regular User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
            'is_admin' => false,
            'role' => 'user',
            'shop_ids' => null,
        ]);

        // Create 3 additional admin users using factory
        User::factory()
            ->count(3)
            ->admin()
            ->create();

        // Create 29 additional regular users using factory
        User::factory()
            ->count(29)
            ->create();
    }
}
