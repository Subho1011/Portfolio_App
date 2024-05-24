import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Button } from "react-bootstrap";
import Typing from "./Typing";

const Home = () => {
  return (
    <Container fluid className="home">
        <Row className='home-container'>
          <Col md={7} className="image-container">
            <div className="image"></div>
          </Col>
          <Col md={5}>
            <Row className="text-container">
              <h1>Hi there</h1>
              <h1>I am Subhabrata</h1>
            </Row>
            <Row className='type-container'>
              <Typing />
            </Row>
            <Row className='button-container'>
              <Button style={{ width: "25%", marginRight: "25px" }}>About Me</Button>
              <Button style={{ width: "25%", }}>Download CV</Button>
            </Row>
            <Row style={{ textAlign: 'center', }} className="icon-container">
              <h1>Find me on</h1>
              <ul className="icons-list">
                <li>
                  <a href="https://github.com/Subho1011" target="blank" ><AiFillGithub /></a>
                </li>

                <li>
                  <a href="https://www.instagram.com/fitcoach_subho/" target="blank"><AiFillInstagram /></a>
                </li>

                <li>
                  <a href="https://twitter.com/Subha101196" target="blank"><AiOutlineTwitter /></a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/subhabrata-ghoshal-693998157/" target="blank"><AiFillLinkedin /></a>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
    </Container>
  );
}

export default Home;