import type { NextApiRequest, NextApiResponse } from 'next';
import {EHttpMethod} from "@/app/infrastructure/Enums";

type RequestData = {
    [key: string]: any;
};

type ResponseData<T> = {
    data: T;
    error?: string;
};

async function request<T>(url:string,requestData?:RequestData):Promise<ResponseData<T>> {
    try {
        const response = await fetch(url, {
            method: EHttpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestData ? JSON.stringify(requestData) : undefined,
        });
    }catch(error) {

    }
}