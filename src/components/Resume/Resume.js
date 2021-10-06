import React from "react";
import { ListGroup, Container } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <Container>
        <h1>
          <a
            href="./images/KorbinKSargentResume.pdf"
            className="btn btn-success active btn-lg mt-4 p-5 resumeBtn"
            target="_blank"
            download="Korbin Sargent Resume"
          >
            Resumé PDF
          </a>
        </h1>
        <ListGroup className="text-center">
          List of Proficiencies
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>Javascript</ListGroup.Item>
          <ListGroup.Item>APIs</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>OOP</ListGroup.Item>
          <ListGroup.Item>Express,js</ListGroup.Item>
          <ListGroup.Item>SQL</ListGroup.Item>
          <ListGroup.Item>ORM</ListGroup.Item>
          <ListGroup.Item>MVC</ListGroup.Item>
          <ListGroup.Item>NoSQL</ListGroup.Item>
          <ListGroup.Item>PWA</ListGroup.Item>
          <ListGroup.Item>MongoDB</ListGroup.Item>
          <ListGroup.Item>Mongo Atlas</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>MERN Stack</ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default Resume;
