import React from "react";

const Presentation = ({ developer }) => {
  return (
    <div className="presentation-container">
      <img
        src={developer.presentation.photo}
        alt="portrait du développeur"
        className="presentation-image"
      />
      <div className="presentation-content">
        <h2 className="presentation-title">
          Présentation.
          <span> Bonjour et bienvenue sur mon site CV</span>
        </h2>
        <p className="presentation-text">
          {developer.presentation.description}
        </p>
        <p> Mes langages et technologies: {developer.skills}</p>
        <button className="presentation-content-button">
          <a href="/CV David François-Eugène.pdf" download className="cv-link">
            Télécharger le CV
          </a>
        </button>
      </div>
    </div>
  );
};
export default Presentation;
