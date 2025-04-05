import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';

export default function Edit({ auth, comment, posts, users, warehousePosts }) {
    const [imagePreview, setImagePreview] = useState(comment.image_path ? `/storage/${comment.image_path}` : null);
    const [activeIndex, setActiveIndex] = useState(comment.post_id ? 0 : 1);

    const { data, setData, post, processing, errors, reset } = useForm({
        content: comment.content,
        post_id: comment.post_id || '',
        warehouse_post_id: comment.warehouse_post_id || '',
        user_id: comment.user_id,
        image: null,
        _method: 'put',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.comments.update', comment.id));
    };

    const handleImageChange = (e) => {
        const file = e.files[0];
        setData('image', file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(comment.image_path ? `/storage/${comment.image_path}` : null);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">コメント編集</h2>}
        >
            <Head title="コメント編集" />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <TabView activeIndex={activeIndex} onTabChange={(e) => {
                                    setActiveIndex(e.index);
                                    // タブ切り替え時に他方の値をクリア
                                    if (e.index === 0) {
                                        setData('warehouse_post_id', '');
                                    } else {
                                        setData('post_id', '');
                                    }
                                }}>
                                    <TabPanel header="投稿コメント">
                                        <div className="mb-4">
                                            <InputLabel htmlFor="post_id" value="投稿" />
                                            <Dropdown
                                                id="post_id"
                                                name="post_id"
                                                value={data.post_id}
                                                options={posts.map(post => ({ label: post.title, value: post.id }))}
                                                onChange={(e) => {
                                                    setData('post_id', e.value);
                                                }}
                                                placeholder="投稿を選択"
                                                className="block mt-1 w-full"
                                                filter
                                                filterPlaceholder="検索..."
                                            />
                                            <InputError message={errors.post_id} className="mt-2" />
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="倉庫投稿コメント">
                                        <div className="mb-4">
                                            <InputLabel htmlFor="warehouse_post_id" value="倉庫投稿" />
                                            <Dropdown
                                                id="warehouse_post_id"
                                                name="warehouse_post_id"
                                                value={data.warehouse_post_id}
                                                options={warehousePosts.map(warehousePost => ({ label: warehousePost.title, value: warehousePost.id }))}
                                                onChange={(e) => {
                                                    setData('warehouse_post_id', e.value);
                                                }}
                                                placeholder="倉庫投稿を選択"
                                                className="block mt-1 w-full"
                                                filter
                                                filterPlaceholder="検索..."
                                            />
                                            <InputError message={errors.warehouse_post_id} className="mt-2" />
                                        </div>
                                    </TabPanel>
                                </TabView>

                                <div className="mb-4">
                                    <InputLabel htmlFor="user_id" value="ユーザー" />
                                    <Dropdown
                                        id="user_id"
                                        name="user_id"
                                        value={data.user_id}
                                        options={users.map(user => ({ label: user.name, value: user.id }))}
                                        onChange={(e) => setData('user_id', e.value)}
                                        placeholder="ユーザーを選択"
                                        className="block mt-1 w-full"
                                        filter
                                        filterPlaceholder="検索..."
                                    />
                                    <InputError message={errors.user_id} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="content" value="コンテンツ" />
                                    <InputTextarea
                                        id="content"
                                        name="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        rows={5}
                                        className="block p-2 mt-1 w-full"
                                        autoResize
                                    />
                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="image" value="画像" />
                                    <FileUpload
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        maxFileSize={2000000}
                                        emptyTemplate={<p className="m-0">ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。</p>}
                                        onSelect={handleImageChange}
                                        chooseLabel="選択"
                                        uploadLabel="アップロード"
                                        cancelLabel="キャンセル"
                                        className="mt-1"
                                        auto
                                        customUpload
                                        uploadHandler={(e) => e.options.clear()}
                                    />
                                    <InputError message={errors.image} className="mt-2" />

                                    {imagePreview && (
                                        <div className="mt-2">
                                            <p className="mb-1 text-sm text-gray-600">プレビュー:</p>
                                            <img
                                                src={imagePreview}
                                                alt="プレビュー"
                                                className="object-contain max-w-xs max-h-48 rounded-md"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <Link
                                        href={route('admin.comments.index')}
                                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase bg-gray-300 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"
                                    >
                                        キャンセル
                                    </Link>
                                    <PrimaryButton type="submit" disabled={processing}>
                                        更新
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
