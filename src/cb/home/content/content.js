import React from "react";
import BoxNumber from './boxNumber'
import {BoxData} from '../../data'

import ButtonMa from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./content.css";

export default function Content() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg="6" className="content">
          <div className="line"></div>
          <p className="fs-1 moraba mt-2">میخواهید چه چیزی یاد بگیرید؟</p>
          <p className="fs-6 w-50">
            در بین بیش از ۲۰,۰۰۰ ساعت آموزش تیچی جستجو کنید و به جمع میلیونی
            دانشجویان تیچی بپیوندید
          </p>
          <Form className="d-flex w-75">
            <Form.Control
              type="search"
              placeholder="جستجو"
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
        <Col lg="6">
          <Image src="./img/untitled (1).png" fluid  className="d-none d-lg-block"/>
        </Col>
      </Row>
      <Row className="mt-5 gap-5">
        {
            BoxData.map((data)=>(
                <BoxNumber key={data.id} {...data}/>
            ))
        }
      </Row>

    </Container>
  );
}
