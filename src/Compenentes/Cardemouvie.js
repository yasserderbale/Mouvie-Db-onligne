import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cardemouvie = ({ items }) => {
  return (
    <Col sm="4">
      <Link to={`/mouvie/${items.id}`}>
        <div className="carde">
          <img
            className="carde-image"
            src={`https://image.tmdb.org/t/p/w400${items.poster_path}`}
          />
          <p className="title-carde text-center">
            NamMouvie:{items.title}
            <p className="mt-2">Date:{items.release_date}</p>
            <p>NbrStar:{items.vote_count}</p>
            <p>Notation:{items.vote_average}</p>
          </p>
        </div>
      </Link>
    </Col>
  );
};
