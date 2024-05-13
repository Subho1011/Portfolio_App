import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import beach from '../../Assests/Project/Beach-Resort-Project.JPG';
import webfood from '../../Assests/Project/Web-Food-Project.JPG';

const projectCards = [
  {
    imagePath: beach,
    title: "Beach Resort",
    description: "Welcome to a premium hotel booking website from where you can choose best deals. Built with ReactJS, HTML and CSS",
    ghLink: "https://github.com/Subho1011/Beach_Resort_Project/tree/main/resort"
  },
  {
    imagePath: webfood,
    title: "Web Food",
    description: "A worldclass food ordering web application. Get your favourite delicacies at your doorstep within the blink of an eye.Built with ReactJS, HTML and CSS ",
    ghLink: 'https://github.com/Subho1011/Web_Food_App'
  }
];

const Projects = () => {

  return (
    <Container style={{height:'100vh',}}>
      <Row>
        {projectCards.map((projectCard) => (
          <Col>
            <ProjectCard imgpath={projectCard.imagePath}
              projectTitle={projectCard.title}
              projectDescription={projectCard.description}
              ghLink={projectCard.ghLink} />
          </Col>
        ))}
      </Row>
    </Container>
 
  );
}

export default Projects;