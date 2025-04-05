import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ equipment }) {
    const { data, setData, put, processing, errors } = useForm({
        name: equipment.name,
        model_number: equipment.model_number,
        manufacturer: equipment.manufacturer,
        serial_number: equipment.serial_number,
        purchase_date: equipment.purchase_date,
        warranty_expiration_date: equipment.warranty_expiration_date,
        location: equipment.location,
        notes: equipment.notes,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('admin.equipments.update', equipment.id));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">備品編集</h2>}
        >
            <Head title="備品編集" />

            <div className="py-12 pt-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="名前" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        autoFocus
                                        placeholder="名前"
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="model_number" value="型番" />

                                    <TextInput
                                        id="model_number"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.model_number}
                                        onChange={(e) => setData('model_number', e.target.value)}
                                        placeholder="型番"
                                    />

                                    <InputError message={errors.model_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="manufacturer" value="メーカー" />

                                    <TextInput
                                        id="manufacturer"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.manufacturer}
                                        onChange={(e) => setData('manufacturer', e.target.value)}
                                        placeholder="メーカー"
                                    />

                                    <InputError message={errors.manufacturer} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="serial_number" value="シリアル番号" />

                                    <TextInput
                                        id="serial_number"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.serial_number}
                                        onChange={(e) => setData('serial_number', e.target.value)}
                                        placeholder="シリアル番号"
                                    />

                                    <InputError message={errors.serial_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="purchase_date" value="購入日" />

                                    <TextInput
                                        id="purchase_date"
                                        type="date"
                                        className="mt-1 block w-full"
                                        value={data.purchase_date}
                                        onChange={(e) => setData('purchase_date', e.target.value)}
                                        placeholder="購入日"
                                    />

                                    <InputError message={errors.purchase_date} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="warranty_expiration_date" value="保証満了日" />

                                    <TextInput
                                        id="warranty_expiration_date"
                                        type="date"
                                        className="mt-1 block w-full"
                                        value={data.warranty_expiration_date}
                                        onChange={(e) => setData('warranty_expiration_date', e.target.value)}
                                        placeholder="保証満了日"
                                    />

                                    <InputError message={errors.warranty_expiration_date} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="location" value="保管場所" />

                                    <TextInput
                                        id="location"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        placeholder="保管場所"
                                    />

                                    <InputError message={errors.location} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="notes" value="備考" />

                                    <TextInput
                                        id="notes"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.notes}
                                        onChange={(e) => setData('notes', e.target.value)}
                                        placeholder="備考"
                                    />

                                    <InputError message={errors.notes} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4" disabled={processing}>
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
