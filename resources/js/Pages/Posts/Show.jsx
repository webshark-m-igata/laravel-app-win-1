import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import CommentList from '@/Components/Comments/CommentList';

export default function Show({ auth, post }) {
    // 投稿の画像URLを設定
    const photoUrl = post.photo
        ? `/storage/${post.photo}`
        : null;

    // 投稿日時をフォーマット
    const formattedDate = new Date(post.created_at).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

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

    // カードのフッター部分を定義
    const footer = (
        <div className="flex justify-between items-center mt-4">
            <div>
                <i className="mr-2 pi pi-tag" />
                <span className="text-sm">{post.shop.name}</span>
            </div>
            <Link href={route('dashboard')}>
                <Button label="ダッシュボードに戻る" icon="pi pi-arrow-left" className="p-button-sm" />
            </Link>
        </div>
    );

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">投稿詳細</h2>}
        >
            <Head title="投稿詳細" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Card title={post.title} subTitle={post.shop.name} header={header} footer={footer} className="shadow-md">
                        <div className="mb-6 whitespace-pre-wrap">{post.content}</div>

                        {photoUrl && (
                            <div className="mt-4">
                                <Image src={photoUrl} alt="投稿画像" width="100%" preview />
                            </div>
                        )}

                        {/* コメントセクション */}
                        <CommentList
                            comments={post.comments}
                            postId={post.id}
                            auth={auth}
                        />
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
