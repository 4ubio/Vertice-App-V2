import React, {useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import './NewMembers.scss';




const ManageMembers = ({eventData=null}) => {
  const [members, setMembers] = useState([]);
  const [degree, setDegree] = useState('');
  const [memberForm, setMemberForm] = useState({
    name: '',
    idIest: '',
    email: '',
    gen: '',
    degree: '',
    plan:''
  });

  useEffect(() => {
    if (eventData) {
      setDegree(eventData.degree);
    }
  }, [eventData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    setMembers([...members, memberForm]);
    setMemberForm({ name: '', lastNames: '', idIest: '', email: '', gen: '', plan: '' });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/members/bulk', { members });
      if (response.data) {
        alert('Miembros agregados con éxito');
        setMembers([]);
      }
    } catch (error) {
      console.error('Error al agregar miembros', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='manage-members'>
        <h1>Agregar Nuevos Miembros</h1>
        <input name="name" placeholder="Nombre Completo" value={memberForm.name} onChange={handleChange} />
        <input name="idIest" placeholder="ID Iest" value={memberForm.idIest} onChange={handleChange} />
        <input name="email" placeholder="Email" value={memberForm.email} onChange={handleChange} />
        <input name="gen" placeholder="Generación" value={memberForm.gen} onChange={handleChange} />
        <select
            htmlFor='degree'
            value={memberForm.degree}
            onChange={(event) => setDegree(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Aula Virtual Ciencias de la Salud'>
              Aula Virtual Ciencias de la Salud
            </option>
          </select>
        <input name="plan" placeholder="Plan" value={memberForm.plan} onChange={handleChange} />
        <button className='NewMembersBotton' onClick={handleAddMember}>Agregar a la Lista</button>
        <table>
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>ID IEST</th>
              <th>Email</th>
              <th>Generación</th>
              <th>Carrera</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.idIest}</td>
                <td>{member.email}</td>
                <td>{member.gen}</td>
                <td>{member.degree}</td>
                <td>{member.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='NewMembersBotton' onClick={handleSubmit}>Registrar Todos los Miembros</button>
      </div>
    </div>
  );
};

export default ManageMembers;
