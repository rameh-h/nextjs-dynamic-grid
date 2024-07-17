'use client';
import {useState} from "react";
import Sidebar from "@/app/components/ui/layout/sidabar/sidebar";
import Header from "@/app/components/ui/layout/header/header";

export default function AppLayout({children}: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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