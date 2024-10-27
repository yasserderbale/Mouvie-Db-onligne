import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
export const Onemouvies = () => {
  const [mouvie, setmouvie] = useState([]);
  const movie_id = useParams();
  const Onemouvie = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id.id}?api_key=f5a79b9b39eb9d40697de5c3dd90e916`
    );
    setmouvie(result.data);
  };
  useEffect(() => {
    Onemouvie();
  }, []);
  console.log(mouvie);
  return (
    <Container>
      <Row className="header ">
        <Col>
          <img
            className="carde-image"
            src={`https://image.tmdb.org/t/p/w400${mouvie.poster_path}`}
          />
        </Col>
        <Col className="cont">
          <p className="fontes">Title Is:{mouvie.title}</p>
          <p className="fontes">Average Is:{mouvie.vote_average}</p>
          <p className="fontes">Count Is:{mouvie.vote_count}</p>
          <p className="fontes">Commente Is:{mouvie.vote_average}</p>
        </Col>
      </Row>
      <Row className="header-center">
        <Col sm="12">
          <p className="contente">{mouvie.overview}</p>
        </Col>
      </Row>
      <Row className="text-center justify-content-center mt-3">
        <a className="btn btn-primary " href={mouvie.homepage}>
          ViewFilmes
        </a>
        <Link className="btn btn-primary" to={"/"}>
          Menue
        </Link>
      </Row>
    </Container>
  );
};
