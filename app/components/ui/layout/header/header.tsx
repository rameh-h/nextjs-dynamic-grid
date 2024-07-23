import React, {Fragment} from 'react';
import {Bars3Icon, BellIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {Menu, MenuButton, MenuItem, MenuItems, Transition} from '@headlessui/react'
import Image from "next/image";
import {logout} from "@/app/action";
import Link from "next/link";


const userNavigation: ({ name: string; href: string; onClick?: () => void; })[] = [
    {name: 'Your profile', href: '#'},
    {
        name: 'Sign out', href: '/auth/sign-in', onClick: logout
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Header = (props: headerProps) => {
    return (
        <div className="sticky top-0 z-10 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div
                className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => props.setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>

                {/* Separator */}
                <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"/>

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form className="relative flex flex-1" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">

                        </label>
                        <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 hidden"
                            aria-hidden="true"
                        />
                        <input
                            id="search-field"
                            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            //placeholder="Search..."
                            type="search"
                            disabled
                            name="search"
                        />
                    </form>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Separator */}
                        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"/>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="h-8 w-8 rounded-full bg-gray-50"
                                    src="/avatar.jpg"
                                    alt=""
                                    width={200}
                                    height={200}
                                />
                                <span className="hidden lg:flex lg:items-center">
                        <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                          Tom Cook
                        </span>
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                      </span>
                            </MenuButton>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <MenuItems
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            {({focus}) => (
                                                <Link href={item.href} key={item.name}
                                                      className={classNames(
                                                          focus ? 'bg-gray-50' : '',
                                                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                      )}
                                                      onClick={() => {
                                                          if (item.onClick)
                                                              item.onClick()
                                                      }}>
                                                    {item.name}
                                                </Link>
                                            )}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

interface headerProps {
    setSidebarOpen: (open: boolean) => void;
}

export default Header;