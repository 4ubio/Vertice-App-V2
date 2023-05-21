import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import '../NewEvent/NewEvent.scss';

const NewSkill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [generation, setGeneration] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGenerationOptions = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    let selectedOptions = value;
    setGeneration(selectedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      title,
      generation
    );
    const response = await api.post('/skills', {
      title: title,
      generation: generation
    });
    console.log(response.data);
    alert('Competencia creada exitosamente.');
    window.location.reload();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />{' '}
      <div className='new-event'>
        <h1>Nueva Competencia</h1>
        <form onSubmit={handleSubmit} className='new-event__form'>
          <label htmlFor='title'>Nombre de la competencia</label>
          <input
            name='title'
            type='text'
            placeholder='Nombre de la competencia'
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          
          <label htmlFor='generation'>Generación Vértice</label>
          <select
            name='generation'
            multiple
            onChange={(event) => handleGenerationOptions(event)}
            required
          >
            <option value='1'>Primera</option>
            <option value='2'>Segunda</option>
            <option value='3'>Tercera</option>
            <option value='4'>Cuarta</option>
            <option value='5'>Quinta</option>
          </select>

          <button type='submit'>Crear Competencia</button>
        </form>
      </div>
    </>
  );
};

export default NewSkill;
