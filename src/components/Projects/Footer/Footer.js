import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <a href="http://www.korbinksargent@gmail.com">
          <img
            src={"/images/gmail_logo.png"}
            alt="Link to Gmail"
            className="icon"
          />
        </a>
        <a href="https://github.com/Korbin-Sargent">
          <img
            src={"/images/github_logo.png "}
            alt="Link to github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/korbin-sargent-951b4913b/">
          <img
            src={"/images/github_logo.png"}
            alt="Link to LinkedIn"
            className="icon"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
