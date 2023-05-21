import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from "../../services/api.js";
import '../Skills/Skills.scss';

const Progress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    const response = await api.get(
      `/progress/gen/${localStorage.getItem("gen")}`
    );
    const eventsFetched = response.data;
    console.log(response);
    setEvents(eventsFetched);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //creo que aqui hay que poner un timeout
  useEffect(() => {
    fetchEvents();
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
            {events ? (
              events.map((event) => (
                <tr key={event._id}>
                  <td> {event.title} </td>
                  <td>Pendiente</td>
                </tr>
              ))
            ) : (
              <h2>No Events</h2>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Progress;