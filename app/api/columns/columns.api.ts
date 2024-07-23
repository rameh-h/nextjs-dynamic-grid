import {api} from "@/app/infrastructure/Constant";

export function getColumns() {
    return fetch(api.path + "/columns");
}

