import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './Applications.scss';

const Applications = () => {
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
        <h2>Solicitudes</h2>
        <table className="table-data">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Carrera</th>
              <th scope="col">Correo institucional</th>
              <th scope="col">Archivo adjunto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>John Doe</td>
              <td>Computer Science</td>
              <td>johndoe@example.com</td>
              <td><a href="#">Download</a></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jane Smith</td>
              <td>Electrical Engineering</td>
              <td>janesmith@example.com</td>
              <td><a href="#">Download</a></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Bob Johnson</td>
              <td>Business Administration</td>
              <td>bjohnson@example.com</td>
              <td><a href="#">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
