<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipment>
 */
class EquipmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'model_number' => fake()->optional()->bothify('??###'),
            'manufacturer' => fake()->optional()->company(),
            'serial_number' => fake()->optional()->bothify('SN-??###'),
            'purchase_date' => fake()->optional()->date(),
            'warranty_expiration_date' => fake()->optional()->date(),
            'location' => fake()->optional()->city(),
            'notes' => fake()->optional()->paragraph(),
        ];
    }
}