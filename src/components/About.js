import React, { useEffect, useState } from "react";

const About = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    if (windowSize > 1760) {
      document.querySelector(".about-title").style.left =
        value < 670 ? (value - 400) * 0.6 + "px" : "140px";
    } else if (windowSize > 1470) {
      document.querySelector(".about-title").style.left =
        value < 670 ? (value - 300) * 0.4 + "px" : "140px";
    } else if (windowSize > 1240) {
      document.querySelector(".about-title").style.left =
        value < 640 ? (value - 300) * 0.2 + "px" : "60px";
    } else {
      document.querySelector(".about-title").style.position = "unset";
    }
  });
  return (
    <section className="about">
      <h2 className="about-title">About me</h2>
      <div className="text-wrap">
        <p>
          I am a Front-End Developer with a passion for creating beautiful and
          functional websites. I recently completed the front-end courses on
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
