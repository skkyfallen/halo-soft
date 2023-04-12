import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
import happy_cropped from "../Assets/happy_cropped.png";
import { BsCaretDownFill } from "react-icons/bs";

const About = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="about-section" id="#aboutSection">
        <Fade bottom duration={500} delay={400}>
          <h1>Want to know us?</h1>
        </Fade>
        <Fade top duration={500} delay={500}>
          <p>
            We are a startup web developement
            <br />
            company based in Nigeria. Our main aim is to provide
            <br />
            top notch web solutions for your business, or just <br />
            for your personal use if you want.
          </p>
        </Fade>
        <Fade buttom duration={500} delay={1000}>
          <img src={happy_cropped} />
        </Fade>
        <BsCaretDownFill className="down-icon-2" onClick={handleScroll} />
      </div>
    </>
  );
};

export default About;
