<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use App\Models\WarehousePost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminWarehousePostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = WarehousePost::query();

        $search_title = $request->input('search_title');
        $search_content = $request->input('search_content');

        if ($search_title) {
            $query->where('title', 'like', "%{$search_title}%");
        }

        if ($search_content) {
            $query->where('content', 'like', "%{$search_content}%");
        }

        // 倉庫情報とユーザー情報を一緒に取得
        $warehousePosts = $query->with(['warehouse', 'user'])->get();

        return Inertia::render('Admin/WarehousePosts/Index', [
            'warehousePosts' => $warehousePosts,
            'search_title' => $search_title,
            'search_content' => $search_content,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $warehouses = Warehouse::all();
        return Inertia::render('Admin/WarehousePosts/Create', [
            'warehouses' => $warehouses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'warehouse_id' => 'required|exists:warehouses,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $validated['title'],
            'content' => $validated['content'],
            'warehouse_id' => $validated['warehouse_id'],
            'user_id' => auth()->id(), // ログインユーザーのIDを自動的に設定
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('warehouse_posts', 'public');
            $data['photo'] = $path;
        }

        WarehousePost::create($data);

        return redirect()->route('admin.warehouse_posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $warehousePost = WarehousePost::find($id);
        $warehouses = Warehouse::all();
        return Inertia::render('Admin/WarehousePosts/Edit', [
            'warehousePost' => $warehousePost,
            'warehouses' => $warehouses
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'warehouse_id' => 'required|exists:warehouses,id',
            'photo' => 'nullable|image|max:2048',
        ]);

        $warehousePost = WarehousePost::find($id);
        $data = [
            'title' => $validated['title'],
            'content' => $validated['content'],
            'warehouse_id' => $validated['warehouse_id'],
        ];

        // 画像がアップロードされた場合は保存
        if ($request->hasFile('photo')) {
            // 古い画像が存在する場合は削除
            if ($warehousePost->photo) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($warehousePost->photo);
            }
            $path = $request->file('photo')->store('warehouse_posts', 'public');
            $data['photo'] = $path;
        }

        // user_idは変更しないようにする（元のユーザーIDを維持）
        $warehousePost->update($data);

        return redirect()->route('admin.warehouse_posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        WarehousePost::destroy($id);

        return redirect()->route('admin.warehouse_posts.index');
    }
}
