import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import {data} from "./data";

export default function MainCoursePage() {
  let { id } = useParams();
  let dataValide = data.some((e) => e.id == id);
  let dataForm = null;

  if (!dataValide) {
    return <h1>Not</h1>;
  } else {
    dataForm = data.filter((e) => e.id == id);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Image src={dataForm[0].img} thumbnail/>
        </Col>
        <Col>
          <h1>{dataForm[0].name}</h1>
          <h4>{dataForm[0].price} $</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis quod ab, maxime repellat voluptas illum natus. Commodi itaque exercitationem dolore eveniet minus nemo, unde ducimus natus facilis pariatur debitis?
          Iste reiciendis eveniet fuga eius amet similique voluptatibus. Quasi eos sed non incidunt quidem? Minus distinctio velit blanditiis facilis illum, facere cupiditate, dolores commodi, nesciunt recusandae impedit. Laudantium, expedita omnis.
          Quo sed ea tempore dolorum, dignissimos adipisci libero, assumenda hic necessitatibus quaerat reiciendis architecto quae aut. Unde quibusdam, fugiat dicta dolorem excepturi voluptatum aut nemo nisi architecto velit dolor? Natus?
          Consequuntur illo beatae, corrupti fugiat porro accusantium, facilis optio eum laboriosam minima rerum neque distinctio, fuga culpa eius atque expedita ab voluptatibus quae praesentium assumenda placeat corporis? Quo, magni laborum?</p>

        </Col>
      </Row>
    </Container>
  );
}
