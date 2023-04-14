import React from "react";
import reactIcon from "../assets/icons/react.png";
import javascript from "../assets/icons/javascript.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import scss from "../assets/icons/scss.png";
import github from "../assets/icons/github.png";
import netlify from "../assets/icons/netlify.png";
import bootstrap from "../assets/icons/bootstrap.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <main id="main">
      <div className="main-wrapper">
        <p>Hi, my name is</p>
        <h1>Dovilė Zabieliūtė</h1>
        <p>I'm a passionate Front-End Developer based in Kaunas, Lithuania</p>
        <div className="stack">
          <span className="title">Tech Stack</span>
          <div className="stack-wrap">
            <img className="icon" src={reactIcon} alt="react" title="react" />
            <img
              className="icon"
              src={javascript}
              alt="javasript"
              title="javascript"
            />
            <img className="icon" src={html} alt="react" title="html" />
            <img className="icon" src={css} alt="css" title="css" />
            <img className="icon" src={scss} alt="scss" title="scss" />
            <img className="icon" src={github} alt="github" title="github" />
            <img className="icon" src={netlify} alt="netlify" title="netlify" />
            <img
              className="icon"
              src={bootstrap}
              alt="bootstrap"
              title="bootstrap"
            />
          </div>
        </div>
      </div>
      <div className="socials-wrap">
        <div className="socials">
          <a
            className="linkedin"
            target="blank"
            href="https://www.linkedin.com/in/dovil%C4%97-zabieli%C5%ABt%C4%97-834a12268/"
          >
            <FaLinkedin />
          </a>
          <a target="blank" href="https://github.com/Dovile234">
            <FaGithub />
          </a>
          <a target="blank" href="https://www.facebook.com/zdovile123">
            <FaFacebook />
          </a>

          <div className="vl"></div>
        </div>
      </div>
      <a href="#link2" className="btn-down">
        <MdOutlineArrowForwardIos />
      </a>

      <div id="link2" className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Intro;
