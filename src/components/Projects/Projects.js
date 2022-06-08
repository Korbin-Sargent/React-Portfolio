import React from "react";
import "./Projects.css";

import { Card, Button, CardGroup } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <h1 className="title">My Favorite Projects</h1>
      <section className="container-fluid d-flex justify-content-center">
        <CardGroup>
          <Card
            border="dark"
            bg={"dark"}
            text={"light"}
            class="cbbody"
            style={{ width: "18rem" }}
          >
            <Card.Img
              class="samesize"
              variant="top"
              src={"/images/GitOutside.png"}
            />
            <Card.Body>
              <Card.Title class="projecttitle">GitOutside</Card.Title>
              <Button
                href="https://git-outside.herokuapp.com/"
                target="_blank"
                variant="outline-primary"
              >
                Deployed Link
              </Button>
              <Button
                href="https://github.com/Korbin-Sargent/git-outside"
                target="_blank"
                variant="outline-primary"
              >
                GitHub Link
              </Button>
            </Card.Body>
          </Card>
          <Card
            border="light"
            bg={"dark"}
            text={"light"}
            class="cbbody"
            style={{ width: "18rem" }}
          >
            <Card.Img
              class="samesize"
              variant="top"
              src={"/images/Dine-in.png"}
            />
            <Card.Body>
              <Card.Title class="projecttitle">Dine-In</Card.Title>
              <Button
                href="https://korbin-sargent.github.io/Dine-In/"
                target="_blank"
                variant="outline-primary"
              >
                Deployed Link
              </Button>
              <Button
                href="https://github.com/Korbin-Sargent/Dine-In"
                target="_blank"
                variant="outline-primary"
              >
                GitHub Link
              </Button>
            </Card.Body>
          </Card>
          <Card
            border="light"
            bg={"dark"}
            text={"light"}
            class="cbbody"
            style={{ width: "18rem" }}
          >
            <Card.Img
              class="samesize"
              variant="top"
              src={"/images/fitness_tracker.png"}
            />
            <Card.Body>
              <Card.Title class="projecttitle">Fitness Tracker</Card.Title>
              <Button
                href="https://quiet-depths-83393.herokuapp.com/"
                target="_blank"
                variant="outline-primary"
              >
                Deployed Link
              </Button>
              <Button
                href="https://github.com/Korbin-Sargent/Fitness-Tracker"
                target="_blank"
                variant="outline-primary"
              >
                GitHub Link
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
    </>
  );
};

export default Projects;
