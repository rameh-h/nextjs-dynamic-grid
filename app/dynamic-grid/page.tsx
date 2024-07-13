'use client'

import React, {useState, useEffect, Fragment} from 'react';

import GridComponent from "@/app/components/ui/grid/gridComponent";
import {getDynamicColumn} from "@/app/api/dynamicColumn/dynamicColumn.api";
import Image from "next/image";
import {TrashIcon, PencilSquareIcon} from '@heroicons/react/24/outline';
import {User} from "@/app/components/model/user.model";
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import AddUser from "@/app/components/ui/forms/AddUser";


export default function GridPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [modalShow, setModalShow] = useState<boolean>(false);

    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const response = await fetch('https://667ee7e2f2cb59c38dc76cd4.mockapi.io/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };
        fetchTableData();

    }, [users]);

    const onDelete = () => {
        console.log('delete');
    }
    const onEdit = () => {
        console.log('edit');
    }
    const onAddUser = () => {
        setModalShow(!modalShow);
    }

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the users in your account including their name, title, email and job title.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={onAddUser}
                        >
                            Add user
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Job Title
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Birth Day
                                    </th>
                                    <th scope="role"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Image
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white">
                                {users.map((user, userIdx) => (
                                    <tr key={user.email} className={userIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {`${user.firstName} ${user.lastName}`}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(user.birthdate).toDateString()}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <Image src={user.avatar}
                                                   alt={"avatar"} className={"h-11 w-11 rounded-full"}
                                                   width={200} height={200}/>
                                        </td>
                                        <td className="flex font-medium py-9">
                                            <TrashIcon className={"cursor-pointer w-5"} onClick={onDelete}/>
                                            <PencilSquareIcon className={"cursor-pointer w-5"} onClick={onEdit}/>
                                            {/*<a href="#" className="text-gray-900 hover:text-black no-underline">*/}
                                            {/*    Edit<span className="sr-only">, {person.name}</span>*/}
                                            {/*</a>*/}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddUser modalShow={modalShow} setModalShow={setModalShow}/>
        </>

    )
}