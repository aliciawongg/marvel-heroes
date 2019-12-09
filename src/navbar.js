import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Marvel Heroes App</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home </Link>
                <Link to="/mylist">My List</Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;