import React from "react";
import "./contact.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
const Contact = () => {
  const [name, setName] = useState("");
  const submitMessage = (event) => {
    event.preventDefault();
    toast(name + " your message has been sent successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="contact-container">
        <Fade top duration={500} delay={600}>
        <h3>Want to talk to us?</h3>
        </Fade>
        <Fade left duration={500} delay={700}>
        <h4>Send us a message now !</h4>
        </Fade>
        <Fade right duration={500} delay={1000}>
        <form className="contact-form">
          <label htmlFor="fullName">Enter your Full Name</label>
          <input
            type="text"
            className="contact-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="fullName"
            id="fullName"
            placeholder="eg John Mary"
          />
          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            className="contact-field"
            name="email"
            id="email"
            placeholder="example@eg.com"
          />
          <label htmlFor="phoneNumber">Enter your Phone Number</label>
          <input
            type="text"
            className="contact-field"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="eg 08012345678"
          />
          <label htmlFor="message">Enter your Message</label>
          <textarea
            className="message-field"
            placeholder="Enter your Message"
            name="message"
            id="message"
          />
          <button className="submit-message" onClick={submitMessage}>
            {" "}
            Send Message
          </button>
        </form>
        </Fade>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Contact;
