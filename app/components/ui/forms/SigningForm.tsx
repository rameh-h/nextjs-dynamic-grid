"use client";
import Image from "next/image";
import AuthLayout from "@/app/auth/layout";
import Link from "next/link";
import {setCookie} from 'cookies-next';
import {useState} from "react";
import ErrorAlert from "@/app/components/ui/alert/errorAlert";
import {useRouter} from "next/navigation";

export function SigningForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (email || password || password.length) {
            if (email == "admin@local.com" && password == "admin") {
                setCookie("auth-cookie", true);
                router.push("/");
            } else {
                setMessages(["Email or Password is not matched. Please try again"]);
            }
        }
    }

    return (
        <AuthLayout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-10 w-auto"
                        src={'/mark.svg'}
                        alt="Your Company"
                        width={300}
                        height={300}
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900
                                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900
                                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full
                                justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
                                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}
                              href={"/auth/signup"}>
                            Start sign up in 2 minutes
                        </Link>
                    </p>
                    <p className={"text-sm text-gray-500"}>
                        Hints:<br/>
                        User: admin@local.com<br/>
                        password: admin
                    </p>
                </div>
            </div>
            <ErrorAlert messages={messages}/>
        </AuthLayout>
    );
}