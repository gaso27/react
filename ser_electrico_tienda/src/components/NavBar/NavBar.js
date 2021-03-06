import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () =>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Ser-Electrico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Tienda</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <Nav.Link href="#link">Ingresar</Nav.Link>
                    <NavDropdown title="Tutoriales Online" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Como instalar de 0</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Quiero crear mi pagina Web</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
    )
}
export default NavBar;