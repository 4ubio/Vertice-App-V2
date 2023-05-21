import React from "react";
import logoIest from "../../images/logo-iest.png";
import logoCE from "../../images/ciencias-exactas.png";
import logoISND from "../../images/isnd.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <nav className="footer">
        <ul>
          <li>
            <a href="https://anahuac.mx/iest/" target="_blank" rel="noreferrer">
              anahuac.mx/iest
            </a>
          </li>
          <li>
            <p>(833) 230 2550</p>
          </li>
          <li>
            <a href="mailto:vertice@iest.edu.mx">vertice@iest.edu.mx</a>
          </li>
          <li>
            <p>Ing. Betsabé Rodríguez Silva</p>
          </li>
        </ul>
        <div className="container_logo">
          <img src={logoISND} alt="Logo del IEST Anahuac en blanco" className="mini_logo"/>
          <img src={logoCE} alt="Logo del IEST Anahuac en blanco" className="mini_logo"/>
          <img src={logoIest} alt="Logo del IEST Anahuac en blanco" />
        </div>
      </nav>
    </>
  );
};

export default Footer;
