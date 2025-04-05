import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import NavLink from '@/Components/NavLink';

import { useState } from 'react';

export default function Index({ auth, posts, search_title: initialSearchTitle, search_content: initialSearchContent }) {
    const [search_title, setSearchTitle] = useState(initialSearchTitle || '');
    const [search_content, setSearchContent] = useState(initialSearchContent || '');
    const [globalFilter, setGlobalFilter] = useState(null);

    const handleDelete = (id) => {
        if (confirm('この掲示を削除してもよろしいですか？')) {
            Inertia.delete(route('admin.posts.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">掲示板一覧</h2>}
        >
            <Head title="掲示板一覧" />

            <div className="py-12 pt-4">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <Link href="/admin/posts/create" className="inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">新規掲示板作成</Link>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="タイトルで検索"
                                        className="p-2 mr-2 rounded border"
                                        value={search_title}
                                        onChange={(e) => setSearchTitle(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="コンテンツで検索"
                                        className="p-2 mr-2 rounded border"
                                        value={search_content}
                                        onChange={(e) => setSearchContent(e.target.value)}
                                    />
                                    <Link href={route('admin.posts.index', { search_title: search_title, search_content: search_content })} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                        検索
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span></span>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <input
                                        type="search"
                                        className="p-inputtext p-component"
                                        placeholder="グローバル検索..."
                                        onInput={(e) => setGlobalFilter(e.target.value)}
                                    />
                                </span>
                            </div>

                            <DataTable
                                value={posts}
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                tableStyle={{ minWidth: '50rem' }}
                                globalFilter={globalFilter}
                                emptyMessage="掲示板が見つかりません"
                                sortMode="multiple"
                                removableSort
                                resizableColumns
                                columnResizeMode="fit"
                                className="p-datatable-sm"
                                stripedRows
                            >
                                <Column
                                    field="shop.name"
                                    header="店舗"
                                    sortable
                                    filter
                                    filterPlaceholder="店舗で検索"
                                    style={{ width: '12%' }}
                                    body={(rowData) => rowData.shop ? rowData.shop.name : '未設定'}
                                />
                                <Column
                                    field="user.name"
                                    header="名前"
                                    sortable
                                    filter
                                    filterPlaceholder="名前で検索"
                                    style={{ width: '8%' }}
                                    body={(rowData) => rowData.user ? rowData.user.name : '未設定'}
                                />
                                <Column
                                    field="created_at"
                                    header="作成日"
                                    sortable
                                    filter
                                    filterPlaceholder="作成日で検索"
                                    style={{ width: '10%' }}
                                    body={(rowData) => new Date(rowData.created_at).toLocaleDateString()}
                                />
                                <Column field="id" header="ID" sortable filter filterPlaceholder="IDで検索" style={{ width: '5%' }} />
                                <Column field="title" header="タイトル" sortable filter filterPlaceholder="タイトルで検索" style={{ width: '20%' }} />
                                <Column
                                    header="操作"
                                    style={{ width: '20%' }}
                                    body={(rowData) => (
                                        <div className="flex flex-col space-y-2">
                                            <Link href={route('admin.posts.edit', rowData.id)} className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700">
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
