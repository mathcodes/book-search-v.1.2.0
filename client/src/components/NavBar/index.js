import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
 
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fill>
      <Container>
        <Navbar.Brand href="#home">Book Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" fill>
          <Nav className="me-auto" >
            <Nav.Link href="/search">Home</Nav.Link>
            <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;