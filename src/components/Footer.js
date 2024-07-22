import React from 'react';
import logo1 from "../assets/logos/github.png"
import logo2 from "../assets/logos/linkedin.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <a href="https://github.com/dvdfe" target="_blank" rel="noopener noreferrer">
                <img src={logo1} alt="Logo github" />
                </a>
                <a href="https://www.linkedin.com/in/david-françois-eugène-941205162/" target="_blank" rel="noopener noreferrer">
                <img src={logo2} alt=" Logo linkedin" />
                </a>
            </div>
            <div className="footer-copyright">
            Copyright © 2024 Tous droits réservés.
            </div>
        </div>
    );
};

export default Footer;