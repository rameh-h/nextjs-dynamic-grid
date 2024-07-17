import {SigningForm} from "@/app/components/ui/forms/SigningForm";
import AuthLayout from "@/app/auth/layout";

export default function SignInPage() {
    return (
        <AuthLayout>
            <SigningForm/>
        </AuthLayout>
    );
}