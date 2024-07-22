import React, { useState } from "react";

const Experiences = () => {
  const [visibleCards, setVisibleCards] = useState({
    bloc1: false,
    bloc2: false,
  });

  const toggleCardVisibility = (bloc) => {
    setVisibleCards((prevState) => ({
      ...prevState,
      [bloc]: !prevState[bloc],
    }));
  };

  return (
    <div className="experience-container" id="experiences">
      <h2 className="experience-title">Mon expérience.</h2>
      <div className="experience-content">
        <div className="experience-card-bloc">
          <div className="experience-card">
            <h3>Expérience en développement</h3>
            <p className="experience-text">
              Intégration de maquettes (HTML et CSS)
              <br /> Intégration de site de restauration avec des animations
              (HTML et CSS)
              <br /> Optimisation SEO de sites (Accessibilité, SEO)
              <br /> Création de site marchand en ligne fictif (Javascript,
              API)
              <br /> Création du back-end d'un site d'avis culinaire avec une
              base de données (Javascript, Node.js, Express MongoDB)
              <br /> Création d'un réseau social d'entreprise en full stack CRUD
              (Node.js, Express, Bootsrap, Vue.js, PlanetScale)
              <br />
              Création de plusieurs petites applications web frontend, backend
              et full stack
              <br/> Création d'applications mobiles avec React Native
            </p>
            <button onClick={() => toggleCardVisibility("bloc1")}>
              {visibleCards.bloc1 ? "-" : "+"}
            </button>
          </div>
          {visibleCards.bloc1 && (
            <div className="experience-card">
              <h3>Skills débloqués</h3>
              <p className="experience-text">
                Capacité à décortiquer mentalement un site ou une fonctionnalité
                afin de le reproduire <br />
                Automatisme à utiliser le bouton inspecter pour analyser et reproduire des effets visuels intéressants sur les sites. <br />
                Réceptivité aux commentaires et aux critiques constructives,
                avec une volonté de s'adapter et d'améliorer les projets en
                conséquence.
                <br />
                Capacité à persévérer face aux défis techniques et à rester
                motivé pour trouver des solutions aux problèmes. <br />
                Capacité à travailler de manière autonome et à prendre des
                initiatives pour avancer les projets sans supervision constante.
                <br />
                Capacité à explorer et à apprendre de nouvelles technologies et
                frameworks pour répondre aux besoins spécifiques des projets.
              </p>
            </div>
          )}
        </div>
        <div className="experience-card-bloc">
          <div className="experience-card">
            <h3>Expérience en commerce et vente</h3>
            <p className="experience-text">
              Création et développement d'une branche inexistante dans une
              agence commerciale
              <br /> Conseil et évaluation prévisionnelle
              <br />
              Développement géographique du marché
              <br /> Relation client et résolution des réclamations
              <br /> Création et négociation de devis et de contrats de
              maintenance
              <br /> Assurer la qualité de service à la clientèle Dynamiser
              l'offre de produits et services <br />
              Assurer la veille commerciale, réaliser et exploiter des études
              commerciales
              <br />
              Management d'une équipe de vente de 4 personnes
            </p>
            <button onClick={() => toggleCardVisibility("bloc2")}>
              {visibleCards.bloc2 ? "-" : "+"}
            </button>
          </div>
          {visibleCards.bloc2 && (
            <div className="experience-card">
              <h3>Skills débloqués</h3>
              <p className="experience-text">
                Aptitude à communiquer efficacement avec les clients et les
                membres de l'équipe, favorisant une collaboration harmonieuse.
                <br />
                Capacité à comprendre les besoins et les préoccupations des
                clients pour offrir un service personnalisé et résoudre les
                réclamations efficacement.
                <br /> Capacité à gérer un projet, évaluer les performances ainsi que le temps grace des outils de gestion de projet
                <br />
                Capacité à manager une équipe de manière efficace
                <br />
                Capacité à gérer et à résoudre les conflits au sein de l'équipe,
                assurant une dynamique de travail harmonieuse.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
