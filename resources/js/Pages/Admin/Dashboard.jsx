import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12 pt-4">





                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            管理者ダッシュボードへようこそ！

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
