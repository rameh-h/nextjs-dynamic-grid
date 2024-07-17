import React from 'react';
import {ColumnType} from "@/app/infrastructure/Enums";
import {Input} from "@headlessui/react";
import Image from "next/image";

const GridTypeDetect = (props: typeDetectProps) => {
    function renderType(columnData: typeDetectProps) {
        switch (columnData.columnTypeId) {
            case ColumnType.booleanType:
                return <Input
                    checked={columnData.data as boolean}
                    disabled={true}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />;
            case ColumnType.dateType:
                return new Date(columnData.data.toString()).toDateString();
            case ColumnType.imageType:
                return <Image src={columnData.data.toString()} alt={""}
                              className={"h-11 w-11 rounded-full"}
                              width={200} height={200}/>
            default:
                return columnData.data.toString();

        }
    }

    return (
        <>
            {renderType(props)}
        </>
    );
};

interface typeDetectProps {
    columnTypeId: number;
    data: any;
}

export default GridTypeDetect;