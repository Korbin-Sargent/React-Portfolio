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
          I’m a full-stack web developer with experience building both the
          front-end and back-end of web applications. My primary experience is
          with JavaScript, NodeJS and React, but I am highly interested in
          Python as well. In my previous career as an environmental scientist, I
          worked with a passionate team where we developed solutions to complex
          remediation problems. Being a builder at heart has allowed me to progress my developer skills quickly. I'm excited to be a life long learner as a member of the web development community. <br />
        </p>
      </section>
    </>
  );
};

export default AboutMe;
