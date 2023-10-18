import React from "react";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import LoginButton from "../LoginButton";
import "../Navbar/Navbar.scss";

// FIX NAVBAR

// 17/10/2023 se eliminó las etiquetas de competencias

const Navbar = ({ toggle }) => {
  const currentLocation = window.location.pathname;
  console.log(currentLocation);
  const isAdmin = localStorage.getItem("userType") === "admin" ? true : false;
  const isApplicant = localStorage.getItem("userType") === "applicant" ? true : false;
  console.log(isAdmin);
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          <img
            width="40px"
            src={logo}
            alt="Logo del Programa de Excelencia Vertice IEST Anahuac"
          ></img>
        </a>

        <FaBars className="navbar__bars" onClick={toggle} />
        <ul className="navbar__links">
          {currentLocation === "/" ? (
            <>
              <li>
                <a href="/aplicar">Aplicar</a>
              </li>
            </>
          ) : isAdmin ? (
            <>
              <FaBars className="navbar__bars" onClick={toggle} />
              <li>
                <a href="/dashboard">Inicio</a>
              </li>
              <li>
                <a href="/dashboard/solicitudes">Solicitudes</a>
              </li>{" "}
              <li>
                <a href="/dashboard/eventos">Eventos y asistencias</a>
              </li>
              <li>
                <a href="/dashboard/materias">Materias</a>
              </li>
              <li>
                <a href="/dashboard/miembros">Miembros</a>
              </li>{" "}
              <li>
                <a href="/dashboard/miembros-eliminados">Antiguos Miembros</a>
              </li>
            </>
          ) : isApplicant ? (
            <>
              <FaBars className="navbar__bars" onClick={toggle} />
            </>
          ) : (
            <>
              <li>
                <a href="/mi-perfil">Inicio</a>
              </li>
              <li>
                <a href="/eventos">Eventos</a>
              </li>
              <li>
                <a href="/asistencias">Asistencias</a>
              </li>
              <li>
                <a href="/avance">Avance</a>
              </li>
              <li>
                <a href="/materias">Materias</a>
              </li>
              <li>
                <a href="/puntaje">Puntaje</a>
              </li>
            </>
          )}
          <LoginButton />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
