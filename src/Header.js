import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar-wrapper">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
