export interface GridOperationModel {
    title: string | "Remove" | "Edit";
    onClick: Function;
    icon?: string;
}