'use client';
import React, {useEffect, useState} from 'react';
import {
    ColumnDirective,
    ColumnsDirective,
    Edit,
    EditSettingsModel,
    Filter,
    FilterSettingsModel,
    GridComponent,
    Inject, Page, Resize,
    Sort,
    Toolbar,
    ToolbarItems
} from "@syncfusion/ej2-react-grids";
import {getColumns} from "@/app/api/columns/columns.api";
import {getUsers} from "@/app/api/users/users.api";
import {User} from "@/app/components/model/user.model";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {GridColumnModel} from "@syncfusion/ej2-grids";
import AppLayout from "@/app/layout/appLayout";
import {GridTemplateDetect} from "@/app/components/ui/syncfusion/grid/gridTemplateDetect";
import {ColumnType} from "@/app/infrastructure/Enums";
import GridTypeDetect from "@/app/components/ui/syncfusion/grid/gridTypeDetect";

const SyncfusionGridPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [columns, setColumns] = useState<DynamicColumn[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getColumns()
            .then((res) => res.json())
            .then((data) => {
                setColumns(data);
            });
        getUsers()
            .then((res) => res.json())
            .then((users) => {
                setUsers(users);
                setLoading(false);
            });

    }, []);

    const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: EditSettingsModel = {allowEditing: true, allowAdding: true, allowDeleting: true};
    const filterSettings: FilterSettingsModel = {type: 'Excel'};

    return (
        <AppLayout>
            <div className='control-pane' hidden={loading}>
                <div className='control-section'>
                    <GridComponent
                        dataSource={users}
                        allowPaging
                        allowSorting
                        allowFiltering
                        filterSettings={filterSettings}
                        editSettings={editSettings}
                        toolbar={toolbar}
                        allowResizing
                        gridLines={"Horizontal"}
                    >
                        <ColumnsDirective>
                            {mappedColumn(columns).map((column, index) => (
                                <ColumnDirective key={index} {...column}/>
                            ))}
                        </ColumnsDirective>
                        <Inject services={[Page, Sort, Filter, Edit, Toolbar, Resize]}/>
                    </GridComponent>
                </div>
            </div>
        </AppLayout>
    );
};

function mappedColumn(columns: DynamicColumn[]): GridColumnModel[] {
    let mappedColumns: GridColumnModel[] = [{
        type: 'checkbox',
        width: 40,
        allowSorting: false,
        allowResizing: false,
        allowFiltering: false,
        allowEditing: false
    }];
    columns.forEach(column => {
        mappedColumns.push({
            isPrimaryKey: column.isKey,
            field: column.alias,
            headerText: column.displayName,
            visible: !column.isHidden,
            allowFiltering: !column.isKey && column.columnType != ColumnType.imageType,
            allowResizing: !column.isKey,
            allowSorting: column.columnType != ColumnType.imageType,
            allowEditing: !column.isKey && column.columnType != ColumnType.imageType,
            validationRules: {required: column.isRequired},
            template: (props: any) => GridTemplateDetect(props, column),
            displayAsCheckBox: column.columnType == ColumnType.booleanType,
            type: GridTypeDetect(column),
            format: column.columnType == ColumnType.dateType ? "yMd" : undefined,
            editType: column.columnType == ColumnType.dateType ? "datepickeredit"
                : column.columnType == ColumnType.intType ? "numericedit" :
                    column.columnType == ColumnType.booleanType ? "booleanedit" : "defaultedit"
        })
    });
    return mappedColumns;
}

export default SyncfusionGridPage;