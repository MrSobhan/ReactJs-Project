import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink , useNavigate } from "react-router-dom";
import ButtonMa from "@mui/material/Button";

import "./Header.css";

export default function Header() {
  let navigate = useNavigate()
  let [isLoginUser, setIsLoginUser] = useState(
    localStorage.getItem("LoginUser")
  );
  let NameLogin = localStorage.getItem("LoginUserName");

  const LogOutUser = () => {
    localStorage.setItem("LoginUser", false);
    localStorage.setItem("LoginUserName", "");
    setIsLoginUser(false);
  };

  return (
    <Navbar expand="lg" className="shadow py-4">
      <Container>
        <NavLink to={"/"}>
          <Navbar.Brand
            href="#"
            className="ms-5 d-flex align-items-center brand"
          >
            <img src="../img/untitled.png" alt="" height={20} />
            <p className="Secondary moraba fs-4 me-2">تیچی</p>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll">
          <i className="bi bi-menu-button primery"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-4 text-center my-lg-0" navbarScroll>
            <Nav.Link href="#action1">خانه</Nav.Link>
            <NavDropdown title="دسته بندی ها" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2" className="text-end fs-7">
                در حال فروش
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="text-end fs-7">
                آموزش‌های رایگان
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-end fs-7">
                آموزش‌های پرمخاطب
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action5">وبینار ها</Nav.Link>
            <Nav.Link href="#action6">لایو ها</Nav.Link>
            <Nav.Link href="#action7">مدرس های برتر</Nav.Link>
            <Nav.Link href="#action8">درباره ما</Nav.Link>
          </Nav>
          <Form className="d-flex gap-3 align-items-center">
            <i class="bi bi-heart fs-5 mt-2"></i>
            <NavLink to={"/cart"}>
              <i class="bi bi-cart3 fs-5 mt-2 text-dark"></i>
            </NavLink>
            {isLoginUser && NameLogin != "" ? (
              <NavDropdown
                title={NameLogin}
                id="navbarScrollingDropdown"
                className="Secondary me-auto"
              >
                <NavDropdown.Item href="#action2" className="text-end">
                  پروفایل
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="text-end">
                  سبد خرید
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6" className="text-end">
                  علاقه مندی ها
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action5"
                  className="text-danger text-end"
                  onClick={LogOutUser}
                >
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <ButtonMa
                variant="outlined"
                className="dana-blod round py-2 me-auto"
                color="warning"
                type="button"
              >
                <NavLink to="/login" style={{ color: "#F59D40" }}>
                  ورود / عضویت
                </NavLink>
              </ButtonMa>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
