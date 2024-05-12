import React from 'react';
import { SiVisualstudiocode, SiAndroidstudio, SiFirebase, SiApachetomcat, SiPowershell } from 'react-icons/si';
import { DiEclipse } from 'react-icons/di';
import { Row, Col } from 'react-bootstrap';

const Tools = () => {
  return (
    <Row>
      <Col>
        <SiVisualstudiocode />
      </Col>
      <Col>
        <SiAndroidstudio />
      </Col>
      <Col>
        <SiFirebase />
      </Col>
      <Col>
        <SiApachetomcat />
      </Col>
      <Col>
        <SiPowershell />
      </Col>
      <Col>
        <DiEclipse />
      </Col>
    </Row>
  );
}

export default Tools;