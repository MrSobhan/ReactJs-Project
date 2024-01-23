import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import ButtonMa from "@mui/material/Button";

import "./Header.css";

export default function Header() {
  return (
    <Navbar expand="lg" className="shadow py-4">
      <Container>
        <Navbar.Brand href="#" className="ms-5 d-flex align-items-center brand">
          <img src="./img/untitled.png" alt="" height={20}/>
          <p className="Secondary moraba fs-4 mt-2 me-2 d-block d-lg-none">تیچی</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" ><i className="bi bi-menu-button primery"></i></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">خانه</Nav.Link>
            <NavDropdown title="دسته بندی ها" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">وبینار ها</Nav.Link>
          </Nav>
          <Form className="d-flex gap-3 align-items-center">
            <i class="bi bi-heart fs-5 mt-2"></i>
            <i class="bi bi-cart3 fs-5 mt-2"></i>
            <ButtonMa
              variant="outlined"
              className="dana-blod round py-2"
              color="warning"
            >
              ورود
            </ButtonMa>
            <ButtonMa
              variant="contained"
              className="dana-blod round py-2"
              color="warning"
            >
              ثبت نام
            </ButtonMa>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
