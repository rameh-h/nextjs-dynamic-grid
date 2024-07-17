import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";

export interface GridModel {
    columns: ColumnModel[];
    data: any;
    gridHeader: {
        title: string;
        description: string;
        button: { title: string, onClick: Function }
    };
    gridOperations?: {
        title: string | "Remove" | "Edit";
        onClick: Function;
        icon?: string;
    }[]
}