import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {ColumnType} from "@/app/infrastructure/Enums";

const GridTypeDetect = (column: DynamicColumn): string => {
    switch (column.columnType) {
        case ColumnType.dateType:
            return "date"
        case ColumnType.booleanType:
            return 'boolean'
        case ColumnType.imageType:
            return 'image'
        default:
            return 'string'
    }
};

export default GridTypeDetect;