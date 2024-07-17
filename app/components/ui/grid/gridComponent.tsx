import React from 'react';
import {GridModel} from "@/app/components/ui/grid/model/gridModel";
import TableHeader from "@/app/components/ui/grid/tableHeader";
import TableBody from "@/app/components/ui/grid/tableBody";

export default function GridComponent(props: GridModel) {
    if (props.gridOperations) {
        props.columns.push({
            filed: "_operation",
            isVisible: true,
            columnTypeId: 0,
            isKey: false,
            displayName: "Operation",
            sequence: 999,
            id: 0,
            isCommand: true
        });
    }
    const columns = props.columns.sort((a, b) => {
        return a.sequence - b.sequence;
    });
    const data = props.data;
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{props.gridHeader.title}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {props.gridHeader.description}
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold
                        text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => props.gridHeader.button.onClick()}
                    >
                        {props.gridHeader.button.title}
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <TableHeader header={columns} gridOperations={props.gridOperations} />
                            <TableBody header={columns} data={data} gridOperations={props.gridOperations}/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};