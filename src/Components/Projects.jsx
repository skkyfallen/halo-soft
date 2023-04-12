import React from "react";
import "./projects.css";
import laundrun_home from "../Assets/laundrun_home.png";
import laundrun_signUp from "../Assets/laundrun_signUp.png";
import blupay_home from "../Assets/blupay_home.png";
import blupay_hero from "../Assets/blupay_hero.png";
import { BsCaretDownFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Projects = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="projects-container">
        <Fade top duration={500} delay={800}>
        <h1>
          Of course we have worked on <br /> some projects!
        </h1>
        </Fade>
        <div className="main-projects">
          <div className="project1">
            <Fade right duration={400} delay={1000}> 
            <img src={laundrun_home} className="laundrun-home" />
            <img src={laundrun_signUp} className="laundrun-signup" />
            </Fade>
            <Fade bottom ={400} delay={1200}>
            <p>
              LAUNDRUN is a web application which allows
              <br />
              regsitered users to request laundry services and <br />
              cleaning serivces to their doorsteps.
            </p>
            </Fade>
          </div>
          <div className="project2">
            <div className="test-container"></div>
            <Fade left duration={400} delay={1200}>
            <img src={blupay_home} className="blupay-home" />
            <img src={blupay_hero} className="blupay-hero" />
            </Fade>
            <Fade top duration={400} delay={1000}>
            <p>
              BLU-PAY acts as a liason between users without crypto <br />
              wallets and crypto exchanges. It allows users to make  <br />
              payments in their local currency and the currency is  <br />
              converted
            </p>
            </Fade>
          </div>
        </div>
        <BsCaretDownFill className="down-icon-3" onClick={handleScroll} />
      </div>
     
    </>
  );
};

export default Projects;
