'use client'
import Link from "next/link";
import GridPage from "@/app/dynamic-grid/page";

export default function Page() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            {/*<div className="px-4 py-5 sm:px-6">
                Users of Application
            </div>*/}
            <div className="px-4 py-5 sm:p-6">
                <GridPage/>
            </div>
        </div>
    )
}