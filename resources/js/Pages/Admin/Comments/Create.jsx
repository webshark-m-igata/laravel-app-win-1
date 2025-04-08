import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';

export default function Create({ auth, posts, warehousePosts }) {
    const [imagePreview, setImagePreview] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
        post_id: '',
        warehouse_post_id: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.comments.store'));
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
            setImagePreview(null);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">新規コメント作成</h2>}
        >
            <Head title="新規コメント作成" />

            <div className="py-12 pt-4">
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
                                            <p className="mb-2 text-sm">プレビュー:</p>
                                            <div className="inline-block relative">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="max-w-xs rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setData('image', null);
                                                        setImagePreview(null);
                                                    }}
                                                    className="absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full hover:bg-red-700"
                                                    style={{ transform: 'translate(50%, -50%)' }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
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
                                    <PrimaryButton type="submit" disabled={processing} severity="success">
                                        作成
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
