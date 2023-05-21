import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../Skills/Skills.scss';

const Points = () => {
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
          <h2>Puntos actuales</h2>
          <h2 className='percentage'>/40</h2>
        </div>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">Semestre</th>
              <th scope="col">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semestre 1</td>
              <td className='complete'>40</td>
            </tr>
            <tr>
              <td>Semestre 2</td>
              <td className='complete'>50</td>
            </tr>
            <tr>
              <td>Semestre 3</td>
              <td className='complete'>40</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Points;