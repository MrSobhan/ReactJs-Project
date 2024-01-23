import React from "react";
import {Alert , Container} from "react-bootstrap";

export default function Panel() {
  return (
    <Container>
      <Alert key="danger" variant="info">
        Panel
      </Alert>
    </Container>
  );
}
