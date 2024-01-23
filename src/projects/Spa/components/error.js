import React from "react";
import {Alert , Container} from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Alert key="danger" variant="danger">
        Not Found 404 !!!
      </Alert>
    </Container>
  );
}
