import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import '../Skills/Skills.scss';

const AdminSubjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchsubjects = async () => {
    const response = await api.get('/subjects');
    const subjectsFetched = response.data;
    console.log(response);
    setSubjects(subjectsFetched);
  };

  useEffect(() => {
    fetchsubjects();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <a href='/dashboard/nueva-materia' className='newButton'>Crear nueva</a>
        <h2>Materias</h2>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Materia</th>
              <th scope="col">Generaciones</th>
            </tr>
          </thead>
          <tbody>
            {subjects ? (
                subjects.map((subject) => (
                <tr key={subject._id}>
                    <td> {subject.title} </td>
                    <td> {subject.generation.join(", ")} </td>
                </tr>
                ))
            ) : (
                <h2>No subjects</h2>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default AdminSubjects;