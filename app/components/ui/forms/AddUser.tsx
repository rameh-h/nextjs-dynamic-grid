import React, {Fragment} from "react";
import {Dialog, DialogPanel, Transition, TransitionChild} from "@headlessui/react";
import ModalForm from "@/app/components/ui/grid/form/modalForm";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";

export default function AddUser(props: addUserPageProps) {
    return (
        <Transition show={props.modalShow} as={Fragment}>
            <Dialog as={"div"} className={"relative z-10"} onClose={props.setModalShow}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </TransitionChild>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="flex min-h-full items-end justify-center p-4 text-center sm:items-center
                        sm:p-0 my-20 md:ml-52">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4
                                 text-left shadow-xl transition-all sm:w-full sm:max-w-3xl sm:p-6 ">
                                <form>
                                    {/*<div className="space-y-12">
                                        <div className="border-b border-gray-900/10 pb-12">
                                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal
                                                Information</h2>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address
                                                where you can receive mail.</p>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="first-name"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        First name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="block w-full rounded-md border-0 py-1.5
                                                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                                            focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="last-name"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Last name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-4">
                                                    <label htmlFor="email"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Email address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="country"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Country
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        >
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-span-full">
                                                    <label htmlFor="street-address"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Street address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="street-address"
                                                            id="street-address"
                                                            autoComplete="street-address"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-2 sm:col-start-1">
                                                    <label htmlFor="city"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        City
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            autoComplete="address-level2"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label htmlFor="region"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        State / Province
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="region"
                                                            id="region"
                                                            autoComplete="address-level1"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label htmlFor="postal-code"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        ZIP / Postal code
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="postal-code"
                                                            id="postal-code"
                                                            autoComplete="postal-code"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="cover-photo"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Cover photo
                                            </label>
                                            <div
                                                className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div className="text-center">
                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300"
                                                               aria-hidden="true"/>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload"
                                                                   type="file" className="sr-only"/>
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF
                                                        up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>*/}
                                    <ModalForm title={props.title}
                                               description={props.description}
                                               data={props.data}
                                               column={props.columns}/>
                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                                                onClick={() => props.setModalShow(false)}>
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => props.setModalShow(false)}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>

                                {/*<div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Go back to dashboard
                                    </button>
                                </div>*/}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

interface addUserPageProps {
    modalShow: boolean;
    setModalShow: (value: boolean) => void;
    title: string;
    description: string;
    columns: DynamicColumn[];
    data?: object;

}