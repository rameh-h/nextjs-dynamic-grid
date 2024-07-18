import GridPage from "@/app/dynamic-grid/page";
import RootLayout from "@/app/layout";
import AppLayout from "@/app/layout/appLayout";

export default function Page() {
    return (
        <RootLayout>
            <AppLayout>
                <GridPage/>
            </AppLayout>
        </RootLayout>
    )
}