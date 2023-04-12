import React from "react";
import "./footer.css";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
const Footer = () => {
    const handleTwitterClick=()=>{
        window.location.href="https://twitter.com/HaloSoft_dev"
    }
    const handleInstagramClick=()=>{
        window.location.href="https://instagram.com/HaloSoft_dev"
    }
    const handleGitClick=()=>{
        window.location.href="https://github.com/skkyfallen"
    }
  return (
    <>
      <div className="footer-container">
        <BsTwitter className="profile-icon" onClick={handleTwitterClick} />
        <BsInstagram className="profile-icon" />
        <BsGithub className="profile-icon" />
      </div>
      <div className="footer-text">
        <p className="footer-p">Developed by HaloSoft 2023</p>
      </div>
    </>
  );
};

export default Footer;
