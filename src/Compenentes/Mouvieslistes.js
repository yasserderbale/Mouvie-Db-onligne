import React from "react";
import { Cardemouvie } from "./Cardemouvie";
import { Row } from "react-bootstrap";
import { Paginationcarde } from "./Paginationcarde";

export const Mouvieslistes = ({ mouvies, Getpage, pagecompte }) => {
  return (
    <Row>
      {mouvies.length >= 1 ? (
        mouvies.map((items) => {
          return <Cardemouvie key={items.id} items={items} />;
        })
      ) : (
        <h1 className="text-center mt-5">No Data</h1>
      )}
      <Paginationcarde pagecompte={pagecompte} Getpage={Getpage} />
    </Row>
  );
};
