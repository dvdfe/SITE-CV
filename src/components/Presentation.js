import React from "react";

const Presentation = ({ developer }) => {
  return (
    <div className="presentation-container">
      <img
        src={`${process.env.PUBLIC_URL}${developer.presentation.photo}`}
        alt="portrait du développeur"
        className="presentation-image"
      />
      <div className="presentation-content">
        <h2 className="presentation-title">
          Présentation.
          <span> Bonjour et bienvenue sur mon site CV</span>
        </h2>
        <p className="presentation-text">
          Ce site est l'une de mes créations et a pour but de vous offrir un
          aperçu de mes compétences. J'ai choisi de le développer en React.js,
          un framework que j'apprécie particulièrement. J'ai utilisé divers
          hooks pour gérer l'état et les effets de manière efficace. Pour le
          style, j'ai opté pour une combinaison de CSS et de JavaScript. Les
          données de certaines sections sont récupérées de la même manière que
          lors d'un appel à une API avec un fichier JSON que j'ai également
          créé, démontrant ainsi ma maîtrise des techniques de récupération et
          de gestion des données. Vous pouvez trouver{" "}
          <a
            href="https://github.com/dvdfe/site-cv-developpeur"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0047AB" }}
          >
            le code source de mon site 
          </a>{" "}
           sur mon GitHub. Je suis passionné par le développement et j'aime
          relever de nouveaux défis techniques. Mon objectif est de toujours
          améliorer mes compétences et de contribuer de manière significative à
          des projets innovants. Actuellement, je suis activement à la recherche
          d'un poste de développeur, que ce soit en front-end ou en back-end, en
          alternance, CDD, CDI ou participation à un POEI avant embauche. Si
          vous recherchez un développeur motivé, passionné et prêt à s'investir
          pleinement dans vos projets, n'hésitez pas à me contacter. Je suis
          impatient de pouvoir discuter de la manière dont je pourrais
          contribuer à votre équipe.
        </p>
        <p>
          Mes langages et technologies: {developer.skills} Je suis bien sûr
          ouvert à l'apprentissage d'un autre langage si besoin.
        </p>
        <button className="presentation-content-button">
          <a href="/CV David François-Eugène dev.pdf" download className="cv-link">
            Télécharger le CV
          </a>
        </button>
      </div>
    </div>
  );
};
export default Presentation;
