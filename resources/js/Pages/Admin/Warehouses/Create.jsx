import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ auth }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();

        Inertia.post(route('admin.warehouses.store'), {
            name: name,
            address: address,
            phone_number: phoneNumber,
            email: email,
        }, {
            onSuccess: () => {
                setName('');
                setAddress('');
                setErrors({});
            },
            onError: (errors) => {
                setErrors(errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">倉庫登録</h2>}
        >
            <Head title="倉庫登録" />

            <div className="py-12 pt-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="名前" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        autoFocus
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="address" value="住所" />

                                    <TextInput
                                        id="address"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.address} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="phone_number" value="電話番号" />

                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        className="block mt-1 w-full"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />

                                    <InputError message={errors.phone_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="メールアドレス" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="block mt-1 w-full"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="flex justify-end items-center mt-4">
                                    <PrimaryButton>
                                        登録
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
