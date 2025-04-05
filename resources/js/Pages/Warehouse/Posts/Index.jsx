import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

export default function Index({ posts }) {
    const [globalFilter, setGlobalFilter] = useState(null);

    // 投稿がない場合の表示
    if (!posts || posts.length === 0) {
        return (
            <AuthenticatedLayout
                header={<h2 className="text-xl font-semibold leading-tight text-gray-800">倉庫掲示板</h2>}
            >
                <Head title="倉庫掲示板" />

                <div className="py-12 pt-4">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-medium">倉庫掲示板</h3>
                                    <Link
                                        href={route('warehouse.posts.create')}
                                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        新規投稿
                                    </Link>
                                </div>
                                <p>表示できる投稿がありません。新しい投稿を作成するか、所属する倉庫を確認してください。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    // 投稿一覧の表示
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">倉庫掲示板</h2>}
        >
            <Head title="倉庫掲示板" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">倉庫掲示板</h3>
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

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post) => {
                                    // 投稿日時をフォーマット
                                    const formattedDate = new Date(post.created_at).toLocaleDateString('ja-JP', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    });

                                    // 投稿の画像URLを設定
                                    const photoUrl = post.photo
                                        ? `/storage/${post.photo}`
                                        : null;

                                    // カードのヘッダー部分を定義
                                    const header = (
                                        <div className="flex justify-between items-center p-3 bg-gray-50">
                                            <div className="flex items-center">
                                                <i className="mr-2 pi pi-user" />
                                                <span className="font-semibold">{post.user.name}</span>
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                <i className="mr-2 pi pi-calendar" />
                                                {formattedDate}
                                            </div>
                                        </div>
                                    );

                                    return (
                                        <Card key={post.id} title={post.title} subTitle={post.warehouse.name} header={header} className="h-full shadow-md">
                                            <div className="overflow-hidden mb-4" style={{ maxHeight: '100px' }}>
                                                {post.content.length > 100
                                                    ? `${post.content.substring(0, 100)}...`
                                                    : post.content}
                                            </div>

                                            {photoUrl && (
                                                <div className="mt-2 mb-4">
                                                    <Image src={photoUrl} alt="投稿画像" width="100%" preview height="120px" imageClassName="object-cover" />
                                                </div>
                                            )}

                                            <div className="flex justify-end mt-2">
                                                <Link href={route('warehouse.posts.show', post.id)}>
                                                    <Button label="詳細を見る" icon="pi pi-eye" className="p-button-sm" />
                                                </Link>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
