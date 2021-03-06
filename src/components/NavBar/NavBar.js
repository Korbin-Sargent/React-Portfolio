import React from "react";
//importing the Navbar from react-bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="justify-content-center">
          <Navbar.Brand>Korbin Sargent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/ContactMe">Contact Me</Nav.Link>
            <Nav.Link href="/Resume">Resumé</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
