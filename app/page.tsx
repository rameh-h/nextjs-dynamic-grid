import GridPage from "@/app/dynamic-grid/page";
import RootLayout from "@/app/layout";
import AppLayout from "@/app/layout/appLayout";
import Link from "next/link";

export default function Page() {
    return (
        <RootLayout>
            <AppLayout>
                <div className="flex flex-wrap justify-center">
                    <div className="m-4 max-w-md overflow-hidden bg-white shadow-lg">
                        <Link href={"/dynamic-grid"} className="p-6 block">
                            <h2 className="text-2xl font-bold text-gray-800">Simple Dynamic Grid</h2>
                        </Link>
                    </div>
                    <div className="m-4 max-w-md overflow-hidden bg-white shadow-lg">
                        <Link href={"/dynamic-grid-syncfusion"} className="p-6 block">
                            <h2 className="text-2xl font-bold text-gray-800">Syncfusion Dynamic Grid</h2>
                        </Link>
                    </div>
                </div>
            </AppLayout>
        </RootLayout>
    )
}