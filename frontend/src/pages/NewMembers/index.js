import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import './NewMembers.scss';

const ManageMembers = () => {
  const [members, setMembers] = useState([]);
  const [memberForm, setMemberForm] = useState({
    name: '',
    lastNames: '',
    idIest: '',
    email: '',
    gen: '',
    bachelor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    setMembers([...members, memberForm]);
    setMemberForm({ name: '', lastNames: '', idIest: '', email: '', gen: '', bachelor: '' });
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
        <input name="name" placeholder="Nombre" value={memberForm.name} onChange={handleChange} />
        <input name="lastNames" placeholder="Apellidos" value={memberForm.lastNames} onChange={handleChange} />
        <input name="idIest" placeholder="ID Iest" value={memberForm.idIest} onChange={handleChange} />
        <input name="email" placeholder="Email" value={memberForm.email} onChange={handleChange} />
        <input name="gen" placeholder="Generación" value={memberForm.gen} onChange={handleChange} />
        <input name="bachelor" placeholder="Carrera" value={memberForm.bachelor} onChange={handleChange} />
        <button className='NewMembersBotton' onClick={handleAddMember}>Agregar a la Lista</button>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>ID Iest</th>
              <th>Email</th>
              <th>Generación</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.lastNames}</td>
                <td>{member.idIest}</td>
                <td>{member.email}</td>
                <td>{member.gen}</td>
                <td>{member.bachelor}</td>
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
