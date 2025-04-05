import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    console.log(user)

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto h-9 text-gray-800 fill-current" />
                                </Link>
                                {console.log(user.role)}
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href={route('post.manage')}
                                    active={route().current('post.manage')}
                                >
                                    投稿管理
                                </NavLink>

                                <NavLink
                                    href={route('comment.manage')}
                                    active={route().current('comment.manage')}
                                >
                                    コメント管理
                                </NavLink>

                                <NavLink
                                    href={route('warehouse.posts.manage')}
                                    active={route().current('warehouse.posts.manage')}
                                >
                                    倉庫投稿管理
                                </NavLink>


                                {user.role === 'admin' && (
                                    <>
                                        <NavLink
                                            href={route('admin.dashboard')}
                                            active={route().current('admin.dashboard')}
                                        >
                                            Admin Dashboard
                                        </NavLink>
                                    </>
                                )}
                           </div>
                       </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 bg-white rounded-md border border-transparent transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center -me-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex justify-center items-center p-2 text-gray-400 rounded-md transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route('post.manage')}
                            active={route().current('post.manage')}
                        >
                            投稿管理
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route('comment.manage')}
                            active={route().current('comment.manage')}
                        >
                            コメント管理
                        </ResponsiveNavLink>
                        {user.role === 'admin' && (
                            <ResponsiveNavLink
                                href={route('admin.dashboard')}
                                active={route().current('admin.dashboard')}
                            >
                                Admin Dashboard
                            </ResponsiveNavLink>
                        )}

                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <ResponsiveNavLink
                            method="post"
                            href={route('logout')}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
{user.role === 'admin' && (
<div className="mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <ul className='flex overflow-x-auto p-2 m-0 list-none select-none surface-card'>
                            <li className='flex-1'>
                            <NavLink href="/dashboard/admin">
                                Admin ダッシュボード
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/users">
                                ユーザー管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/shops">
                                ショップ管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/warehouses">
                                倉庫管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/equipments">
                                備品管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/posts">
                                投稿管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/warehouse_posts">
                                倉庫投稿管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/csv">
                                CSV管理
                            </NavLink>
                            </li>
                            <li className='flex-1'>
                            <NavLink href="/admin/comments">
                                コメント管理
                            </NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
            </div>
)}
            <main>{children}</main>
        </div>
    );
}
