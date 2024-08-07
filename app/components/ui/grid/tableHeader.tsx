import React from 'react';
import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import {GridOperationModel} from "@/app/components/ui/grid/model/gridOperation.model";

const TableHeader = (props: tableHeaderProps) => {
    return (
        <thead>
        <tr>
            {props.header
                .map((column, key) => (
                    <th key={column.id} scope="col"
                        hidden={!column.isVisible}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        id={column.filed}>
                        {column.displayName}
                    </th>
                ))}
        </tr>
        </thead>
    );
};

interface tableHeaderProps {
    header: ColumnModel[];
}

export default TableHeader;