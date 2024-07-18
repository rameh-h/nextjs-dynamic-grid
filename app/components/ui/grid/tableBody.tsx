import React from 'react';
import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import GridTypeDetect from "@/app/components/ui/grid/tools/gridTypeDetect";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import {GridOperationModel} from "@/app/components/ui/grid/model/gridOperation.model";

const TableBody = (props: tableBodyProps) => {
    const keyFiled = props.header.find(x => x.isKey)?.filed;
    return (
        <>
            <tbody className="bg-white">
            {props.data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? undefined : 'bg-gray-50'}>
                    {props.header
                        .map((column, key) => (
                            <td key={key}
                                className={"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900" +
                                    " sm:pl-3"}
                                hidden={!column.isVisible}
                            >
                                {(() => {
                                    if (column.isCommand) {
                                        return (<div key={key} className={"flex"}>
                                            {
                                                props.gridOperations?.map((opt, index) => {
                                                    switch (opt.title) {
                                                        case "Remove":
                                                            return (
                                                                <TrashIcon
                                                                    key={index}
                                                                    title={"Remove"}
                                                                    className={"cursor-pointer w-5"}
                                                                    onClick={() => {
                                                                        opt.onClick(Object(row)[keyFiled!]);
                                                                    }}/>
                                                            )
                                                        case "Edit":
                                                            return (
                                                                <PencilSquareIcon
                                                                    key={index}
                                                                    title={"Edit"}
                                                                    className={"cursor-pointer w-5"}
                                                                    onClick={() => {
                                                                        opt.onClick(Object(row)[keyFiled!]);
                                                                    }}/>
                                                            )
                                                        default:
                                                            return (
                                                                <span key={index}>
                                                                <i title={opt.title}
                                                                   className={opt.icon}
                                                                   onClick={() => opt.onClick(Object(row)[keyFiled!])}>
                                                                </i>
                                                            </span>
                                                            )
                                                    }
                                                })

                                            }
                                        </div>)
                                    } else {
                                        return (<GridTypeDetect columnTypeId={column.columnTypeId}
                                                                data={Object(row)[column.filed]}/>)
                                    }
                                })()}
                            </td>
                        ))}
                </tr>
            ))}
            </tbody>
        </>
    );
};

interface tableBodyProps {
    header: ColumnModel[];
    data: Array<object>;
    gridOperations?: GridOperationModel[]
}

export default TableBody;