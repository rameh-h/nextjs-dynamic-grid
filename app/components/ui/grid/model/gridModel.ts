import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import {GridOperationModel} from "@/app/components/ui/grid/model/gridOperation.model";
import {GridHeaderModel} from "@/app/components/ui/grid/model/gridHeader.model";

export interface GridModel {
    columns: ColumnModel[];
    data: any;
    gridHeader: GridHeaderModel;
    gridOperations?: GridOperationModel[]
}