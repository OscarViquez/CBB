# How to use Sass w/ React
* In the Component Folder, add 'name'.scss and that's it.
* For variables, you can create a SCSS folder, create a SCSS file and name it variable.scss and put your variables in there.

import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <header>
            <Navbar bg="transparent" expand="lg" fixed="top" variant='dark'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavBar
