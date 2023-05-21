import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../Skills/Skills.scss';

const Progress = () => {
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
        <h2>Avance reticular</h2>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Avance o Materia</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Taller 1 obligatorio</td>
              <td className='complete'>Completado</td>
            </tr>
            <tr>
              <td>Taller 2 obligatorio</td>
              <td>Pendiente</td>
              <td></td>
            </tr>
            <tr>
              <td>Evento 1 obligatorio</td>
              <td>Pendiente</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Progress;