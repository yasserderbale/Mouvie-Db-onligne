import React, { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
export const Navbare = ({ searche }) => {
  const searchone = (worde) => {
    searche(worde);
  };
  return (
    <Row className="navbare">
      <Col className="col" sm="12">
        <img className="logoimg mx-3" src="/logo.png" />
        <FormControl
          onChange={(e) => searchone(e.target.value)}
          className=" searche"
          placeholder="searche"
        />
      </Col>
    </Row>
  );
};
