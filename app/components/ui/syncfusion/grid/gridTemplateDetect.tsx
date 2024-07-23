import {ColumnType} from "@/app/infrastructure/Enums";
import {GridColumnModel} from "@syncfusion/ej2-grids";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {Input} from "@headlessui/react";
import React from "react";
import Image from "next/image";

export function GridTemplateDetect(props: any, column: DynamicColumn) {
    switch (column.columnType) {
        case ColumnType.dateType:
            return new Date(Object(props)[column.alias]).toDateString()
        case ColumnType.imageType:
            return <Image
                className={"h-11 w-11 rounded-full"}
                src={Object(props)[column.alias]}
                alt={column.displayName}
                width={100}
                height={30}
            />;
        default:
            return Object(props)[column.alias];
    }
}