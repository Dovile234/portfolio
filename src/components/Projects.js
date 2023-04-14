import React from "react";
import ecommerce from "../assets/ecommerce.jpg";
import player from "../assets/musicplayer.png";
import weather from "../assets/weather.png";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Recent Work</h2>
      <div className="projects-wrap">
        <div className="container" id="projects">
          <input
            type="radio"
            name="slider"
            className="d-none"
            id="s1"
            defaultChecked
          />
          <input type="radio" name="slider" className="d-none" id="s2" />
          <input type="radio" name="slider" className="d-none" id="s3" />
          <input type="radio" name="slider" className="d-none" id="s4" />

          <div className="cards">
            <label htmlFor="s1" id="slide1">
              <div className="card">
                <div className="image">
                  <img src={ecommerce} alt="website" />
                </div>
                <div className="infos">
                  <h3 className="name">E-commerse website</h3>
                  <p className="website-description">
                    It is an online store that allows buyers to browse through
                    multiple categories and add products to cart.
                  </p>
                  <div className="tech">
                    <span>REACT</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <a target="blank" href="https://furninatur.netlify.app/">
                    Live
                  </a>
                  <a
                    target="blank"
                    href="https://github.com/Dovile234/ecommerce-website.git"
                  >
                    Code
                  </a>
                </div>
              </div>
            </label>

            <label htmlFor="s2" id="slide2">
              <div className="card">
                <div className="image">
                  <img src={player} alt="website" />
                </div>
                <div className="infos">
                  <h3 className="name">Music Player</h3>
                  <p className="website-description">
                    This is a web aplication, that lets users play music, browse
                    through multiple music genres and add favorite songs to
                    their playlist. Favorites list was made using local storage.
                  </p>
                  <div className="tech">
                    <span>REACT</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <a target="blank" href="https://tuneflow.netlify.app/">
                    Live
                  </a>
                  <a
                    target="blank"
                    href="https://github.com/Dovile234/music-player.git"
                  >
                    Code
                  </a>
                </div>
              </div>
            </label>

            <label htmlFor="s3" id="slide3">
              <div className="card">
                <div className="image">
                  <img src={weather} alt="website" />
                </div>
                <div className="infos">
                  <h3 className="name">Weather Forecast Website</h3>
                  <p className="website-description">
                    Weather forecast app uses OpenWeatherMap API to get weather
                    data for any location you search for. Background images
                    change depending on weather conditions.
                  </p>
                  <div className="tech">
                    <span>JAVASCRIPT</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <a
                    target="blank"
                    href="https://dovile234.github.io/weather-forecast/"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live
                  </a>
                  <a
                    target="blank"
                    className="github"
                    href="https://github.com/Dovile234/weather-forecast.git"
                  >
                    <FaGithub style={{ fontSize: "20px" }} />
                    Code
                  </a>
                </div>
              </div>
            </label>

            <label htmlFor="s4" id="slide4">
              <div className="card">
                <div className="image">
                  <img src={ecommerce} alt="website" />
                </div>
                <div className="infos">
                  <h3 className="name">Exercise website</h3>
                  <p className="website-description">
                    Weather forecast app uses OpenWeatherMap API to get weather
                    data for any location you search for. Background images
                    change depending on weather conditions.
                  </p>
                  <div className="tech">
                    <span>REACT</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <a target="blank" href="https://furninatur.netlify.app/">
                    Live
                  </a>
                  <a
                    target="blank"
                    href="https://github.com/Dovile234/ecommerce-website.git"
                  >
                    Code
                  </a>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
