<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    public function index()
    {
        // Get all users first
        $users = User::all();

        // Manually load the shops and warehouses relationship for each user
        $users->each(function ($user) {
            // This will use the getShopsAttribute accessor
            $user->getShopsAttribute();
            // This will use the getWarehousesAttribute accessor
            $user->getWarehousesAttribute();
        });

        $shops = \App\Models\Shop::all();
        $warehouses = Warehouse::all();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'shops' => $shops,
            'warehouses' => $warehouses,
        ]);
    }

    public function create()
    {
        $shops = \App\Models\Shop::all();
        $warehouses = Warehouse::all();

        return Inertia::render('Admin/Users/Create', [
            'shops' => $shops,
            'warehouses' => $warehouses,
        ]);
    }

    public function store(Request $request)
    {
        // バリデーションなどの処理
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'shop_ids' => 'nullable|array',
            'shop_ids.*' => 'exists:shops,id',
            'warehouse_ids' => 'nullable|array',
            'warehouse_ids.*' => 'exists:warehouses,id',
            'role' => 'required|string|in:admin,user',
        ]);

        // Create user with validated data
        User::create($validated);
        return redirect()->route('admin.users.index');
    }

    public function edit(User $user)
    {
        $shops = \App\Models\Shop::all();
        $warehouses = Warehouse::all();

        return Inertia::render('Admin/Users/Edit', [
            'user' => $user,
            'shops' => $shops,
            'warehouses' => $warehouses,
        ]);
    }

    public function update(Request $request, User $user)
    {
        // バリデーションなどの処理
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'shop_ids' => 'nullable|array',
            'shop_ids.*' => 'exists:shops,id',
            'warehouse_ids' => 'nullable|array',
            'warehouse_ids.*' => 'exists:warehouses,id',
            'role' => 'required|string|in:admin,user',
        ]);

        // shop_idsとwarehouse_idsが配列であることを確認し、明示的に設定する
        // 配列が空の場合は空配列を設定する
        $user->shop_ids = $request->shop_ids ?? [];
        $user->warehouse_ids = $request->warehouse_ids ?? [];
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->role = $validated['role'];
        $user->save();

        // 関連するshopsとwarehousesリレーションをリフレッシュ
        $user->getShopsAttribute();
        $user->getWarehousesAttribute();

        return redirect()->route('admin.users.index');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users.index');
    }
}
