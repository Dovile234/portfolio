import React from "react";

const About = () => {
  window.addEventListener("scroll", () => {
    const handleWindowSize = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      const about = document
        .querySelector(".about-title")
        .getBoundingClientRect().top;

      const projects = document
        .querySelector(".projects-wrap")
        .getBoundingClientRect().top;

      const projectsTitle = document
        .querySelector(".projects-title")
        .getBoundingClientRect().top;

      if (about < triggerBottom) {
        document.querySelector(".about-title").classList.add("show");
      } else {
        document.querySelector(".about-title").classList.remove("show");
      }

      if (projects < triggerBottom) {
        document.querySelector(".projects-wrap").classList.add("show");
      } else {
        document.querySelector(".projects-wrap").classList.remove("show");
      }

      if (projectsTitle < triggerBottom) {
        document.querySelector(".projects-title").classList.add("show");
      } else {
        document.querySelector(".projects-title").classList.remove("show");
      }
    };

    handleWindowSize();
  });
  return (
    <section className="about">
      <div id="link"></div>
      <h2 className="about-title">About me</h2>
      <div className="text-wrap">
        <p>
          I am a Front-End Developer with a passion for creating beautiful and
          functional websites. I recently completed the front-end course on
          CodeAcademy and discovered that programming makes me truly happy.
        </p>
        <p>
          As a creative person, I find joy in bringing designs to life through
          code and making websites that are not only visually appealing but also
          easy to use and navigate. I am always looking to expand my knowledge
          and stay up-to-date with the latest technologies. I am also
          experienced in responsive design, ensuring that websites look great on
          any device.
        </p>
      </div>
    </section>
  );
};

export default About;
