import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './Skills.scss';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //creo que aqui hay que poner un timeout
  useEffect(() => {
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
            <tr>
              <td>Competencia 1</td>
              <td className='complete'>Completada</td>
            </tr>
            <tr>
              <td>Competencia 1</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <td>Competencia 1</td>
              <td className='complete'>Completada</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Skills;