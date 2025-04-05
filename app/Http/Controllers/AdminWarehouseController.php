<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminWarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warehouses = Warehouse::all();
        return Inertia::render('Admin/Warehouses/Index', [
            'warehouses' => $warehouses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Warehouses/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
        ]);

        Warehouse::create($request->all());

        return redirect()->route('admin.warehouses.index');
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
        $warehouse = Warehouse::findOrFail($id);
        return Inertia::render('Admin/Warehouses/Edit', [
            'warehouse' => $warehouse,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
        ]);

        $warehouse = Warehouse::findOrFail($id);
        $warehouse->update($request->all());

        return redirect()->route('admin.warehouses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $warehouse = Warehouse::findOrFail($id);
        $warehouse->delete();

        return redirect()->route('admin.warehouses.index');
    }
}