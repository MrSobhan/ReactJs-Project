import React from "react";
import { Link , NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../main.css'

export default function Header() {
  function loadClass(e){
    return e.isActive ? 'nav' : ''
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{marginBottom : 40}}>
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" style={{marginLeft : 20}} className={(e)=> loadClass(e)}>Home</NavLink>
            <NavLink to="/courses" style={{marginLeft : 20}} className={(e)=> loadClass(e)}>Courses</NavLink>
            <NavLink to="/login" style={{marginLeft : 20}} className={(e)=> loadClass(e)}>Login</NavLink>
            <NavLink to="/Panel" style={{marginLeft : 20}} className={(e)=> loadClass(e)}>Panel</NavLink>
            <NavLink to="/about" style={{marginLeft : 20}} className={(e)=> loadClass(e)}>Aboat</NavLink>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
