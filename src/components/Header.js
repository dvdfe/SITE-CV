import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faGraduationCap,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-container");
      if (window.scrollY > 0) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <ul>
        <li>
          <a href="#home">Accueil</a>
          <a href="#home" className="icon">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
          <a href="#experiences" className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
        <li>
          <a href="#studies">Formations</a>
          <a href="#studies" className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
        </li>
        <li>
          <a href="#hobbies">Loisirs</a>
          <a href="#hobbies" className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
          <a href="#contact" className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
