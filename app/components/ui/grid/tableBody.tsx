import React from 'react';
import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import GridTypeDetect from "@/app/components/ui/grid/tools/gridTypeDetect";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";

const TableBody = (props: tableBodyProps) => {
    return (
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
                                    return (<div className={"flex"}>
                                        {
                                            props.gridOperations?.map((opt, key) => {
                                                switch (opt.title) {
                                                    case "Remove":
                                                        return (
                                                            <TrashIcon
                                                                title={"Remove"}
                                                                className={"cursor-pointer w-5"}
                                                                onClick={() => opt.onClick()}/>
                                                        )
                                                    case "Edit":
                                                        return (
                                                            <PencilSquareIcon
                                                                title={"Edit"}
                                                                className={"cursor-pointer w-5"}
                                                                onClick={() => opt.onClick()}/>
                                                        )
                                                    default:
                                                        return (
                                                            <span>
                                                                <i title={opt.title}
                                                                   className={opt.icon}
                                                                   onClick={() => opt.onClick()}>
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
    );
};

interface tableBodyProps {
    header: ColumnModel[];
    data: Array<object>;
    gridOperations?: {
        title: string | "Remove" | "Edit";
        onClick: Function;
        icon?: string;
    }[]
}

export default TableBody;