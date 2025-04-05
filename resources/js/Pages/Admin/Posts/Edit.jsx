import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import TextArea from '@/Components/TextArea.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import { useForm } from '@inertiajs/react';
import { FileUpload } from 'primereact/fileupload';

export default function Edit({ auth }) {
    const { post, shops } = usePage().props;
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [shop_id, setShopId] = useState(post.shop_id || '');
    const [photoPreview, setPhotoPreview] = useState(post.photo ? `/storage/${post.photo}` : null);

    const { data, setData, put, processing, errors } = useForm({
        title: title,
        content: content,
        shop_id: shop_id,
        photo: null,
        _method: 'PUT',
    });

    useEffect(() => {
        setData({
            title: title,
            content: content,
            shop_id: shop_id,
            photo: data.photo,
            _method: 'PUT',
        });
    }, [title, content, shop_id, setData]);

    const submit = (e) => {
        e.preventDefault();

        put(`/admin/posts/${post.id}`, data, {
            onSuccess: () => router.push('/admin/posts'),
            onError: (errors) => {
                console.error('掲示板データの更新に失敗しました:', errors);
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
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">掲示板編集</h2>}
        >
            <Head title="掲示板編集" />

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
                                        value={title}
                                        className="block mt-1 w-full"
                                        isFocused={true}
                                        onChange={(event) => setTitle(event.target.value)}
                                        required
                                    />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="content" value="コンテンツ" />

                                    <TextArea
                                        id="content"
                                        value={content}
                                        className="block mt-1 w-full"
                                        onChange={(event) => setContent(event.target.value)}
                                        rows={6}
                                        required
                                    />

                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="shop_id" value="店舗" />

                                    <SelectInput
                                        id="shop_id"
                                        className="block mt-1 w-full"
                                        value={shop_id}
                                        onChange={(e) => setShopId(e.target.value)}
                                        required
                                    >
                                        <option value="">店舗を選択してください</option>
                                        {shops.map((shop) => (
                                            <option key={shop.id} value={shop.id}>
                                                {shop.name}
                                            </option>
                                        ))}
                                    </SelectInput>

                                    <InputError message={errors.shop_id} className="mt-2" />
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
                                            <p className="mb-2 text-sm">現在の写真（新しい写真をアップロードすると置き換えられます）:</p>
                                            <img
                                                src={photoPreview}
                                                alt="Preview"
                                                className="max-w-xs rounded-md"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-4 items-center mt-4">
                                    <PrimaryButton disabled={processing}>保存</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
