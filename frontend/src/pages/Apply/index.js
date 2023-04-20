import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './Apply.scss';

const Apply = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //creo que aqui hay que poner un timeout
  useEffect(() => {
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="apply-container">
        <h1>Aplica al programa vértice</h1>
        <div className="apply-form-container">
          <div>
            <img class="apply-form-img" src="https://www.elsoldetampico.com.mx/circulos/nmhs4m-captura-de-pantalla-2019-08-11-a-las-19.15.39.png/ALTERNATES/LANDSCAPE_960/Captura%20de%20Pantalla%202019-08-11%20a%20la(s)%2019.15.39.png" alt="" srcset="" />
          </div>
          <form class="apply-form" action="">
            <label for="nombre">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" />

            <label for="id">Id:</label>
            <input type="number" id="id" name="id" />

            <label for="carrera">Carrera:</label>
            <input type="text" id="carrera" name="carrera" />

            <label for="semestre">Semestre:</label>
            <input type="number" id="semestre" name="semestre" />

            <label for="correo">Correo:</label>
            <input type="email" id="correo" name="correo" />

            <label for="imagen">Adjuntar imagen:</label>
            <input type="file" id="imagen" name="imagen" />

            <input type="submit" value="Enviar" />
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
