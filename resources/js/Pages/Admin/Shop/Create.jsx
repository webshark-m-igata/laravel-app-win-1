import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import { useState } from 'react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        opening_hours: '',
        status: '',
        phone_number: '',
        url: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.shops.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">店舗作成</h2>}
        >
            <Head title="店舗作成" />

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
                                        className="block mt-1 w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        autoFocus
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="description" value="店舗説明" />

                                    <TextInput
                                        id="description"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />

                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="opening_hours" value="営業時間" />

                                    <TextInput
                                        id="opening_hours"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={data.opening_hours}
                                        onChange={(e) => setData('opening_hours', e.target.value)}
                                    />

                                    <InputError message={errors.opening_hours} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="status" value="ステータス" />

                                    <SelectInput
                                        id="status"
                                        className="block mt-1 w-full"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        required
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
                                        className="block mt-1 w-full"
                                        value={data.phone_number}
                                        onChange={(e) => setData('phone_number', e.target.value)}
                                    />

                                    <InputError message={errors.phone_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="url" value="ウェブサイトURL" />

                                    <TextInput
                                        id="url"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={data.url}
                                        onChange={(e) => setData('url', e.target.value)}
                                    />

                                    <InputError message={errors.url} className="mt-2" />
                                </div>

                                <div className="flex gap-4 items-center mt-4">
                                    <PrimaryButton type="submit" disabled={processing}>
                                        {processing ? '処理中...' : '作成'}
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
