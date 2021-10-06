import React from "react";

const Resume = () => {
  return (
    <>
      <h1>
        <a
          href="./images/KorbinKSargentResume.pdf"
          className="btn btn-success active btn-lg mt-4 p-5 resumeBtn"
          target="_blank"
          download="newfilename"
        >
          Resumé PDF
        </a>
      </h1>
      <ul className="text-center">
        List of Proficiencies
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>APIs</li>
        <li>Node.js</li>
        <li>OOP</li>
        <li>Express,js</li>
        <li>SQL</li>
        <li>ORM</li>
        <li>MVC</li>
        <li>NoSQL</li>
        <li>PWA</li>
        <li>MongoDB</li>
        <li>Mongo Atlas</li>
        <li>React</li>
        <li>and MERN Stack.</li>
      </ul>
    </>
  );
};

export default Resume;
