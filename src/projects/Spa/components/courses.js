import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursePage from "./course";
import {data} from "./data";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  return (
    <Container>
      <Row>
        {data.map((e) => (
          <Col>
            <CoursePage key={e.id} {...e} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
