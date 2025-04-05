<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Equipment;
use Inertia\Inertia;

class AdminEquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $equipments = Equipment::all();
        return Inertia::render('Admin/Equipments/Index', [
            'equipments' => $equipments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Equipments/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(\Illuminate\Http\Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        Equipment::create($request->all());

        return redirect()->route('admin.equipments.index');
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
        $equipment = Equipment::find($id);
        return Inertia::render('Admin/Equipments/Edit', [
            'equipment' => $equipment,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(\Illuminate\Http\Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $equipment = Equipment::find($id);
        $equipment->update($request->all());

        return redirect()->route('admin.equipments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $equipment = Equipment::find($id);
        $equipment->delete();

        return redirect()->route('admin.equipments.index');
    }
}