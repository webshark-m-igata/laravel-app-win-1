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

export default function Create({ auth, shops }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [shop_id, setShopId] = useState('');
    const [photoPreview, setPhotoPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        title: title,
        content: content,
        shop_id: shop_id,
        photo: null,
    });

    useEffect(() => {
        setData({
            title: title,
            content: content,
            shop_id: shop_id,
            photo: data.photo,
        });
    }, [title, content, shop_id, setData]);

    const submit = (e) => {
        e.preventDefault();

        post('/admin/posts', data, {
            onSuccess: () => router.push('/admin/posts'),
            onError: (errors) => {
                console.error('掲示板データの保存に失敗しました:', errors);
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
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">掲示板作成</h2>}
        >
            <Head title="掲示板作成" />

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
                                        //autocomplete="username"
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
                                            <p className="mb-2 text-sm">プレビュー:</p>
                                            <div className="inline-block relative">
                                                <img
                                                    src={photoPreview}
                                                    alt="Preview"
                                                    className="max-w-xs rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setData('photo', null);
                                                        setPhotoPreview(null);
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
