import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import api from '../../services/api';
import miembrosVertice from "../../images/landing-page-promocional.jpeg";
import './Apply.scss';

const Apply = () => {
  const [name, setName] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [idIest, setIdIest] = useState(0);
  const [email, setEmail] = useState('');
  const [bachelor, setBachelor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      name,
      lastNames,
      idIest,
      email,
      bachelor
    );
    const response = await api.post('/applicants', {
      name: name,
      lastNames: lastNames,
      idIest: idIest,
      email: email,
      bachelor: bachelor,
    });
    console.log(response.data);
    alert('Cuenta de aspirante creada exitosamente. Por favor, inicia sesión con tu nueva cuenta de aspirante.');
    window.location.reload();
  };

  return (
    <>
      <div className="apply-container">
        <h1 className='apply-theme'>Aplica al programa vértice</h1>
        <div className="apply-form-container">
          <div>
            <img  
              className="apply-form-img"
              src={miembrosVertice}
              alt="Miembros del Programa Vertice"
            />     
          </div>
          <form onSubmit={handleSubmit} class="apply-form" action="">
            <label htmlFor='name'>Nombre:</label>
            <input
              name='name'
              type='text'
              placeholder='Nombre(s)'
              required
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor='lastNames'>Apellidos:</label>
            <input
              name='lastNames'
              type='text'
              placeholder='Apellidos'
              required
              onChange={(event) => setLastNames(event.target.value)}
            />

            <label htmlFor='idIest'>ID IEST:</label>
            <input
              name='idIest'
              type='number'
              min='1'
              required
              onChange={(event) => setIdIest(event.target.value)}
            />

            <label htmlFor='email'>Correo Institucional::</label>
            <input
              name='email'
              type='email'
              placeholder='Correo IEST'
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor='bachelor'>Carrera:</label>
            <input
              name='bachelor'
              type='text'
              placeholder='Carrera'
              required
              onChange={(event) => setBachelor(event.target.value)}
            />  

            <label for="imagen">Adjuntar imagen/archivo:</label>
            <input type="file" id="imagen" name="imagen" />

            <input type="submit" value="Aplicar"/>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
