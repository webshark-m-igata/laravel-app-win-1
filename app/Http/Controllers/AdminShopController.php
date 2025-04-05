<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Shop;

class AdminShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shops = Shop::all();
        return Inertia::render('Admin/Shop/Index', [
            'shops' => $shops
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Shop/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
            $shop = Shop::find($id);
            return Inertia::render('Admin/Shop/Edit', ['shop' => $shop]);
        }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'opening_hours' => 'nullable|string',
            'status' => 'nullable|string',
            'phone_number' => 'nullable|string',
            'url' => 'nullable|string',
        ]);

        Shop::find($id)->update($validated);

        return redirect()->route('admin.shops.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $shop = Shop::find($id);
        if ($shop) {
            $shop->delete();
        }
        return redirect()->route('admin.shops.index');
    }
}