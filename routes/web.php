<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [\App\Http\Controllers\PostController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/post/create', [\App\Http\Controllers\PostController::class, 'create'])->name('post.create');
    Route::post('/post', [\App\Http\Controllers\PostController::class, 'store'])->name('post.store');
    Route::get('/post/manage', [\App\Http\Controllers\PostController::class, 'manage'])->name('post.manage');
    Route::get('/post/{post}', [\App\Http\Controllers\PostController::class, 'show'])->name('post.show');
    Route::get('/post/{post}/edit', [\App\Http\Controllers\PostController::class, 'edit'])->name('post.edit');
    Route::patch('/post/{post}', [\App\Http\Controllers\PostController::class, 'update'])->name('post.update');
    Route::delete('/post/{post}', [\App\Http\Controllers\PostController::class, 'destroy'])->name('post.destroy');

    // 倉庫掲示板のルート
    Route::get('/warehouse/posts', [\App\Http\Controllers\WarehousePostController::class, 'index'])->name('warehouse.posts.index');
    Route::get('/warehouse/posts/create', [\App\Http\Controllers\WarehousePostController::class, 'create'])->name('warehouse.posts.create');
    Route::post('/warehouse/posts', [\App\Http\Controllers\WarehousePostController::class, 'store'])->name('warehouse.posts.store');
    Route::get('/warehouse/posts/manage', [\App\Http\Controllers\WarehousePostController::class, 'manage'])->name('warehouse.posts.manage');
    Route::get('/warehouse/posts/{id}', [\App\Http\Controllers\WarehousePostController::class, 'show'])->name('warehouse.posts.show');
    Route::get('/warehouse/posts/{id}/edit', [\App\Http\Controllers\WarehousePostController::class, 'edit'])->name('warehouse.posts.edit');
    Route::patch('/warehouse/posts/{id}', [\App\Http\Controllers\WarehousePostController::class, 'update'])->name('warehouse.posts.update');
    Route::delete('/warehouse/posts/{id}', [\App\Http\Controllers\WarehousePostController::class, 'destroy'])->name('warehouse.posts.destroy');

    // コメント機能のルート
    Route::post('/posts/{postId}/comments', [\App\Http\Controllers\CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [\App\Http\Controllers\CommentController::class, 'destroy'])->name('comments.destroy');
    Route::get('/comment/manage', [\App\Http\Controllers\CommentController::class, 'manage'])->name('comment.manage');

    // 倉庫掲示板のコメント機能のルート
    Route::post('/warehouse/posts/{warehousePostId}/comments', [\App\Http\Controllers\WarehouseCommentController::class, 'store'])->name('warehouse.comments.store');
    Route::delete('/warehouse/comments/{comment}', [\App\Http\Controllers\WarehouseCommentController::class, 'destroy'])->name('warehouse.comments.destroy');


});

require __DIR__.'/auth.php';

Route::middleware(['auth', 'verified', \App\Http\Middleware\IsAdmin::class])->group(function () {
    Route::get('/dashboard/admin', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::resource('admin/users', \App\Http\Controllers\AdminUserController::class)->names('admin.users');
    Route::resource('admin/shops', \App\Http\Controllers\AdminShopController::class)->names('admin.shops');
    Route::resource('admin/equipments', \App\Http\Controllers\AdminEquipmentController::class)->names('admin.equipments');
    Route::resource('admin/warehouses', \App\Http\Controllers\AdminWarehouseController::class)->names('admin.warehouses');
    Route::resource('admin/warehouse_posts', \App\Http\Controllers\AdminWarehousePostController::class)->names('admin.warehouse_posts');
    Route::resource('admin/posts', \App\Http\Controllers\AdminPostController::class)->names('admin.posts');
    Route::resource('admin/comments', \App\Http\Controllers\AdminCommentController::class)->names('admin.comments');

    // CSV import/export routes
    Route::get('admin/csv', [\App\Http\Controllers\AdminCsvController::class, 'index'])->name('admin.csv.index');
    Route::get('admin/csv/export', [\App\Http\Controllers\AdminCsvController::class, 'export'])->name('admin.csv.export');
    Route::post('admin/csv/import', [\App\Http\Controllers\AdminCsvController::class, 'import'])->name('admin.csv.import');


});

Route::resource('admin/posts', \App\Http\Controllers\AdminPostController::class)->middleware(['auth', 'verified', \App\Http\Middleware\IsAdmin::class])->names('admin.posts');
