import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function Manage({ posts }) {
    const [processing, setProcessing] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);

    const handleDelete = (postId) => {
        if (confirm('この投稿を削除してもよろしいですか？')) {
            setProcessing(true);
            router.delete(route('warehouse.posts.destroy', postId), {
                onFinish: () => setProcessing(false),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    倉庫掲示板投稿管理
                </h2>
            }
        >
            <Head title="倉庫掲示板投稿管理" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">あなたの倉庫掲示板投稿一覧</h3>
                                <Link
                                    href={route('warehouse.posts.create')}
                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    新規投稿
                                </Link>
                            </div>

                            <div className="flex justify-end mb-4">
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

                            {posts && posts.length > 0 ? (
                                <DataTable
                                    value={posts}
                                    paginator
                                    rows={10}
                                    rowsPerPageOptions={[5, 10, 25, 50]}
                                    tableStyle={{ minWidth: '50rem' }}
                                    globalFilter={globalFilter}
                                    emptyMessage="投稿がありません"
                                    sortMode="multiple"
                                    removableSort
                                    resizableColumns
                                    columnResizeMode="fit"
                                    className="p-datatable-sm"
                                    stripedRows
                                >
                                    <Column
                                        field="title"
                                        header="タイトル"
                                        sortable
                                        filter
                                        filterPlaceholder="タイトルで検索"
                                        style={{ width: '20%' }}
                                    />
                                    <Column
                                        field="content"
                                        header="内容"
                                        sortable
                                        filter
                                        filterPlaceholder="内容で検索"
                                        style={{ width: '25%' }}
                                        body={(rowData) => rowData.content.length > 100
                                            ? `${rowData.content.substring(0, 100)}...`
                                            : rowData.content}
                                    />
                                    <Column
                                        field="warehouse.name"
                                        header="倉庫"
                                        sortable
                                        filter
                                        filterPlaceholder="倉庫で検索"
                                        style={{ width: '15%' }}
                                        body={(rowData) => rowData.warehouse ? rowData.warehouse.name : 'Unknown'}
                                    />
                                    <Column
                                        field="created_at"
                                        header="作成日時"
                                        sortable
                                        style={{ width: '15%' }}
                                        body={(rowData) => new Date(rowData.created_at).toLocaleDateString('ja-JP', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    />
                                    <Column
                                        header="アクション"
                                        style={{ width: '15%' }}
                                        body={(rowData) => (
                                            <div className="flex gap-2">
                                                <Link href={route('warehouse.posts.show', rowData.id)}>
                                                    <Button icon="pi pi-eye" className="p-button-sm p-button-info" />
                                                </Link>
                                                <Link href={route('warehouse.posts.edit', rowData.id)}>
                                                    <Button icon="pi pi-pencil" className="p-button-sm p-button-success" />
                                                </Link>
                                                <Button
                                                    icon="pi pi-trash"
                                                    className="p-button-sm p-button-danger"
                                                    onClick={() => handleDelete(rowData.id)}
                                                    disabled={processing}
                                                />
                                            </div>
                                        )}
                                    />
                                </DataTable>
                            ) : (
                                <p>投稿がありません。新しい投稿を作成してください。</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
