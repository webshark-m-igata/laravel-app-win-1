import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import NavLink from '@/Components/NavLink';

import { useState } from 'react';

export default function Index({ auth, users, shops, warehouses }) {
    const [globalFilter, setGlobalFilter] = useState(null);

    const handleDelete = (id) => {
        if (confirm('このユーザーを削除してもよろしいですか？')) {
            Inertia.delete(route('admin.users.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">ユーザー一覧</h2>}
        >
            <Head title="ユーザー一覧" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between mb-4">
                                <Link href={route('admin.users.create')} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">ユーザー登録</Link>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <input
                                        type="search"
                                        className="p-inputtext p-component"
                                        placeholder="検索..."
                                        onInput={(e) => setGlobalFilter(e.target.value)}
                                    />
                                </span>
                            </div>

                            <DataTable
                                value={users}
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                tableStyle={{ minWidth: '50rem' }}
                                globalFilter={globalFilter}
                                emptyMessage="ユーザーが見つかりません"
                                sortMode="multiple"
                                removableSort
                                resizableColumns
                                columnResizeMode="fit"
                                className="p-datatable-sm"
                                stripedRows
                            >
                                <Column field="id" header="ID" sortable filter filterPlaceholder="IDで検索" style={{ width: '5%' }} />
                                <Column field="name" header="名前" sortable filter filterPlaceholder="名前で検索" style={{ width: '15%' }} />
                                <Column field="email" header="メールアドレス" sortable filter filterPlaceholder="メールアドレスで検索" style={{ width: '20%' }} />
                                <Column
                                    field="shops"
                                    header="店舗"
                                    sortable
                                    filter
                                    filterPlaceholder="店舗で検索"
                                    style={{ width: '15%' }}
                                    body={(rowData) => rowData.shops ? rowData.shops.map(shop => shop.name).join(', ') : '未設定'}
                                />
                                <Column
                                    field="warehouses"
                                    header="倉庫"
                                    sortable
                                    filter
                                    filterPlaceholder="倉庫で検索"
                                    style={{ width: '15%' }}
                                    body={(rowData) => rowData.warehouses ? rowData.warehouses.map(warehouse => warehouse.name).join(', ') : '未設定'}
                                />
                                <Column field="role" header="役割" sortable filter filterPlaceholder="役割で検索" style={{ width: '10%' }} />
                                <Column
                                    header="操作"
                                    style={{ width: '15%' }}
                                    body={(rowData) => (
                                        <div className="flex flex-col space-y-2">
                                            <Link href={route('admin.users.edit', rowData.id)} className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700">
                                                編集
                                            </Link>
                                            <button className="px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => handleDelete(rowData.id)}>削除</button>
                                        </div>
                                    )}
                                />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
