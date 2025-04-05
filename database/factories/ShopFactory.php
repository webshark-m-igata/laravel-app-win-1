<?php

namespace Database\Factories;

use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Shop::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'description' => $this->faker->paragraph(),
            'opening_hours' => $this->faker->time('H:i') . ' - ' . $this->faker->time('H:i'),
            'status' => $this->faker->randomElement(['open', 'closed']),
            'phone_number' => $this->faker->phoneNumber(),
            'url' => $this->faker->url(),
        ];
    }
}