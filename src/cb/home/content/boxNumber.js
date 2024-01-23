import React from "react";
import Col from "react-bootstrap/Col";


export default function BoxNumber({id , name , icon , number}) {
  return (
    
    <Col  className={`boxNumber round py-4 ${(id ==5 ? 'd-none d-lg-block' : '')}`}>
      <i className={`fs-1 Secondary ${icon}`}></i>
      <p className="fs-4 dana-blod">{number}</p>
      <p className="fs-6 moraba text-sm">{name}</p>
    </Col>
  );
}