import React from 'react';
import { DiAndroid, DiReact, DiJavascript, DiJava, DiGit, DiHtml5, DiCss3 } from 'react-icons/di';
import { Row, Col } from 'react-bootstrap';

const Technologies = () => {
  return (
    <Row>
      <Col>
        <DiAndroid />
      </Col>
      <Col>
        <DiReact />
      </Col>
      <Col>
        <DiJavascript />
      </Col>
      <Col>
        <DiJava />
      </Col>
      <Col>
        <DiGit />
      </Col>
      <Col>
        <DiHtml5 />
      </Col>
      <Col>
        <DiCss3 />
      </Col>
    </Row>
  );
}

export default Technologies;