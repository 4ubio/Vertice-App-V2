import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import './NewMembers.scss';

const ManageMembers = ({memberData = null}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [idIest, setIdIest] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');
  const [bachelor, setBachelor] = useState('');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (memberData) {
      setId(memberData._id);
      setName(memberData.name);
      setLastNames(memberData.lastNames);
      setIdIest(memberData.idIest);
      setEmail(memberData.email);
      setGen(memberData.gen);
      setBachelor(memberData.bachelor);
      setMembers(memberData.members);
    }
  }, [memberData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      name,
      lastNames,
      idIest,
      email,
      gen,
      bachelor
    );
    const data = {
      name: name,
      lastNames: lastNames,
      idIest: idIest,
      email: email,
      gen: gen,
      bachelor: bachelor,
    }
    const confirmation = window.confirm("¿Confirmas que la información es correcta?")
    if (confirmation == true) {
      const response = await api.post('/members', data);
      alert(`Alumno agregados exitosamente`);
      window.location.reload();
    }
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='manage-members'>
        <h1>Agregar Nuevos Miembros</h1>
        <form onSubmit={handleSubmit} className='manage-members'>
        <input name="name" type="text" required placeholder="Nombre(s)" value={name}
         onChange={(event) => setName(event.target.value)} />
        <input name="lastNames" type="text" required placeholder="Apellidos" value={lastNames}
         onChange={(event) => setLastNames(event.target.value)} />
        <input name="idIest" type="text" required placeholder="ID Iest" value={idIest}
         onChange={(event) => setIdIest(event.target.value)} />
        <input name="email" type="text" required placeholder="Email" value={email}
         onChange={(event) => setEmail(event.target.value)} />
        <input name="gen" type="text" required placeholder="Generación" value={gen}
         onChange={(event) => setGen(event.target.value)} />
        <input name="bachelor" type="text" required placeholder="Código (carrera-plan)" value={bachelor}
         onChange={(event) => setBachelor(event.target.value)} />
        <button type='submit' className='manage-members_btn'>Registrar Miembro</button>
        </form>
      </div>
    </div>
  );
};

export default ManageMembers;