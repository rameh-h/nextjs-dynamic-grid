'use client'
import React from 'react';
import Link from "next/link";

const NavbarElm = () => {
    return (
        <div>NavBar</div>
        /*<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link href={"/"} className={"navbar-brand"}>The App</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={"/"} className={"nav-link"}>Home</Link>
                        <Link href={"/dynamic-grid"} className={"nav-link"}>Dynamic Grid</Link>
                        <Link href={"/dynamic-form"} className={"nav-link"}>Dynamic Form</Link>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <Link className={"dropdown-item"} href={"/auth/signin"}>
                                <NavDropdown.Item as={"span"}>SignIn</NavDropdown.Item>
                            </Link>
                            <Link className={"dropdown-item"} href={"/auth/signup"}>
                                <NavDropdown.Item as={"span"}>SignUp</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/
    );
};

export default NavbarElm;