import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../Skills/Skills.scss';

const Subjects = () => {
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
            <tr>
              <td>Materia 1</td>
              <td className='complete'>Aprobada</td>
              <td className='complete'>10.0</td>
            </tr>
            <tr>
              <td>Materia 2</td>
              <td>Cursando</td>
              <td></td>
            </tr>
            <tr>
              <td>Materia 3</td>
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

export default Subjects;