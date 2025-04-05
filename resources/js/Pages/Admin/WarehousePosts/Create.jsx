import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import TextArea from '@/Components/TextArea.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import { useForm } from '@inertiajs/react';
import { FileUpload } from 'primereact/fileupload';

export default function Create({ auth, warehouses }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [warehouse_id, setWarehouseId] = useState('');
    const [photoPreview, setPhotoPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        title: title,
        content: content,
        warehouse_id: warehouse_id,
        photo: null,
    });

    useEffect(() => {
        setData({
            title: title,
            content: content,
            warehouse_id: warehouse_id,
            photo: data.photo,
        });
    }, [title, content, warehouse_id, setData]);

    const submit = (e) => {
        e.preventDefault();

        post('/admin/warehouse_posts', data, {
            onSuccess: () => router.push('/admin/warehouse_posts'),
            onError: (errors) => {
                console.error('倉庫掲示板データの保存に失敗しました:', errors);
            },
            forceFormData: true
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.files[0];
        if (file) {
            setData('photo', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhotoPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">倉庫掲示板作成</h2>}
        >
            <Head title="倉庫掲示板作成" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} encType="multipart/form-data">
                                <div>
                                    <InputLabel htmlFor="title" value="タイトル" />

                                    <TextInput
                                        id="title"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        autoFocus
                                    />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="content" value="コンテンツ" />

                                    <textarea
                                        id="content"
                                        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                        rows="8"
                                    />

                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="warehouse_id" value="倉庫" />

                                    <SelectInput
                                        id="warehouse_id"
                                        className="block mt-1 w-full"
                                        value={warehouse_id}
                                        onChange={(e) => setWarehouseId(e.target.value)}
                                        required
                                    >
                                        <option value="">倉庫を選択してください</option>
                                        {warehouses.map((warehouse) => (
                                            <option key={warehouse.id} value={warehouse.id}>
                                                {warehouse.name}
                                            </option>
                                        ))}
                                    </SelectInput>

                                    <InputError message={errors.warehouse_id} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="photo" value="画像（オプション）" />

                                    <FileUpload
                                        id="photo"
                                        name="photo"
                                        accept="image/*"
                                        maxFileSize={2000000}
                                        emptyTemplate={<p className="m-0">ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。</p>}
                                        onSelect={handlePhotoChange}
                                        chooseLabel="選択"
                                        uploadLabel="アップロード"
                                        cancelLabel="キャンセル"
                                        className="mt-1"
                                        auto
                                        customUpload
                                        uploadHandler={(e) => e.options.clear()}
                                    />

                                    <InputError message={errors.photo} className="mt-2" />

                                    {photoPreview && (
                                        <div className="mt-2">
                                            <p className="mb-2 text-sm">プレビュー:</p>
                                            <img
                                                src={photoPreview}
                                                alt="Preview"
                                                className="max-w-xs rounded-md"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-end items-center mt-4">
                                    <PrimaryButton type="submit">
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
