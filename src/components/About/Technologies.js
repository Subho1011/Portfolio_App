import React from 'react';
import { DiAndroid, DiReact, DiJavascript, DiJava, DiGit, DiHtml5, DiCss3 } from 'react-icons/di';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Technologies = () => {
  return (
    <Row className="tech-card-container">
      <Col>
        <Card border="info" className='tech-card'>
          <DiAndroid />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiReact />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiJavascript  />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiJava />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiGit />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiHtml5  />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiCss3 />
        </Card>
      </Col>
    </Row>
  );
}

export default Technologies;