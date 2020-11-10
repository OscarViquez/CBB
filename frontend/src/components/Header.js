import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>

            <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Coast BnB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* ml = margin left auto/ mr = margin = margin right */}
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'> </i> Cart</Nav.Link>
                            <Nav.Link href="/login"><i className='fas fa-user'></i> Login in</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
