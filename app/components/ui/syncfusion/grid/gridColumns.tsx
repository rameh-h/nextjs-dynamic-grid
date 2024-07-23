import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import {ColumnDirective, ColumnsDirective} from "@syncfusion/ej2-react-grids";
import {ColumnType} from "@/app/infrastructure/Enums";
import Image from "next/image";
import React from "react";
import {Input} from "@headlessui/react";

export default function GridColumns(props: any) {
    debugger
    return (
        <div></div>
        /*props.columns
            .sort((a, b) => {
                return a.sequence - b.sequence
            })
            .map((column, index) => (
                typeDetect(props, column)
            ))*/
    )
}


function typeDetect(props: any, column: ColumnModel) {
    switch (column.columnTypeId) {
        case ColumnType.booleanType:
            return (<ColumnDirective
                key={column.id}
                field={column.filed}
                headerText={column.displayName}
                format={""}
                template={booleanTemplate(Object(props)[column.filed])}
            />)
        case ColumnType.imageType:
            return (<ColumnDirective
                key={props.column.id}
                field={props.column.filed}
                headerText={props.column.displayName}
                template={imageTemplate(Object(props)[column.filed])}
            />)
        case ColumnType.dateType:
            return (<ColumnDirective
                key={column.id}
                field={column.filed}
                headerText={column.displayName}
                template={dateTimeTemplate(Object(props)[column.filed])}
            />)
        default:
            return (
                <ColumnDirective
                    visible={!column.isVisible}
                    isPrimaryKey={column.isKey}
                    key={column.id}
                    headerText={column.displayName}
                    field={column.filed}
                />
            )
    }

    function imageTemplate(props: string) {
        debugger
        return (<Image src={props} alt={""}
                       className={"h-11 w-11 rounded-full"}
                       width={200} height={200}/>)
    }

    function booleanTemplate(props: boolean) {
        debugger
        return (<Input
            checked={props as boolean}
            disabled={true}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />)
    }

    function dateTimeTemplate(props: string) {
        debugger
        return (<div>{new Date(props).toDateString()}</div>);
    }
}

interface gridColumnProps {
    columns: ColumnModel[];
    data: object;
}

interface typeDetectProps {
    column: ColumnModel;
    data: any;
}