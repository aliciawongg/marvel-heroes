import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand> 
                <Link to="/">Marvel Heroes Directory</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/mylist">
                    <NavItem>My List</NavItem>
                </Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;