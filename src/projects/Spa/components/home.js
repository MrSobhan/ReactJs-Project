import React from "react";
import {Alert , Container} from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Alert key="danger" variant="info">
        This is a success alert—check it out! Home !!!!!!!!!!!!!!
      </Alert>
    </Container>
  );
}
