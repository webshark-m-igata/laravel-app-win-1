import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import NavLink from '@/Components/NavLink';
import { useState, useEffect } from 'react';

export default function Index({ auth, comments, search_content: initialSearchContent, search_user: initialSearchUser }) {
    const [search_content, setSearchContent] = useState(initialSearchContent || '');
    const [search_user, setSearchUser] = useState(initialSearchUser || '');
    const [globalFilter, setGlobalFilter] = useState(null);
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        // すべてのコメントに種類を追加
        const commentsWithType = comments.map(comment => {
            // コメントの種類を判定
            const commentType = comment.warehouse_post_id !== null ? '倉庫投稿コメント' : '投稿コメント';
            return {
                ...comment,
                commentType: commentType
            };
        });

        setAllComments(commentsWithType);
    }, [comments]);

    const handleDelete = (id) => {
        if (confirm('このコメントを削除してもよろしいですか？')) {
            Inertia.delete(route('admin.comments.destroy', id));
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const imageTemplate = (rowData) => {
        if (rowData.image_path) {
            return (
                <div className="overflow-hidden w-16 h-16">
                    <img
                        src={`/storage/${rowData.image_path}`}
                        alt="コメント画像"
                        className="object-cover w-full h-full"
                    />
                </div>
            );
        }
        return null;
    };

    const actionTemplate = (rowData) => {
        return (
            <div className="flex flex-col space-y-2">
                <Link
                    href={route('admin.comments.edit', rowData.id)}
                    className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700"
                >
                    編集
                </Link>
                <button
                    onClick={() => handleDelete(rowData.id)}
                    className="px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                >
                    削除
                </button>
            </div>
        );
    };

    const relatedPostTemplate = (rowData) => {
        if (rowData.warehouse_post_id !== null) {
            // 倉庫投稿コメントの場合
            if (rowData.warehousePost && rowData.warehousePost.title) {
                return (
                    <Link href={route('warehouse.posts.show', rowData.warehousePost.id)} className="text-blue-600 hover:underline">
                        {rowData.warehousePost.title}
                    </Link>
                );
            } else if (rowData.warehouse_post_id) {
                return (
                    <Link href={route('warehouse.posts.show', rowData.warehouse_post_id)} className="text-blue-600 hover:underline">
                        倉庫投稿 #{rowData.warehouse_post_id}
                    </Link>
                );
            }
        } else if (rowData.post_id !== null) {
            // 投稿コメントの場合
            if (rowData.post) {
                return (
                    <Link href={route('post.show', rowData.post.id)} className="text-blue-600 hover:underline">
                        {rowData.post.title}
                    </Link>
                );
            } else {
                return `投稿 #${rowData.post_id}`;
            }
        }
        return '不明';
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">コメント一覧</h2>}
        >
            <Head title="コメント管理" />


            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <Link href={route('admin.comments.create')} className="inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">新規コメント作成</Link>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="コンテンツで検索"
                                        className="p-2 mr-2 rounded border"
                                        value={search_content}
                                        onChange={(e) => setSearchContent(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="ユーザー名で検索"
                                        className="p-2 mr-2 rounded border"
                                        value={search_user}
                                        onChange={(e) => setSearchUser(e.target.value)}
                                    />
                                    <Link href={route('admin.comments.index', { search_content: search_content, search_user: search_user })} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
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
                                value={allComments}
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                tableStyle={{ minWidth: '50rem' }}
                                globalFilter={globalFilter}
                                emptyMessage="コメントが見つかりません"
                                sortMode="multiple"
                                removableSort
                                resizableColumns
                                columnResizeMode="fit"
                                className="p-datatable-sm"
                                stripedRows
                            >
                                <Column
                                    field="commentType"
                                    header="種類"
                                    sortable
                                    filter
                                    filterPlaceholder="種類で検索"
                                    style={{ width: '10%' }}
                                />
                                <Column
                                    field="user.name"
                                    header="名前"
                                    sortable
                                    filter
                                    filterPlaceholder="名前で検索"
                                    style={{ width: '15%' }}
                                    body={(rowData) => rowData.user ? rowData.user.name : '未設定'}
                                />
                                <Column
                                    field="created_at"
                                    header="作成日"
                                    sortable
                                    filter
                                    filterPlaceholder="作成日で検索"
                                    style={{ width: '15%' }}
                                    body={(rowData) => formatDate(rowData.created_at)}
                                />
                                <Column field="id" header="ID" sortable filter filterPlaceholder="IDで検索" style={{ width: '10%' }} />
                                <Column
                                    field="content"
                                    header="コンテンツ"
                                    sortable
                                    filter
                                    filterPlaceholder="コンテンツで検索"
                                    style={{ width: '35%' }}
                                    body={(rowData) => (
                                        <div className="overflow-y-auto max-h-20">
                                            {rowData.warehouse_post_id !== null ? (
                                                <Link
                                                    href={route('warehouse.posts.show', rowData.warehouse_post_id)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {rowData.content}
                                                </Link>
                                            ) : rowData.post_id !== null ? (
                                                <Link
                                                    href={route('post.show', rowData.post_id)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {rowData.content}
                                                </Link>
                                            ) : (
                                                rowData.content
                                            )}
                                        </div>
                                    )}
                                />
                                <Column
                                    field="image_path"
                                    header="画像"
                                    style={{ width: '10%' }}
                                    body={imageTemplate}
                                />
                                <Column
                                    header="操作"
                                    style={{ width: '15%' }}
                                    body={(rowData) => (
                                        <div className="flex flex-col space-y-2">
                                            <Link href={route('admin.comments.edit', rowData.id)} className="px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700">
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
