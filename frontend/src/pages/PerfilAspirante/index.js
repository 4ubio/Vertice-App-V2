import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import './Perfil.scss';

const PerfilAspirante = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='profile-container2'>
        <div className='profile-container2__box--info'>
          <p className='profile-container2__box--info--bold'>Mi perfil</p>
          <img alt='profile-pic' src={localStorage.getItem('imageUrl')} />
          <p className='profile-container2__box--info--bold'>Aspirante</p>
          <p>
            {localStorage.getItem('name')} {localStorage.getItem('lastNames')}
          </p>
          <p className='profile-container2__box--info--bold'>Carrera</p>
          <p>{localStorage.getItem('bachelor')}</p>
        </div>
        <div className='profile-container2__box--points'>
          <h1>Actualizaciones sobre tu solicitud:</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PerfilAspirante;
