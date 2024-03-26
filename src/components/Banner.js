import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/result.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Hi! I'm Olivia Wong</h1>
                <p>A dedicated frontend developer residing in Berlin, Germany, equipped with robust technical abilities, is eagerly pursuing a dynamic and fulfilling role in Frontend Development.</p>
                <HashLink to='#connect'>
                  <button className="vvd">Let’s Connect</button>
                </HashLink>
              </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}
