'use client';
import {useEffect, useState} from "react";
import Sidebar from "@/app/components/ui/layout/sidabar/sidebar";
import Header from "@/app/components/ui/layout/header/header";
import {checkLoginCookie} from "@/app/api/auth/cookie";
import {useRouter} from "next/navigation";

export default function AppLayout({children}: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();
    useEffect(() => {
        const isAuth = checkLoginCookie();
        if (!isAuth)
            router.push("/auth/sign-in");
        else
            setIsAuthenticated(true);
    }, []);

    if (!isAuthenticated)
        return (<div className={"text-center mt-11 font-bold text-xl"}>Loading...</div>);
    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="lg:pl-72">
                <Header setSidebarOpen={setSidebarOpen}/>
                <main className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    )
}