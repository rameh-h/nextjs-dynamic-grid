export interface DynamicColumn {
    id: number;
    alias: string;
    displayName: string;
    columnType: number;
    isHidden: boolean;
    isKey: boolean;
    isRequired: boolean;
    sequence?: number;
}