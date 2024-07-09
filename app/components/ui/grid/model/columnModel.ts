interface ColumnModel {
    id: number;
    displayName: string;
    filed: string;
    isKey: boolean;
    isVisible: boolean;
    columnTypeId: number;
    sequence: number;
    format?: string;
}