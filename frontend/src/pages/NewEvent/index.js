import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import './NewEvent.scss';
import { Navigate } from 'react-router-dom';

const NewEvent = ({ eventData = null }) => {
  const [id, setId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [date, setDate] = useState('');
  const [availability, setAvailability] = useState(15);
  const [committee, setCommittee] = useState('');
  const [modality, setModality] = useState('');
  const [place, setPlace] = useState('');
  const [eventType, setEventType] = useState('');
  const [otherEventType, setOtherEventType] = useState('');
  const [points, setPoints] = useState(1);
  const [generation, setGeneration] = useState([]);
  const [character, setCharacter] = useState('');
  const [fileName, setFileName] = useState('');
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    if (eventData) {
      setId(eventData._id);
      setTitle(eventData.title);
      setDescription(eventData.description);
      setImg(eventData.img);
      setDate(eventData.date);
      setAvailability(eventData.availability);
      setCommittee(eventData.committee);
      setModality(eventData.modality);
      setPlace(eventData.place);
      setEventType(eventData.eventType);
      setPoints(eventData.points);
      setGeneration(eventData.generation);
      setCharacter(eventData.character);
      setCompetences(eventData.competences);
    }
  }, [eventData]);

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

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

  const handleCommitteeOptions = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    let selectedOptions = value;
    setCommittee(selectedOptions);
  };

  const generateURL = (img) => {
    let form = new FormData();
    form.set('key', "08a9fd13a05f5f19bc0fb009ae4d81c0");
    form.append('image', img);

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: form,
    });
  };

  const handleCompetencesOptions = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    let selectedOptions = value;
    setCompetences(selectedOptions);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (competences.length < 3) {
      alert('Debes seleccionar al menos 3 competencias.');
      return;
    }
    const finalEventType = eventType === 'Otro' ? otherEventType : eventType;
    console.log(
      title,
      description,
      date,
      availability,
      committee,
      modality,
      place,
      eventType,
      points,
      generation,
      character,
      competences,
    );
    const data = {
      title: title,
      description: description,
      date: date,
      status: 'Active',
      availability: availability,
      img: img,
      generation: generation,
      committee: committee,
      modality: modality,
      place: place,
      eventType: finalEventType,
      points: points,
      character: character,
      semester: 'AGO-DIC 2022',
      attendees: [],
      competences: competences,
    }
    if (id) data.id = id;
    const response = eventData ? await api.patch(`/events/${data.id}`, data) : await api.post('/events', data);
    if (response.status === 200) {
      alert(`Evento ${eventData ? 'editado' : 'creado'} exitosamente`);
      window.location.reload();
    }
    else alert(`Hubo un error al ${eventData ? 'editar' : 'crear'} el evento`);
    window.location.reload();
  };

  return (
    <>
      {!eventData && (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />{' '}
        </>
      )}
      <div className='new-event'>
        <h1>{ eventData ? 'Editar Evento' : 'Nuevo Evento' }</h1>
        <form onSubmit={handleSubmit} className='new-event__form'>
          <label htmlFor='title'>Título del evento</label>
          <input
            name='title'
            type='text'
            placeholder='Título del evento'
            required
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <label htmlFor='description'>Descripción</label>
          <textarea
            name='description'
            type='text'
            placeholder='Descripción del evento'
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>Imagen del evento</label>
          <label htmlFor='event-img' id='event-img--upload'>
            {img ? 'Cambiar Imagen' : 'Subir Imagen'}
          </label>
          <label id='event-img__name' style={{ padding: '0' }}>
            {fileName ? fileName : 'Ningun archivo seleccionado.'}
          </label>
          <input
            name='event-img'
            onChange={(e) => {
              setFileName(e.target.files[0].name);
              generateURL(e.target.files[0]).then((resp) =>
                setImg(resp.data.data.display_url)
              );
            }}
            type='file'
            id='event-img'
            accept='.jpg, .jpeg, .png'
            max-file-size='33554432'
            required={eventData ? false : true}
          />
         {!!img && <img src={img} alt='event-img' width={200}/>}
          <label htmlFor='date'>Fecha</label>
          <input
            value={date ? date.split('T')[0] : ''}
            name='date'
            type='date'
            required
            onChange={(event) => setDate(event.target.value)}
          />
          <label htmlFor='availability'>Cupo</label>
          <input
            name='availability'
            type='number'
            min='15'
            value={availability}
            required
            onChange={(event) => setAvailability(event.target.value)}
          />
          <label htmlFor='comittee'>Comité</label>
          <select
            name='comittee'
            value={committee}
            onChange={(event) => handleCommitteeOptions(event)}
            multiple
            required
          >
            <option value='Comunicación'>Comunicación</option>
            <option value='Formación'>Formación</option>
            <option value='Relaciones'>Relaciones</option>
            <option value='Investigación'>Investigación</option>
            <option value='Acción Social'>Acción Social</option>
            <option value='Proyectos'>Proyectos</option>
            <option value='Integración'>Integración</option>
            <option value='Ninguna'>N/A</option>
            <option value='Todos'>Aplican todos</option>
          </select>
          <label htmlFor='modality'>Modalidad</label>
          <select
            name='modality'
            value={modality}
            onChange={(event) => setModality(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Presencial'>Presencial</option>
            <option value='Virtual'>Virtual</option>
          </select>
          <label htmlFor='place'>Lugar</label>
          <select
            htmlFor='place'
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Aula Virtual Ciencias de la Salud'>
              Aula Virtual Ciencias de la Salud
            </option>
            <option value='Auditorio Jesus Rdz'>Auditorio Jesus Rdz</option>
            <option value='Gimnasio'>Gimnasio</option>
            <option value='Salon Duela'>Salon Duela</option>
            <option value='Salon Vinil'>Salon Vinil</option>
            <option value='Explanada ciencias de la salud'>
              Explanada ciencias de la salud
            </option>
            <option value='Salon (por definir)'>Salon (por definir)</option>
            <option value='Salon posgrado (por definir)'>
              Salon posgrado (por definir)
            </option>
            <option value='Externo al Campus'>Externo al Campus</option>
            <option value='Oficina Vértice'>Oficina Vértice</option>
            <option value='Canchas techadas'>Canchas techadas</option>
            <option value='Cancha futbol'>Cancha futbol</option>
            <option value='Capilla Universitaria'>Capilla Universitaria</option>
            <option value='Zoom'>Zoom</option>
          </select>

          <label htmlFor='event-type'>Tipo de Evento</label>
          <select
            value={eventType}
            name='event-type'
            onChange={handleEventTypeChange}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='TEA'>TEA</option>
            <option value='Taller'>Taller</option>
            <option value='V-Talk'>V-Talk</option>
            <option value='ELAP'>ELAP</option>
            <option value='Integración'>Integración</option>
            <option value='Hora Newman'>Hora Newman</option>
            <option value='Café Vértice'>Café Vértice</option>
            <option value='Café Chesterton'>Café Chesterton</option>
            <option value='Investigation Talk'>Investigation Talk</option>
            <option value='Chronicles'>Chronicles</option>
            <option value='Seminario'>Seminario</option>
            <option value='Otro'>Otro</option>
          </select>

          {eventType === 'Otro' && (
            <div>
              <label htmlFor="other-event-type">Especificar Tipo de Evento</label>
              <input
                name="other-event-type"
                type="text"
                placeholder="Especificar tipo de evento"
                onChange={(event) => setOtherEventType(event.target.value)}
                required
              />
            </div>
          )}

          <label htmlFor='points'>Puntuación</label>
          <input
            name='points'
            type='number'
            min='1'
            required
            value={points}
            onChange={(event) => setPoints(event.target.value)}
          />
          <label htmlFor='character'>De cáracter</label>
          <select
            name='character'
            onChange={(event) => setCharacter(event.target.value)}
            required
            value={character}
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Obligatorio'>Obligatorio</option>
            <option value='Opcional'>Opcional</option>
          </select>
          <label htmlFor='generation'>Generación Vértice</label>
          <select
            value={generation}
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
            <option value='6'>Sexta</option>
          </select>

          <label htmlFor='competences'>Competencias</label>
          <select
            name='competences'
            value={competences}
            onChange={(event) => handleCompetencesOptions(event)}
            multiple
            required
          >
            <option value='Autoconocimiento y sentido de vida'>Autoconocimiento y sentido de vida</option>
            <option value='Conocimiento profesional y técnico'>Conocimiento profesional y técnico</option>
            <option value='Conocimiento social'>Conocimiento social</option>
            <option value='Comunicación'>Comunicación</option>
            <option value='Análisis'>Análisis</option>
            <option value='Flexibilidad'>Flexibilidad</option>
            <option value='Innovación'>Innovación</option>
            <option value='Negociación'>Negociación</option>
            <option value='Planeación Estratégica'>Planeación Estratégica</option>
            <option value='Servicio'>Servicio</option>
            <option value='Solución de problemas'>Solución de problemas</option>
            <option value='Toma de decisión'>Toma de decisión</option>
            <option value='Trabajo en Equipo'>Trabajo en Equipo</option>
            <option value='Pensamiento Crítico'>Pensamiento Crítico</option>
            <option value='Investigación'>Investigación</option>
            <option value='Proactividad'>Proactividad</option>
          </select>

          <button type='submit'>
            {eventData ? 'Editar Evento' : 'Crear Evento'}
          </button>
        </form>
      </div>
    </>
  );
};

export default NewEvent;
