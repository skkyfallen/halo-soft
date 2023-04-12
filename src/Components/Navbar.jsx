import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import Fade from "react-reveal/Fade"
const Navbar = () => {
  return (
    <>
    
      <nav>
        <ul>
         <Fade top duration={400} delay={300}>
          <li className="logo">
            <a>HALOSOFT</a>
          </li>
          </Fade>
          <Fade left>
          <li>
            <a>Home</a>
          </li>
          <li><a>About</a></li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          </Fade>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
