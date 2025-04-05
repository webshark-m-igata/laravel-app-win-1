<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 管理者ユーザーを5人作成
        \App\Models\User::factory(5)->create([
            'role' => 'admin',
            'is_admin' => true,
            'shop_ids' => null,
            'warehouse_ids' => null
        ]);

        // 一般ユーザーを30人作成
        \App\Models\User::factory(30)->create([
            'role' => 'user',
            'is_admin' => false,
            'shop_ids' => null,
            'warehouse_ids' => null
        ]);

        $this->call([
            UserSeeder::class,
            ShopSeeder::class,
            PostSeeder::class,
            WarehouseSeeder::class,
            EquipmentSeeder::class,
            // 他のシーダーがあればここに追加
        ]);
    }
}
