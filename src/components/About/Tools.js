import React from 'react';
import { SiVisualstudiocode, SiAndroidstudio, SiFirebase, SiApachetomcat, SiPowershell } from 'react-icons/si';
import { DiEclipse } from 'react-icons/di';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Tools = () => {
  return (
    <Row className="tool-card-container">
      <Col>
        <Card border="info" className='tech-card'>
          <SiVisualstudiocode  />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <SiAndroidstudio />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <SiFirebase />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <SiApachetomcat />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <SiPowershell />
        </Card>
      </Col>
      <Col>
        <Card border="info" className='tech-card'>
          <DiEclipse />
        </Card>
      </Col>
    </Row>
  );
}

export default Tools;