import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import miembrosVertice from "../../images/landing-page-promocional.jpeg";
import evento1 from "../../images/evento-1.jpeg";
import verticeImg from "../../images/vertice2.png";
import sebas from "../../images/sebas.png";
import josue from "../../images/josue.png";
import mafer from "../../images/mafer.png";
import david from "../../images/david.png";

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
        <h1>Programa de Excelencia Vértice</h1>
        <img
          className="landing-content__promocional"
          src={miembrosVertice}
          alt="Miembros del Programa Vertice"
        />
      </div>
      <div className="landing-content__carrousel">
        <img src={evento1} />
        <img src={evento1} />
        <img src={evento1} />
        <img src={evento1} />
      </div>
      <div className="p-4">
        <div className="about">
          <div>
            <img className="vertice-img" src={verticeImg} />
          </div>
          <div className="card card--gray txt-center">
            <h2>¿Qué es Vertice?</h2>
            <p className="lh-2">
              <strong>
                Es un Programa de Excelencia académica y humana para la
                formación integral de alumnos de alto rendimiento.
              </strong>
              Que ocuparán puestos clave en la sociedad capaces de transformarla
              con su servicio, ideas, proyectos y testimonio de su fe.
            </p>
          </div>
        </div>
        <div className="card card--gray mt-4">
          <h2>Historia de desarrollo del proyecto</h2>
          <p className="txt-justify">
            A lo largo de los años, la tecnología ha evolucionado de manera que
            nos es más sencillo el realizar aquellas actividades que
            anteriormente solo se realizaban a mano, por lo que después de
            juntas, borradores de ideas, modificaciones, etc. Se ha desarrollado
            Vértice App, la cual ayudará a los alumnos, maestros y
            administradores, a llevar un control eficaz y al alcance de sus
            manos con solo buscar la página. Siendo esta la segunda versión, en
            la que se llevará a cabo un control más eficiente y sencillo, con la
            existencia de tres distintos perfiles, los cuales son: No Miembros,
            Miembros y Administradores, esto para evitar la confusión de proceso
            de admisión, puntos alcanzados semestralmente, dadas de baja, etc.
            Este sitio web, no existiría si no fuera por los alumnos de la
            carrera de Ing. En Sistemas y Negocios Digitales, División de
            Ciencias Exactas, pues ellos son los que se han encargado de llevar
            a cabo todo el proyecto, iniciando con la idea y el proceso las
            alumnas, Teresa Lisette Rico Soto y Andrea Sosa Salazar. Dándole
            seguimiento a la versión actual los alumnos Sebastian Rubio Quiroz,
            Josue David Arreola Aguilera, María Fernanda Villarreal Mar y David
            Alejandro Rivera Luna. Con el apoyo de los docentes Victor Guillermo
            Asad Zetina y José Luis Martínez Hernández, debido a que brindaron
            las bases y las herramientas para hacer posible este gran proyecto.
          </p>
        </div>
        <div className="developers mt-4">
          <img height={250} src={sebas} alt="Sebastia Rubio" />
          <img height={250} src={josue} alt="Josué Arreola" />
          <img height={250} src={mafer} alt="Maria Fernanda Villarreal" />
          <img height={250} src={david} alt="David Rivera" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
