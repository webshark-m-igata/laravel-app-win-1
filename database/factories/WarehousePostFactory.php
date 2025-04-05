<?php

namespace Database\Factories;

use App\Models\Shop;
use App\Models\Warehouse;
use App\Models\WarehousePost;
use Illuminate\Database\Eloquent\Factories\Factory;

class WarehousePostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = WarehousePost::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'warehouse_id' => Warehouse::factory(),
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraphs(3, true),
            'shop_id' => Shop::factory(),
        ];
    }
}