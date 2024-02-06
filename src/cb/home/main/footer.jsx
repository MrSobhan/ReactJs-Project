import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import ButtonMa from "@mui/material/Button";
import "./main.css";
const Footer = () => {
  return (
    <footer>
      <Image src="../img/svg.png" fluid className="imgSvg" />
      <div className="content-bg-1 p-5 w-100 m-0">
        <Row>
          <Col xs="12" md="4" className="text-center text-link">
            <h3 className="my-2 moraba">لینک های مهم</h3>
            <p className="c-p my-1">تیچی</p>
            <p className="c-p my-1">دوره ها</p>
            <p className="c-p my-1">مدرسین برتر</p>
            <p className="c-p my-1">آموزش های سازمانی</p>
            <p className="c-p my-1">درباره ما</p>
            <p className="c-p my-1">تماس باما</p>
          </Col>
          <Col xs="12" md="4">
            <p className="fs-3 moraba my-2 text-center">
              تدریس در <span className="primery">تیچی</span>
            </p>
            <p className="text-center">
              در بین بیش از ۲۰,۰۰۰ ساعت آموزش تیچی جستجو کنید و به جمع میلیونی
              دانشجویان تیچی بپیوندید.
            </p>
            <p className="fs-3 moraba my-4 text-center">
              عضویت در خبرنامه <span className="primery">تیچی</span>
            </p>
            <Form className="d-flex w-100 justify-content-center">
              <Form.Control
                type="search"
                placeholder="جستجو آموزش ..."
                className="shadow round-l"
                aria-label="Search"
              />
              <ButtonMa
                variant="contained"
                className="dana-blod shadow round-r py-2"
                color="warning"
              >
                جستجو
              </ButtonMa>
            </Form>
          </Col>
          <Col xs="12" md="4">
            <Image
              src="https://parspng.com/wp-content/uploads/2023/03/educationpng.parspng.com-11-300x300.png"
              fluid
            />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
