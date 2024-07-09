"use client";

import {registerUserAction} from "@/app/data/actions/auth-actions";
import Link from "next/link";
import {useFormState} from "react-dom";

import {
    CardTitle,
    CardSubtitle,
    CardHeader,
    CardBody,
    CardFooter,
    Card,
    Form, Button
} from "react-bootstrap";

export function SignupForm() {
    const INITIAL_STATE = {
        data: null,
    };
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);
    console.log(formState);
    return (

        <Card className={"shadow-lg"}>
            <CardBody className="p-5">
                <Card.Title className={"fs-4 fw-bold mb-4"}>Sign Up</Card.Title>
                <Form action={formAction}>
                    <Form.Group className={"mb-3"}>
                        <Form.Label className={"mb-2 text-muted"} htmlFor={"username"}>User Name</Form.Label>
                        <Form.Control
                            id="username"
                            name="username"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label className={"mb-2 text-muted"} htmlFor={"email"}>Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                        />
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label className={"mb-2 text-muted"} htmlFor="">Password</Form.Label>
                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                        />
                    </Form.Group>
                    <div className={"align-items-center d-flex"}>
                        <Button className="ms-auto" variant="primary" type="submit">Sign up</Button>
                    </div>
                </Form>
            </CardBody>
            <CardFooter className="py-3 border-0">
                <div className="text-center">
                    Already have an account? <Link href={"/auth/signin"} className="text-dark">Sign in</Link>
                </div>
            </CardFooter>
        </Card>


    );
}
