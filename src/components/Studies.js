import React from "react";
import logo_dev from "../assets/logos/developpement-web.png";
import logo_management from "../assets/logos/management.png";
import logo_negociation from "../assets/logos/negociation.png";

const Studies = () => {
  return (
    <div className="studies-container" id="studies">
      <h2 className="title">Mes formations.</h2>
      <div className="studies-content">
        <div className="studies-card">
          <h2>BAC+2 Développeur web</h2>
          <p className="studies-text">
            Maîtrise du HTML et du CSS pour la structuration et le stylisme des
            pages web. <br /> Utilisation de systèmes de contrôle de version
            (Git)
            <br />
            Compréhension des fondamentaux de JavaScript, y compris les
            manipulations DOM, les événements, et les animations.
            <br />
            Techniques de design adaptatif pour assurer une expérience
            utilisateur optimale sur tous les types d'appareils.
            <br /> Apprentissage de Node.js et Express pour la création de
            serveurs web et d'API.
            <br /> Introduction aux bases de données SQL (MySQL) et NoSQL
            (MongoDB), ainsi que l'interaction avec ces bases via des requêtes.
            <br /> Utilisation des meilleures pratiques pour sécuriser les
            applications web et les données des utilisateurs.
          </p>
          <img src={logo_dev} alt="icone dev" />
        </div>
        <div className="studies-card">
          <h2>BAC+3 Bachelor Négociateur d'affaires</h2>
          <p className="studies-text">
            Compréhension des principes de la négociation, des techniques de
            persuasion et des stratégies de vente.
            <br />
            Analyse de l'environnement économique et juridique dans lequel les
            entreprises évoluent.
            <br />
            Élaboration de stratégies de vente efficaces, identification des
            opportunités de marché et analyse concurrentielle.
            <br /> Maîtrise des techniques de marketing, y compris le marketing
            digital, pour attirer et fidéliser les clients.
            <br />
            Application de techniques de vente avancées pour conclure des
            affaires et atteindre les objectifs commerciaux.
            <br />
            Développement des compétences en leadership et en prise de décision
            stratégique.
            <br />
            Compétences en négociation de contrats, rédaction de propositions
            commerciales et gestion des accords contractuels.
            <br />
            Techniques de résolution des conflits et des réclamations clients.
          </p>
          <img src={logo_negociation} alt="icone graphique" />
        </div>
        <div className="studies-card">
          <h2>BAC+2 BTS Management des unités commerciales</h2>
          <p className="studies-text">
            Compréhension des principes de base du management et des stratégies
            commerciales. <br />
            Élaboration de l’offre de produits et services, gestion des
            assortiments et mise en place de stratégies de vente. <br />
            Techniques de présentation des produits en magasin pour optimiser
            les ventes et attirer les clients. <br />
            Maîtrise des techniques de vente, de négociation et de communication
            commerciale. <br />
            Recrutement, formation, motivation et évaluation de l'équipe
            commerciale. <br />
            Développement des compétences en leadership et en gestion de projets
            commerciaux. <br />
            Gestion des budgets commerciaux, contrôle des coûts et évaluation de
            la rentabilité des actions commerciales.
          </p>
          <img src={logo_management} alt="icone manager" />
        </div>
      </div>
    </div>
  );
};

export default Studies;
