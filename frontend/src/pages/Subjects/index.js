import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import '../Skills/Skills.scss';

const Subjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState(null);

  const fetchSubjects = async () => {
    const response = await api.get(
      `/subjects/gen/${localStorage.getItem("gen")}`
    );
    const subjectsFetched = response.data;
    console.log(response);
    setSubjects(subjectsFetched);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <h2>Materias</h2>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Materia</th>
              <th scope="col">Status</th>
              <th scope="col">Calificación</th>
            </tr>
          </thead>
          <tbody>
            {subjects ? (
                  subjects.map((subject) => (
                  <tr key={subject._id}>
                      <td> {subject.title} </td>
                      <td> No cursada </td>
                      <td> No registro </td>
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

export default Subjects;