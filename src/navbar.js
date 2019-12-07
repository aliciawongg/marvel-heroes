import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Marvel Heroes App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/mylist">My List</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;