import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState } from 'react';
import NavLink from '@/Components/NavLink';

export default function Index({ auth, warehouses }) {
    const [globalFilter, setGlobalFilter] = useState(null);

    const handleDelete = (id) => {
        if (confirm('この倉庫を削除してもよろしいですか？')) {
            Inertia.delete(`/admin/warehouses/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">倉庫一覧</h2>}
        >
            <Head title="倉庫一覧" />

            <div className="py-12 pt-4">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between mb-4">
                                <a href="/admin/warehouses/create" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">倉庫登録</a>
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
                                value={warehouses}
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                tableStyle={{ minWidth: '50rem' }}
                                globalFilter={globalFilter}
                                emptyMessage="倉庫が見つかりません"
                                sortMode="multiple"
                                removableSort
                                resizableColumns
                                columnResizeMode="fit"
                                className="p-datatable-sm"
                                stripedRows
                            >
                                <Column field="id" header="ID" sortable filter filterPlaceholder="IDで検索" style={{ width: '5%' }} />
                                <Column field="name" header="名前" sortable filter filterPlaceholder="名前で検索" style={{ width: '15%' }} />
                                <Column field="address" header="住所" sortable filter filterPlaceholder="住所で検索" style={{ width: '30%' }} />
                                <Column field="phone_number" header="電話番号" sortable filter filterPlaceholder="電話番号で検索" style={{ width: '15%' }} />
                                <Column field="email" header="メールアドレス" sortable filter filterPlaceholder="メールアドレスで検索" style={{ width: '20%' }} />
                                <Column
                                    header="操作"
                                    style={{ width: '15%' }}
                                    body={(rowData) => (
                                        <div className="flex flex-col space-y-2">
                                            <Link href={route('admin.warehouses.edit', rowData.id)} className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700">
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
