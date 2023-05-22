import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import './Applications.scss';

const Applications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [applicants, setApplicants] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchapplicants = async () => {
    const response = await api.get('/applicants');
    const applicantsFetched = response.data;
    console.log(response);
    setApplicants(applicantsFetched);
  };

  useEffect(() => {
    fetchapplicants();
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
              <th scope="col">Correo institucional</th>
              <th scope="col">Carrera</th>
              <th scope="col">Archivo adjunto</th>
            </tr>
          </thead>
          <tbody>
            {applicants ? (
              applicants.map((applicant) => (
                <tr key={applicant._id}>
                  <td>{applicant.idIest}</td>
                  <td> {applicant.name} {applicant.lastNames} </td>
                  <td>{applicant.email}</td>
                  <td>{applicant.bachelor}</td>
                  <td>Archivo</td>
                </tr>
              ))
            ) : (
              <h2>No applicants</h2>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
