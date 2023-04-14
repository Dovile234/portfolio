import React, { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 26) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "solid" : "transparent"}>
      <nav>
        <ul>
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#link">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
