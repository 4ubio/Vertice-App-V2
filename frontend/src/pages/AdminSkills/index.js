import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import '../Skills/Skills.scss';

const AdminSkills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchskills = async () => {
    const response = await api.get('/skills');
    const skillsFetched = response.data;
    console.log(response);
    setSkills(skillsFetched);
  };

  useEffect(() => {
    fetchskills();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <a href='/dashboard/nueva-competencia' className='newButton'>Crear nueva</a>
        <h2>Competencias</h2>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Competencia</th>
              <th scope="col">Generaciones</th>
            </tr>
          </thead>
          <tbody>
            {skills ? (
                skills.map((skill) => (
                <tr key={skill._id}>
                    <td> {skill.title} </td>
                    <td> {skill.generation.join(", ")} </td>
                </tr>
                ))
            ) : (
                <h2>No skills</h2>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default AdminSkills;