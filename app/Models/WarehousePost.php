<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WarehousePost extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'warehouse_id',
        'user_id',
        'title',
        'content',
        'photo',
    ];

    /**
     * Get the warehouse that owns the post.
     */
    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }


    /**
     * Get the user that owns the post.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the comments for the warehouse post.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class, 'warehouse_post_id');
    }
}
