import React from "react";
import { Image } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <a href="mailto:korbinksargent@gmail.com"></a>
          <Image
            src={"/images/gmail_logo.png"}
            alt="Link to Gmail"
            className="icon"
            rounded
          />
        </a>
        <a href="https://github.com/Korbin-Sargent">
          <Image
            src={"/images/github_logo.png "}
            alt="Link to github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/korbin-sargent-951b4913b/">
          <Image
            src={"/images/linkedin_logo.png"}
            alt="Link to LinkedIn"
            className="icon"
            rounded
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
