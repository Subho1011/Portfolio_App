import { Container, Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";
import Tools from "./Tools";
import codeImage from "../../Assests/coding-image.jpg";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <section className="about-card" style={{ height: "fit-content" }}>
          <Row className='intro-container'>
            <Col>
              <h1>Let me Introduce Myself</h1>
              <p>I am a passionate web developer, who loves designing and coding specialized in front-end development.
                I am upskilling myself for full-stack development.
              </p>
              <p>Apart from my passion there are more which I like to do</p>
              <div>
                <ul>
                  <li>Painting</li>
                  <li>Organizing and cleaning</li>
                  <li>Cooking</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className='intro-img-container'>
                <img src={codeImage} alt="A man writing software program" style={{ width: "500px", height: "300px" }} />
              </div>
            </Col>
          </Row>
        </section>
      </Row>
      <Row style={{ height: "fit-content" }}>
        <h1 style={{textAlign:'center',}}>I am Proficient in </h1>
        <Technologies />
      </Row>
      <Row style={{ height: "fit-content" }}>
        <h1 style={{textAlign:'center',}}>I use</h1>
        <Tools />
      </Row>

    </Container>
  );
}

export default About;