import React from "react";
import "./herotext.css";
import Fade from "react-reveal/Fade";
import { MdWavingHand } from "react-icons/md";
import phone_img from "../Assets/phone_img.png";
import {BsCaretDownFill} from "react-icons/bs"
const HeroText = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        })
    }
  return (
    <>
      <div className="background-container">
        <div className="hero-text-container">
          <Fade top duration={500} delay={200}>
            <h1 className="hero-text-welcome">
              <MdWavingHand /> HELLO THERE. WE ARE HALOSOFT &lt;/&gt;
            </h1>
          </Fade>
        </div>
        <div className="we-do-text">
          <Fade bottom duration={500} delay={200}>
            <h3> WE DO THE THINGS WE LOVE</h3>
            <p>
              We love to provide top web solutions for your business
              <br />
              Or do you just want one to fulfill your fantasies?
            </p>
           <BsCaretDownFill className="down-icon" onClick={handleScroll}/>
          </Fade>
        </div>
        <div className="image-container">
            <Fade bottom duration={500} delay={400}>
        <img className="phone-img" src={phone_img}/>
        </Fade>
        </div>
      </div>
    </>
  );
};

export default HeroText;
