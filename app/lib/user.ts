// lib/user.ts

import { hashPassword } from "./auth";

interface User {
    id: string;
    email: string;
    password: string;
}

const users: User[] = [
    {
        id: '1',
        email: 'admin@example.com',
        password: "123456"
    },
];

export async function getUserByEmail(email: string): Promise<User | undefined> {
    return users.find(user => user.email === email);
}