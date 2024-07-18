import React from 'react';
import {Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/solid";

const ConfirmDialog = (props: confirmDialogProps) => {
    let buttonClass: string;
    let buttonTitle: string;
    let dialogTitle: string;

    if (props.mode == "SAVE" || props.mode == "EDIT") {
        buttonTitle = "Save";
        dialogTitle = props.mode == "SAVE" ? "Save Record" : "Edit Record";
        buttonClass = "hover:bg-blue-500 bg-blue-600"
    } else {
        buttonTitle = "Delete";
        dialogTitle = "Delete Record";
        buttonClass = "hover:bg-red-500 bg-red-600";
    }

    const dialogDesc = `Are you sure you want to ${buttonTitle.toLowerCase()} the record?`;


    return (
        <Transition show={props.open}>
            <Dialog className="relative z-10" onClose={props.setOpen}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center
                                        rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        {
                                            (() => {
                                                if (props.mode == ("SAVE") || props.mode == "EDIT") {
                                                    return <ExclamationTriangleIcon className="h-6 w-6 text-blue-600"
                                                                                    aria-hidden="true"/>
                                                } else {
                                                    return <ExclamationTriangleIcon className="h-6 w-6 text-red-600"
                                                                                    aria-hidden="true"/>
                                                }
                                            })()
                                        }
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3"
                                                     className="text-base font-semibold leading-6 text-gray-900">
                                            {dialogTitle}
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                {dialogDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <Button
                                        type="button"
                                        className={`inline-flex w-full justify-center rounded-md px-3 py-2
                                        text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${buttonClass}`}
                                        onClick={props.onClickConfirm}
                                    >
                                        {buttonTitle}
                                    </Button>
                                    <Button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2
                                        text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                        hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => props.setOpen(false)}
                                        data-autofocus=""
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

interface confirmDialogProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    mode: "DELETE" | "EDIT" | "SAVE";
    onClickConfirm: () => void;
}

export default ConfirmDialog;