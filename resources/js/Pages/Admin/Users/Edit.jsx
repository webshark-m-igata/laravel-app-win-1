import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Dropdown } from 'primereact/dropdown';

export default function Edit({ auth, user, shops, warehouses }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedShops, setSelectedShops] = useState([]);
    const [selectedWarehouses, setSelectedWarehouses] = useState([]);
    const [role, setRole] = useState('');

    const roleOptions = [
        { label: '管理者', value: 'admin' },
        { label: 'ユーザー', value: 'user' }
    ];

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setSelectedShops(user.shop_ids || []);
        setSelectedWarehouses(user.warehouse_ids || []);
        setRole(user.role || 'user');
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/admin/users/${user.id}`, {
            name: name,
            email: email,
            shop_ids: selectedShops,
            warehouse_ids: selectedWarehouses,
            role: role,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit User</h2>}
        >
            <Head title="Edit User" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">Shops</label>
                                    <div className="mt-2 space-y-2">
                                        {shops.map((shop) => (
                                            <div key={shop.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`shop-${shop.id}`}
                                                    className="text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    checked={selectedShops.includes(shop.id)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedShops([...selectedShops, shop.id]);
                                                        } else {
                                                            setSelectedShops(selectedShops.filter(id => id !== shop.id));
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={`shop-${shop.id}`} className="ml-2 text-sm text-gray-700">
                                                    {shop.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">Warehouses</label>
                                    <div className="mt-2 space-y-2">
                                        {warehouses.map((warehouse) => (
                                            <div key={warehouse.id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`warehouse-${warehouse.id}`}
                                                    className="text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    checked={selectedWarehouses.includes(warehouse.id)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedWarehouses([...selectedWarehouses, warehouse.id]);
                                                        } else {
                                                            setSelectedWarehouses(selectedWarehouses.filter(id => id !== warehouse.id));
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={`warehouse-${warehouse.id}`} className="ml-2 text-sm text-gray-700">
                                                    {warehouse.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">ロール</label>
                                    <Dropdown
                                        value={role}
                                        options={roleOptions}
                                        onChange={(e) => setRole(e.value)}
                                        placeholder="ロールを選択"
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
