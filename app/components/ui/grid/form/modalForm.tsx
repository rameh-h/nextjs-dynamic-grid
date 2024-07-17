import {ColumnType} from "@/app/infrastructure/Enums";
import {Input} from "@headlessui/react";
import DatePicker from "react-datepicker";
import React from "react";
import {PhotoIcon} from "@heroicons/react/24/solid";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import "react-datepicker/dist/react-datepicker.css";

const ModalForm = (props: modalFormProps) => {

    function renderForm(column: DynamicColumn, data?: object) {

        switch (column.columnType) {
            case ColumnType.booleanType:
                return (
                    <div className={"sm:col-span-3"}>
                        <label htmlFor={column.alias}
                               className="block text-sm font-medium leading-6 text-gray-900">
                            {column.displayName}
                        </label>
                        <div className={"mt-2"}>
                            <Input id={column.alias}
                                   className={"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"}
                                   checked={Object(data)[column.alias]}
                                   type="checkbox"
                            />
                        </div>
                    </div>
                )
            case ColumnType.dateType:
                return (
                    <div className={"sm:col-span-3"}>
                        <label htmlFor={column.alias}
                               className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            {column.displayName}
                        </label>
                        <div className={"mt-2"}>
                            <DatePicker id={column.alias}
                                        className={"block w-full rounded-md border-0 py-1.5" +
                                            "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" +
                                            "placeholder:text-gray-400 focus:ring-2 focus:ring-inset" +
                                            "focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                        required={column.isRequired}
                                        showIcon
                                        showPopperArrow
                                        selected={data !== undefined ? new Date(Object(data)[column.alias]) : undefined}
                            />
                            {/*<Input id={row.column.alias}
                                   className={"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"}
                                   required={Object(row.data)[row.column.alias]}
                                   type={"date"}

                            />*/}
                        </div>
                    </div>
                )
            case ColumnType.imageType:
                return (
                    <div className={"col-span-full"}>
                        <label htmlFor={column.alias}
                               className="block text-sm font-medium leading-6 text-gray-900">
                            {column.displayName}
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

                )
            default:
                return (
                    <div className="sm:col-span-3">
                        <label htmlFor={column.alias}
                               className="block text-sm font-medium leading-6 text-gray-900">
                            {column.displayName}
                        </label>
                        <div className={"mt-2"}>
                            <input value={Object(data)[column.alias] ?? ""}
                                   required={column.isRequired}
                                   className={"block w-full rounded-md border-0 py-1.5" +
                                       "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" +
                                       "placeholder:text-gray-400 focus:ring-2 focus:ring-inset" +
                                       "focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                   id={column.alias}
                                   type="text"
                                   name={column.alias}
                            />
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">{props.title}</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">{props.description}</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {props.column
                        .filter(x => !x.isHidden)
                        .map((row) => (
                            renderForm(row, props.data)
                        ))}
                </div>

            </div>
        </div>
    )
}

interface modalFormProps {
    title: string;
    description: string;
    column: DynamicColumn[];
    data?: object;
}

interface row {
    column: DynamicColumn;
    data?: object;
    //elementAttr: { class: string; attr: [{ key: string, value: string }]; onCreatedFun?: Function };
}

export default ModalForm;