import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ posts, warehousePosts }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* ショップの投稿セクション */}
                    <div className="overflow-hidden mb-8 bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">あなたの所属するショップの投稿一覧</h3>
                                <a
                                    href="/post/create"
                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    新規投稿
                                </a>
                            </div>

                            {posts && posts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <div key={post.id} className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow transition-shadow duration-300 hover:shadow-md">
                                            <Link href={route('post.show', post.id)}>
                                                {post.photo && (
                                                    <div className="overflow-hidden w-full h-48">
                                                        <img
                                                            src={`/storage/${post.photo}`}
                                                            alt={post.title}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-4">
                                                    <h4 className="mb-2 text-xl font-bold">{post.title}</h4>
                                                    <p className="mb-2 text-sm text-gray-600">
                                                        ショップ: {post.shop?.name || 'Unknown'}
                                                    </p>
                                                    <p className="mb-4 text-gray-700">
                                                        {post.content.length > 100
                                                            ? `${post.content.substring(0, 100)}...`
                                                            : post.content}
                                                    </p>
                                                    <div className="text-sm text-gray-500">
                                                        投稿者: {post.user?.name || 'Unknown'}
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-500">
                                                        投稿日: {new Date(post.created_at).toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                    <div className="mt-4">
                                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-md transition-colors duration-300 hover:bg-indigo-200">
                                                            詳細を見る →
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>投稿がありません。</p>
                            )}
                        </div>
                    </div>

                    {/* 倉庫の投稿セクション */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">あなたの所属する倉庫の投稿一覧</h3>
                                <a
                                    href={route('warehouse.posts.create')}
                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    新規投稿
                                </a>
                            </div>

                            {warehousePosts && warehousePosts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {warehousePosts.map((post) => (
                                        <div key={post.id} className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow transition-shadow duration-300 hover:shadow-md">
                                            <Link href={route('warehouse.posts.show', post.id)}>
                                                {post.photo && (
                                                    <div className="overflow-hidden w-full h-48">
                                                        <img
                                                            src={`/storage/${post.photo}`}
                                                            alt={post.title}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-4">
                                                    <h4 className="mb-2 text-xl font-bold">{post.title}</h4>
                                                    <p className="mb-2 text-sm text-gray-600">
                                                        倉庫: {post.warehouse?.name || 'Unknown'}
                                                    </p>
                                                    <p className="mb-4 text-gray-700">
                                                        {post.content.length > 100
                                                            ? `${post.content.substring(0, 100)}...`
                                                            : post.content}
                                                    </p>
                                                    <div className="text-sm text-gray-500">
                                                        投稿者: {post.user?.name || 'Unknown'}
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-500">
                                                        投稿日: {new Date(post.created_at).toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                    <div className="mt-4">
                                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-md transition-colors duration-300 hover:bg-indigo-200">
                                                            詳細を見る →
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>投稿がありません。</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
