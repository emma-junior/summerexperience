import React from "react";
import logotwo from "../images/logo-two.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="logo-two" src={logotwo} alt="" />
      <div className="socialmedia-icons">
        <p className="socialicon-wrapper">
          <a href="https://www.facebook.com/higherfeatstutors/">
            <FaFacebookF className="social-icon" />
          </a>
        </p>
        <p className="socialicon-wrapper">
          <a href="https://www.instagram.com/higherfeatsng/">
            <FaInstagram className="social-icon" />
          </a>
        </p>
        <p className="socialicon-wrapper">
          <a href="https://wa.link/s9nlzw/">
            <FaWhatsapp className="social-icon" />
          </a>
        </p>
      </div>
      <div className="telephone">
        <p className="tel-icon">
          <BsTelephoneFill />
        </p>
        <p className="phone-no">09031190694</p>
      </div>
      <div className="email-wrapper">
        <p className="email-icon">
          <AiTwotoneMail />
        </p>
        <p className="phone-no">higherfeatstutors@gmail.com</p>
      </div>
      <div className="line"></div>
      <div className="">
        <p className="poweredby">
          <RiCopyrightLine />
          Summer Experience 2022! | Powered by HigherFeats tutors
        </p>
      </div>
    </div>
  );
};

export default Footer;
