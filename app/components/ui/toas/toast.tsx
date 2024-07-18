import React, {useEffect} from 'react';
import {Transition} from '@headlessui/react'
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/24/outline'
import {XMarkIcon} from '@heroicons/react/20/solid'

const Toast = (props: toastProps) => {
    useEffect(() => {
        setTimeout(() => {
            props.setShow(false);
        }, 4000)
    }, []);

    let title = props.title;
    let description = props.description;
    let toastClass = "text-green-400";
    switch (props.mode) {
        case "SUCCESS":
            title = props.title ?? "Successfully saved!";
            description = props.description ?? "Your request has been saved!";
            toastClass = "text-green-400";
            break;
        case "ERROR":
            title = props.title ?? "Error!";
            description = props.description ?? "Your request has not been saved!";
            toastClass = "text-red-400";
            break;
    }

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="pointer-events-none fixed left-4 bottom-2 flex items-end px-4 py-6 sm:items-start
                sm:p-6 z-50 w-1/4"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={props.show}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        transition={true}
                    >
                        <div
                            className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        {
                                            (() => {
                                                if (props.mode == "SUCCESS") {
                                                    return <CheckCircleIcon className={"h-6 w-6 text-green-400"}
                                                                            aria-hidden="true"/>
                                                } else if (props.mode == "ERROR") {
                                                    return <XCircleIcon className={"h-6 w-6 text-red-400"}
                                                                        aria-hidden="true"/>
                                                }
                                            })()
                                        }

                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">{title}</p>
                                        <p className="mt-1 text-sm text-gray-500">{description}</p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                props.setShow(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    );
};

interface toastProps {
    show: boolean,
    setShow: (open: boolean) => void;
    mode: "ALERT" | "INFO" | "SUCCESS" | "ERROR";
    title?: string;
    description?: string;
    onClickFunc?: Function;
}

export default Toast;