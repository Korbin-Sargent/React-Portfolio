import React from "react";
import { Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <section
        className=" d-flex
          flex-column
          align-items-center
          justify-content-center
          col-md-6
          offset-md-3
          mt-4
          pb-5
          customSizing
          linksContainer "
      >
        <h2 className="mt-3 mb-3">Korbin Sargent</h2>
        <Image
          src="./images/Profile_pic.jpeg"
          class="img-fluid mainImg"
          alt="Korbin Sargent"
          rounded
        />
        <p className="col-8 pt-2 mt-4">
          I’m a full-stack web developer based out of Denver, CO. I have experience in building both the
          front-end and back-end of web applications. My primary experience is
          with JavaScript, NodeJS and React, but I am highly interested in
          expanding my knowledge base to other technologies as well. In my previous career as an environmental scientist, I
          worked with a passionate team where we developed solutions to complex
          remediation problems. My skills as a problem solver and ability to learn quickly have allowed me
          to excel in a developer role. Let's work together to create somethings great!</p>
      </section>
    </>
  );
};

export default AboutMe;
