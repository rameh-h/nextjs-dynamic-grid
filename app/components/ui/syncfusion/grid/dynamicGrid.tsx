import React from 'react';
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {GridComponent, Inject, Page} from "@syncfusion/ej2-react-grids";
import {GridColumnModel} from "@syncfusion/ej2-grids";

const DynamicGrid = (props: dynamicGridProps) => {
    let mappedColumns: GridColumnModel[] = [{
        type: 'checkbox', width: 90
    }];
    props.columns.forEach(column => {
        mappedColumns.push({
            isPrimaryKey: column.isKey,
            field: column.alias,
            headerText: column.displayName,
            visible: !column.isHidden
        })
    });

    return (
        <GridComponent
            id={"dynamicGrid"}
            dataSource={props.data}
            columns={mappedColumns}
            allowPaging
            loadingIndicator={{indicatorType: "Shimmer"}}
        >
            <Inject services={[Page]}/>
        </GridComponent>
    );
};

function gridColumnMap(columns: DynamicColumn[]): GridColumnModel[] {
    return columns.map((x, index) => {
        return {
            headerText: x.displayName,
            field: x.alias,
            isPrimaryKey: x.isKey,
            width: 120
        }
    });
}

interface dynamicGridProps {
    columns: DynamicColumn[];
    data: object;
}

export default DynamicGrid;