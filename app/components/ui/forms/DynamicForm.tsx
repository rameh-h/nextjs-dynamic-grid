import React, {Fragment} from "react";
import {Dialog, DialogPanel, Transition, TransitionChild} from "@headlessui/react";
import ModalForm from "@/app/components/ui/grid/form/modalForm";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";

export default function DynamicForm(props: DynamicFormProps) {
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
                                    <ModalForm title={props.title}
                                               description={props.description}
                                               data={props.data}
                                               column={props.columns}
                                               handleChange={props.handleChange}
                                    />
                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                                                onClick={() => props.setModalShow(false)}>
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold
                                            text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                                            focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-indigo-600"
                                            onClick={() => {
                                                props.onClickConfirm()
                                            }}
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

interface DynamicFormProps {
    modalShow: boolean;
    setModalShow: (value: boolean) => void;
    title: string;
    description: string;
    columns: DynamicColumn[];
    onClickConfirm: Function;
    handleChange: (field: string, value: string | Date | boolean) => void;
    data?: object;
}