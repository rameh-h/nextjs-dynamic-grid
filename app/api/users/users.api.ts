import {api} from "@/app/infrastructure/Constant";

export function getUsers() {
    return fetch(api.path + "/users");
}