import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {

  return (
    <Container fluid className='footer'>
      <Row>
        <Col>
          <span style={{ color: "white" }}>Designed and developed by Subhabrata Ghoshal</span>
        </Col>
        <Col>
          <span style={{ color: "white" }}>Copyright © {2024}</span>
        </Col>
        <Col>
          <ul style={{ display: 'flex', gap: "20px", listStyleType: 'none', backgroundColor: "black", }}>
            <li>
              <a href="https://github.com/Subho1011" target="blank" style={{ color: "white", }}><AiFillGithub /></a>
            </li>
            <li>
              <a href="https://twitter.com/Subha101196" target="blank" style={{ color: "white", }}><AiOutlineTwitter /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/fitcoach_subho/" target="blank" style={{ color: "white", }}><AiFillInstagram /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/subhabrata-ghoshal-693998157/" target="blank" style={{ color: "white", }}><FaLinkedin /></a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  );
}

export default Footer;