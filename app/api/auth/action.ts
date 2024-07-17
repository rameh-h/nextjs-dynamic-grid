
import {cookies} from 'next/headers'

export function logout() {
    const cookieStore = cookies();
    cookieStore.delete("userAuth");
}

export function login(){
    const cookieStore = cookies();
    cookieStore.set("userAuth","true");
}