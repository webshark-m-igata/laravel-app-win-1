import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Manage({ auth, comments }) {
    const [processing, setProcessing] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [postComments, setPostComments] = useState([]);
    const [warehousePostComments, setWarehousePostComments] = useState([]);

    // コメントを投稿コメントと倉庫投稿コメントに分ける
    useEffect(() => {
        if (comments) {
            console.log('All comments:', comments);
            const postCommentsArray = comments.filter(comment => comment.post_id && comment.post);
            const warehouseCommentsArray = comments.filter(comment => comment.warehouse_post_id);

            console.log('Post comments:', postCommentsArray);
            console.log('Warehouse comments:', warehouseCommentsArray);

            setPostComments(postCommentsArray);
            setWarehousePostComments(warehouseCommentsArray);
        }
    }, [comments]);

    const handleDelete = (commentId) => {
        if (confirm('このコメントを削除してもよろしいですか？')) {
            setProcessing(true);
            router.delete(route('comments.destroy', commentId), {
                onFinish: () => setProcessing(false),
            });
        }
    };

    const postTemplate = (rowData) => {
        console.log(rowData);
        // 通常の投稿コメントの場合
        // 倉庫投稿コメントの場合
        console.log(rowData);
        if (rowData.warehousePost) {
            return (
                <Link href={route('warehouse.posts.show', rowData.warehousePost.id)} className="text-blue-600 hover:underline">
                    {rowData.warehousePost.title}
                </Link>
            );
        }

        if (rowData.post) {
            return (
                <Link href={route('post.show', rowData.post.id)} className="text-blue-600 hover:underline">
                    {rowData.post.title}
                </Link>
            );
        }


    };

    const imageTemplate = (rowData) => {
        if (rowData.image_path) {
            return (
                <div className="overflow-hidden w-16 h-16">
                    <img
                        src={`/storage/${rowData.image_path}`}
                        alt="Comment image"
                        className="object-cover w-full h-full"
                    />
                </div>
            );
        }
        return null;
    };

    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                {rowData.post && (
                    <Link href={route('post.show', rowData.post.id)}>
                        <Button icon="pi pi-eye" className="p-button-sm p-button-info" />
                    </Link>
                )}
                {rowData.warehousePost && (
                    <Link href={route('warehouse.posts.show', rowData.warehousePost.id)}>
                        <Button icon="pi pi-eye" className="p-button-sm p-button-info" />
                    </Link>
                )}
                <Button
                    icon="pi pi-trash"
                    className="p-button-sm p-button-danger"
                    onClick={() => handleDelete(rowData.id)}
                    disabled={processing}
                />
            </div>
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    コメント管理
                </h2>
            }
        >
            <Head title="コメント管理" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">あなたのコメント一覧</h3>
                            </div>

                            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                                <TabPanel header="投稿コメント">
                                    <div className="flex justify-end mb-4">
                                        <span className="p-input-icon-left">
                                            <i className="pi pi-search" />
                                            <InputText
                                                type="search"
                                                placeholder="検索..."
                                                onInput={(e) => setGlobalFilter(e.target.value)}
                                            />
                                        </span>
                                    </div>

                                    {postComments && postComments.length > 0 ? (
                                        <DataTable
                                            value={postComments}
                                            paginator
                                            rows={10}
                                            rowsPerPageOptions={[5, 10, 25, 50]}
                                            tableStyle={{ minWidth: '50rem' }}
                                            globalFilter={globalFilter}
                                            emptyMessage="投稿コメントがありません"
                                            sortMode="multiple"
                                            removableSort
                                            resizableColumns
                                            columnResizeMode="fit"
                                            className="p-datatable-sm"
                                            stripedRows
                                        >
                                            <Column
                                                field="content"
                                                header="コメント内容"
                                                sortable
                                                filter
                                                filterPlaceholder="内容で検索"
                                                style={{ width: '30%' }}
                                                body={(rowData) => rowData.content.length > 100
                                                    ? `${rowData.content.substring(0, 100)}...`
                                                    : rowData.content}
                                            />
                                            <Column
                                                field="title"
                                                header="投稿"
                                                sortable
                                                filter
                                                filterPlaceholder="投稿で検索"
                                                style={{ width: '20%' }}
                                                body={postTemplate}
                                            />
                                            <Column
                                                field="image_path"
                                                header="画像"
                                                style={{ width: '10%' }}
                                                body={imageTemplate}
                                            />
                                            <Column
                                                field="created_at"
                                                header="作成日時"
                                                sortable
                                                filter
                                                filterPlaceholder="日付で検索"
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
                                                body={actionTemplate}
                                            />
                                        </DataTable>
                                    ) : (
                                        <p>投稿コメントがありません。新しいコメントを作成してください。</p>
                                    )}
                                </TabPanel>

                                <TabPanel header="倉庫投稿コメント">
                                    <div className="flex justify-end mb-4">
                                        <span className="p-input-icon-left">
                                            <i className="pi pi-search" />
                                            <InputText
                                                type="search"
                                                placeholder="検索..."
                                                onInput={(e) => setGlobalFilter(e.target.value)}
                                            />
                                        </span>
                                    </div>

                                    {warehousePostComments && warehousePostComments.length > 0 ? (
                                        <DataTable
                                            value={warehousePostComments}
                                            paginator
                                            rows={10}
                                            rowsPerPageOptions={[5, 10, 25, 50]}
                                            tableStyle={{ minWidth: '50rem' }}
                                            globalFilter={globalFilter}
                                            emptyMessage="倉庫投稿コメントがありません"
                                            sortMode="multiple"
                                            removableSort
                                            resizableColumns
                                            columnResizeMode="fit"
                                            className="p-datatable-sm"
                                            stripedRows
                                        >
                                            <Column
                                                field="content"
                                                header="コメント内容"
                                                sortable
                                                filter
                                                filterPlaceholder="内容で検索"
                                                style={{ width: '30%' }}
                                                body={(rowData) => rowData.content.length > 100
                                                    ? `${rowData.content.substring(0, 100)}...`
                                                    : rowData.content}
                                            />
                                            <Column
                                                field="title"
                                                header="倉庫投稿"
                                                sortable
                                                filter
                                                filterPlaceholder="倉庫投稿で検索"
                                                style={{ width: '20%' }}
                                                body={postTemplate}
                                            />
                                            <Column
                                                field="image_path"
                                                header="画像"
                                                style={{ width: '10%' }}
                                                body={imageTemplate}
                                            />
                                            <Column
                                                field="created_at"
                                                header="作成日時"
                                                sortable
                                                filter
                                                filterPlaceholder="日付で検索"
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
                                                body={actionTemplate}
                                            />
                                        </DataTable>
                                    ) : (
                                        <p>倉庫投稿コメントがありません。新しいコメントを作成してください。</p>
                                    )}
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
