import React from "react";

import { Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <h1 className="title">My Favorite Projects</h1>
      <section className="container-fluid d-flex justify-content-center">
        <card class="cbBody" style={{ width: "18rem" }}>
          <Card.Img class="samesize" variant="top" src={"/images/GitOutside"} />
          <Card.Body>
            <Card.Title class="projecttitle">GitOutside</Card.Title>
            <Button
              href="https://git-outside.herokuapp.com/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed Link
            </Button>
          </Card.Body>
          <Button
            href="https://github.com/Korbin-Sargent/git-outside"
            target="_blank"
            variant="outline-primary"
          >
            GitHub Link
          </Button>
        </card>
        <card class="cbBody" style={{ width: "18rem" }}>
          <Card.Img class="samesize" variant="top" src={"/images/GitOutside"} />
          <Card.Body>
            <Card.Title class="projecttitle">Dine-In</Card.Title>
            <Button
              href="https://korbin-sargent.github.io/Dine-In/"
              target="_blank"
              variant="outline-primary"
            >
              Deployed Link
            </Button>
          </Card.Body>
          <Button
            href="https://github.com/Korbin-Sargent/Dine-In"
            target="_blank"
            variant="outline-primary"
          >
            GitHub Link
          </Button>
        </card>
      </section>
    </>
  );
};
