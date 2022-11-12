import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
 
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fill>
      <Container>
        <Navbar.Brand href="#home">SEARCH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" fill>
          <Nav className="me-auto" >
            <Nav.Link href="/search">HOME</Nav.Link>
            <Nav.Link href="/saved">SAVED</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;