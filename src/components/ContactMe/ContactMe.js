import React, { useState } from "react";
import { validateEmail } from "../../utils";

const ContactMe = () => {
  //defining state with change method and default value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else setMessage(inputValue);
  };

  //function is responsible for submitting the user info from the form
  const handleFormSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    if (!validateEmail(email)) {
      window.alert("Please enter a valid Email Address.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      window.alert(
        "Thank you for your message. I will get back to you within the next 24-hours."
      );
    }
  };

  return (
    <>
      <h1>Contact Me</h1>
      <h2 className="mt-3">410-212-59040</h2>
      <h2 className="mt-1">
        <a href="mailto:korbinksargent@gmail.com">korbinksargent@gmail.com</a>
      </h2>
      <form>
        <div className="container mb-3">
          <label for="exampleInputName1">Name:</label>
          <input
            name="name"
            value={name}
            type="text"
            class="form-control"
            id="exampleInputName1"
            onChange={handleInputChange}
            placeholder="Enter Your Full Name Here"
          />
        </div>
        <div className="container mb-3">
          <label for="exampleInputEmail1">Email:</label>
          <input
            name="email"
            value={email}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleInputChange}
            placeholder="Enter Your Email Here"
          />
        </div>
        <div className="container mb-3">
          <label for="exampleFormControlTextArea1">message:</label>
          <input
            name="message"
            value={message}
            type="text"
            class="form-control"
            rows="3"
            id="exampleInputMessage"
            onChange={handleInputChange}
            placeholder="Enter Your Message Here"
          />
        </div>
        <div>
          <button
            type="submit"
            class="text-center btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactMe;
