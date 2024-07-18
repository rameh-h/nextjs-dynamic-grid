import {api} from "@/app/infrastructure/Constant";
import {User} from "@/app/components/model/user.model";

export async function getUsers() {
    return await fetch(api.path + "/users");
}

export async function getUserById(id: string) {
    return await fetch(api.path + "/users/" + id);
}

export async function removeUserById(id: string) {
    return await fetch(api.path + "/users/" + id, {method: "DELETE"});
}

export async function postUser(user: User) {
    return await fetch(api.path + "/users/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function putUser(user: User, id: string) {
    return await fetch(api.path + "/users/" + id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}