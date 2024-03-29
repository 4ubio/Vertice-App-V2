import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import './Skills.scss';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState(null);

  const fetchSkills = async () => {
    const response = await api.get(
      `/skills/gen/${localStorage.getItem("gen")}`
    );
    const skillsFetched = response.data;
    console.log(response);
    setSkills(skillsFetched);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <div className='container-skills'>
          <h2>Competencias desarrolladas</h2>
          <h2 className='percentage'>50%</h2>
        </div>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Competencia</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {skills ? (
                skills.map((skill) => (
                <tr key={skill._id}>
                    <td> {skill.title} </td>
                    <td> Pendiente </td>
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

export default Skills;