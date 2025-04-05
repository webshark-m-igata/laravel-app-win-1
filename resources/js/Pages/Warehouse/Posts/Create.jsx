import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';

export default function Create({ warehouses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
        warehouse_id: '',
        photo: null,
    });

    const [photoPreview, setPhotoPreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('warehouse.posts.store'), {
            onSuccess: () => reset(),
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.files[0];
        if (file) {
            setData('photo', file);

            // プレビュー用のURLを作成
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhotoPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">新規倉庫掲示板投稿作成</h2>}
        >
            <Head title="新規倉庫掲示板投稿作成" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <InputLabel htmlFor="title" value="タイトル" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="block mt-1 w-full"
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="warehouse_id" value="倉庫" />
                                    <Dropdown
                                        id="warehouse_id"
                                        value={data.warehouse_id}
                                        options={warehouses.map(warehouse => ({ label: warehouse.name, value: warehouse.id }))}
                                        onChange={(e) => setData('warehouse_id', e.value)}
                                        placeholder="倉庫を選択"
                                        className="block mt-1 w-full"
                                        required
                                    />
                                    <InputError message={errors.warehouse_id} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="content" value="内容" />
                                    <InputTextarea
                                        id="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        style={{ height: '320px' }}
                                        className="block p-2 mt-1 w-full"
                                        rows={10}
                                    />
                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="photo" value="画像（任意）" />
                                    <FileUpload
                                        id="photo"
                                        name="photo"
                                        accept="image/*"
                                        maxFileSize={2000000}
                                        emptyTemplate={<p className="m-0">ここに画像をドラッグ＆ドロップするか、選択ボタンをクリックしてください。</p>}
                                        chooseLabel="選択"
                                        uploadLabel="アップロード"
                                        cancelLabel="キャンセル"
                                        className="mt-1"
                                        onSelect={handlePhotoChange}
                                        auto
                                        customUpload
                                        uploadHandler={(e) => e.options.clear()}
                                    />
                                    <InputError message={errors.photo} className="mt-2" />
                                </div>

                                {photoPreview && (
                                    <div className="mb-4">
                                        <InputLabel value="プレビュー" />
                                        <div className="mt-2">
                                            <img src={photoPreview} alt="Preview" className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-end items-center mt-4">
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        投稿する
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
