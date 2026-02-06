import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="mb-4">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse
          id="main-navbar"
          className="justify-content-center text-center"
        >
          <Nav className="align-items-center">
            <Navbar.Brand
              as={NavLink}
              to="/"
              className="fw-bold mb-2 mb-lg-0"
            >
              Registration Form for Users
            </Navbar.Brand>

            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active fw-bold mx-3" : "nav-link mx-3"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/users"
              className={({ isActive }) =>
                isActive ? "nav-link active fw-bold mx-3" : "nav-link mx-3"
              }
            >
              Users
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active fw-bold mx-3" : "nav-link mx-3"
              }
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
