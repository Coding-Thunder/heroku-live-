import React, { useEffect, useState } from "react";
import "./Header.css";
// "/PersonalPortfolioNew"
const Header = (props) => {
  const [projectHREF, setProjectHREF] = useState("");
  const [show, handleShow] = useState(false);

  const checkTheLocationOfThePage = () => {
    if (
      window.location.pathname === "/education" ||
      window.location.pathname === "/AboutMe"
    ) {
      setProjectHREF("/PersonalPortfolioNew");
    } else {
      setProjectHREF("#Projects");
    }
  };
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`header ${show && "header__tomato"}`}>
      <div className="header__navs">
        <p className="large fontdiff">VINAY</p>
        <a
          alt="Project Navigation"
          href={projectHREF}
          onClick={checkTheLocationOfThePage}
        >
          Projects
        </a>
        <a alt="Education Navigation" href="/education">
          Education
        </a>
        <a alt="AboutMe Navigation" href="/AboutMe">
          About Me!
        </a>
      </div>
      <div className="header__socialIcons">
        <a
          alt="Facebook"
          href="https://www.facebook.com/vinay.maheshwari.733"
          class="fab fa-facebook"
          target="_blank"
          rel="noreferrer"
        />
        <a
          href="https://github.com/Coding-Thunder"
          class="fab fa-github"
          target="_blank"
          alt="Github"
          rel="noreferrer"
        />
        <a
          href="https://twitter.com/codethund"
          class="fab fa-twitter"
          alt="Twitter"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </div>
  );
};

export default Header;
