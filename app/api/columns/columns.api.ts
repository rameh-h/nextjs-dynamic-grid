import {api} from "@/app/infrastructure/Constant";

function getColumns() {
    return fetch(api.path + "/columns");
}

export default getColumns ;