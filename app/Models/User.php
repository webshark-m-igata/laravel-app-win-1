<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'shop_ids',
        'warehouse_ids',
        'is_admin',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'shop_ids' => 'array',
            'warehouse_ids' => 'array',
            'role' => 'string',
        ];
    }

    /**
     * Check if the user is an admin.
     *
     * @return bool
     */
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    /**
     * Get the isAdmin attribute for the model.
     *
     * @return bool
     */
    public function getIsAdminAttribute(): bool
    {
        return $this->isAdmin();
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['isAdmin', 'hasRole', 'warehouses'];

    /**
     * Get the shops that belong to the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function shops()
    {
        // Create a proper BelongsToMany relationship for the JSON array field
        // We need to create a custom pivot table in memory
        return $this->belongsToMany(Shop::class, 'user_shop')
            ->withPivot([])
            ->using(function ($query) {
                // This is a workaround for the JSON array field
                // We'll filter the results after the relationship is loaded
                return $query->whereIn('shops.id', $this->shop_ids ?? []);
            });
    }

    /**
     * Get the shops relation for eager loading.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getShopsAttribute()
    {
        if (!isset($this->relations['shops'])) {
            // shop_idsが文字列の場合はデコードし、nullの場合は空配列を返す
            $shopIds = $this->shop_ids;
            if (is_string($shopIds)) {
                $shopIds = json_decode($shopIds, true) ?? [];
            } elseif ($shopIds === null) {
                $shopIds = [];
            }

            $this->relations['shops'] = Shop::whereIn('id', $shopIds)->get();
        }

        return $this->relations['shops'];
    }

    /**
     * Get the warehouses that belong to the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function warehouses()
    {
        return $this->belongsToMany(Warehouse::class, 'user_warehouse')
            ->withPivot([])
            ->using(function ($query) {
                return $query->whereIn('warehouses.id', $this->warehouse_ids ?? []);
            });
    }

    /**
     * Get the warehouses relation for eager loading.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getWarehousesAttribute()
    {
        if (!isset($this->relations['warehouses'])) {
            $warehouseIds = $this->warehouse_ids;
            if (is_string($warehouseIds)) {
                $warehouseIds = json_decode($warehouseIds, true) ?? [];
            } elseif ($warehouseIds === null) {
                $warehouseIds = [];
            }

            $this->relations['warehouses'] = Warehouse::whereIn('id', $warehouseIds)->get();
        }

        return $this->relations['warehouses'];
    }

    /**
     * Check if the user has a specific role.
     *
     * @param string $role
     * @return bool
     */
    public function hasRole(string $role): bool
    {
        return $this->role === $role;
    }

    /**
     * Get the hasRole attribute for the model.
     *
     * @return string
     */
    public function getHasRoleAttribute(): string
    {
        return $this->role ?? '';
    }
}
