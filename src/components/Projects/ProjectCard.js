import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import beach from '../../Assests/Project/Beach-Resort-Project.JPG';

const ProjectCard = (props) => {
  const { imgpath, projectTitle, projectDescription, ghLink } = props;
  return (
    <Card className='project-card'>
      <Card.Img src={imgpath} alt="Landing page of the project" variant='top' />
      <Card.Body style={{ textAlign: 'center', }}>
        <Card.Title >{projectTitle}</Card.Title>
        <Card.Text>{projectDescription}</Card.Text>
        <Button href={ghLink} target='blank' variant='outline-primary' style={{ width: '100px' }}><BsGithub /> Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;