import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState } from 'react';
import NavLink from '@/Components/NavLink';

export default function Index({ equipments }) {
    const [globalFilter, setGlobalFilter] = useState(null);

    const handleDelete = (id) => {
        if (confirm('この備品を削除してもよろしいですか？')) {
            Inertia.delete(route('admin.equipments.destroy', id));
        }
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">備品一覧</h2>}
        >
            <Head title="備品一覧" />

            <div className="py-12 pt-4">


                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between mb-4">
                                <a href={route('admin.equipments.create')} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                    備品登録
                                </a>
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
                                value={equipments}
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                tableStyle={{ minWidth: '50rem' }}
                                globalFilter={globalFilter}
                                emptyMessage="備品が見つかりません"
                                sortMode="multiple"
                                removableSort
                                resizableColumns
                                columnResizeMode="fit"
                                className="p-datatable-sm"
                                stripedRows
                            >
                                <Column field="name" header="名前" sortable filter filterPlaceholder="名前で検索" style={{ width: '15%' }} />
                                <Column field="model_number" header="型番" sortable filter filterPlaceholder="型番で検索" style={{ width: '10%' }} />
                                <Column field="manufacturer" header="メーカー" sortable filter filterPlaceholder="メーカーで検索" style={{ width: '10%' }} />
                                <Column field="serial_number" header="シリアル番号" sortable filter filterPlaceholder="シリアル番号で検索" style={{ width: '15%' }} />
                                <Column field="purchase_date" header="購入日" sortable filter filterPlaceholder="購入日で検索" style={{ width: '10%' }} />
                                <Column field="warranty_expiration_date" header="保証満了日" sortable filter filterPlaceholder="保証満了日で検索" style={{ width: '10%' }} />
                                <Column field="location" header="保管場所" sortable filter filterPlaceholder="保管場所で検索" style={{ width: '10%' }} />
                                <Column
                                    header="操作"
                                    style={{ width: '10%' }}
                                    body={(rowData) => (
                                        <div className="flex flex-col space-y-2">
                                            <a href={route('admin.equipments.edit', rowData.id)} className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700">
                                                編集
                                            </a>
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
