/*
'use server';
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
    debugger
    console.log('clicked')
    cookies().delete("userAuth");
    redirect("/auth/sign-in")
}

export async function login(){
    cookies().set("userAuth","true",{ expires: Date.now() - 100 });
}*/


export function logout(){
    console.log("logging out");
}