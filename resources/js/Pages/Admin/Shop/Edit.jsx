import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import { useForm } from '@inertiajs/react';

export default function Edit({ auth }) {
    const { shop } = usePage().props;
    const [name, setName] = useState(shop.name);
    const [description, setDescription] = useState(shop.description || '');
    const [opening_hours, setOpeningHours] = useState(shop.opening_hours || '');
    const [status, setStatus] = useState(shop.status || '');
    const [phone_number, setPhoneNumber] = useState(shop.phone_number || '');
    const [url, setUrl] = useState(shop.url || '');

    const { data, setData, put, processing, errors } = useForm({
        name: name,
        description: description,
        opening_hours: opening_hours,
        status: status,
        phone_number: phone_number,
        url: url,
    });

    useEffect(() => {
        setData({
            name: name,
            description: description,
            opening_hours: opening_hours,
            status: status,
            phone_number: phone_number,
            url: url,
        });
    }, [name, description, opening_hours, status, phone_number, url, setData]);

    const submit = (e) => {
        e.preventDefault();

        put(`/admin/shops/${shop.id}`, data, {
            onSuccess: () => router.push('/admin/shops'),
            onError: (errors) => {
                console.error('店舗データの更新に失敗しました:', errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">店舗編集</h2>}
        >
            <Head title="店舗編集" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="店舗名" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={name}
                                        className="block mt-1 w-full"
                                        isFocused={true}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="description" value="店舗説明" />

                                    <TextInput
                                        id="description"
                                        type="text"
                                        value={description}
                                        className="block mt-1 w-full"
                                        onChange={(event) => setDescription(event.target.value)}
                                    />

                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="opening_hours" value="営業時間" />

                                    <TextInput
                                        id="opening_hours"
                                        type="text"
                                        value={opening_hours}
                                        className="block mt-1 w-full"
                                        onChange={(event) => setOpeningHours(event.target.value)}
                                    />

                                    <InputError message={errors.opening_hours} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="status" value="ステータス" />

                                    <SelectInput
                                        id="status"
                                        className="block mt-1 w-full"
                                        value={status}
                                        onChange={(event) => setStatus(event.target.value)}
                                    >
                                        <option value="">選択してください</option>
                                        <option value="営業中">営業中</option>
                                        <option value="準備中">準備中</option>
                                        <option value="休業中">休業中</option>
                                        <option value="閉店">閉店</option>
                                    </SelectInput>

                                    <InputError message={errors.status} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="phone_number" value="電話番号" />

                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        value={phone_number}
                                        className="block mt-1 w-full"
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                    />

                                    <InputError message={errors.phone_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="url" value="ウェブサイトURL" />

                                    <TextInput
                                        id="url"
                                        type="text"
                                        value={url}
                                        className="block mt-1 w-full"
                                        onChange={(event) => setUrl(event.target.value)}
                                    />

                                    <InputError message={errors.url} className="mt-2" />
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
