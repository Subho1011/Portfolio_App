import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Button } from "react-bootstrap";


const Home = () => {
  return (
    <Container fluid className="home">
      <Row>
        <Col>
          <div className="image"></div>
        </Col>
        <Col>
          <Row>
            <h1>Hi there</h1>
            <h1>I am Mr Subhabrata Ghoshal</h1>
            <p>Web developer. Software Engineer.</p>
          </Row>
          <Row>
            <Button style={{ width: "25%", marginRight: "25px" }}>About Me</Button>
            <Button style={{ width: "25%", }}>Download CV</Button>
          </Row>
          <Row>
            <h1>Find me on</h1>
            <ul style={{ display: "flex", listStyleType: "none", gap: "25px", }}>
              <li>
                <a><AiFillGithub /></a>
              </li>

              <li>
                <a><AiFillInstagram /></a>
              </li>

              <li>
                <a><AiOutlineTwitter /></a>
              </li>

              <li>
                <a><AiFillLinkedin /></a>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>

    </Container>
  );
}

export default Home;