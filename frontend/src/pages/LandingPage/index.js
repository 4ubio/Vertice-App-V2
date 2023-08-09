import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import header from "../../images/header.png";
import verticeImg from "../../images/vertice2.png";
import iestLogo from "../../images/logoIest.webp";
import devs from "../../images/devs.png";

import "./LandingPage.scss";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <div className="landing-content">
        <img
          className="landing-content__promocional"
          src={header}
          alt="Programa Vertice"
        />
      </div>

      <div>
        <div className="about">
          <div className="p-4">
            <h2 className="vertice_title">
              ¿Qué es <br></br> <span className="black">Vértice</span>?
            </h2>
            <p className="lh-2 vertice_subtitle">
              Es el Programa de Excelencia de la Red de Universidades Anáhuac el
              cual complementa tus estudios a través de una experiencia de
              formación multidisciplinaria, que te permitirá consolidarte como
              líder de excelencia capaz de transformar tu vida y nuestro
              entorno.
            </p>
          </div>

          <div className="img_container">
            <img className="vertice-img" src={verticeImg} />
          </div>
        </div>

        <div className="about-devs">
          <div className="p-4">
            <div className="about-devs-card">
              <h2 className="">Desarrollo del proyecto</h2>
              <p>
                Desarrollar una aplicación web progresiva para el Programa de
                Excelencia Vértice IEST Anáhuac que brinde soporte en la
                planeación, control de las actividades, eventos, control de
                asistencia y visualización del avance curricular, de manera que
                se brinde un mejor servicio a los miembros del programa.
              </p>
              <p>
                Bajo la dirección de los maestros Victor Guillermo Asad Zetina y
                José Luis Martínez Hernández de la División de Ciencias Exactas
                del IEST - ANÁHUAC.
              </p>
              <div className="center">
                <img width={280} src={iestLogo} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="color-gray about-devs-card-2">
              <h2 className="center">
                Iniciativa de dos alumnas del programa de Excelencia Vértice
              </h2>
              <div className="center">
                <img width={400} src={devs} />
              </div>
              <h2 className="center">Andrea Sosa &ensp; &  &ensp; Teresa Rico</h2>
              <div className="about-devs-card-3">
                <p className="center">
                  Segunda fase del proyecto integrado por el equipo de alumnos
                  de la carrera de Ing. Sistemas y Negocios Digitales.
                </p>
                <ul>
                  <li>Sebastián Rubio Quiroz</li>
                  <li>Josué David Arreola Aguilera</li>
                  <li>María Fernanda Villarreal Mar</li>
                  <li>David Alejandro Rivera Luna</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
