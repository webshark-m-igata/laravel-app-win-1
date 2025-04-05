<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'opening_hours',
        'status',
        'phone_number',
        'url',
    ];

    /**
     * Get the users that belong to the shop.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany(User::class, 'shop_ids', 'id')
            ->where(function ($query) {
                $query->whereJsonContains('shop_ids', $this->id);
            });
    }
}