import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import "./index.scss";

const Edituser = (props) => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  console.log("window.");
  const fetchUser = async () => {
    try {
      const response = await api.get(`/members/${params.userId}`);
      const userData = response.data;
      console.log(response);
      setUser(userData);
    } catch (error) {}
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Handle form submission logic here
      const res = await api.patch(`/members/${params.userId}`, {
        ...user
      });
      console.log("res", res);
      alert('Usuario actualizado')
      window.location.replace('/dashboard/miembros')
    } catch (error) {
        alert('Error updating the user. Please contact')
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <h2>Editar Miembro</h2>
        <div className="edit-member">
          <div>
            {!!user && <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="lastNames">Apellido:</label>
              <input
                type="text"
                id="lastNames"
                name="lastNames"
                value={user.lastNames}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="idIest">ID IEST:</label>
              <input
                type="number"
                id="idIest"
                name="idIest"
                value={user.idIest}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="gen">Generación:</label>
              <input
                type="text"
                id="gen"
                name="gen"
                value={user.gen}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="bachelor">Carrera:</label>
              <input
                type="text"
                id="bachelor"
                name="bachelor"
                value={user.bachelor}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label htmlFor="strikes">Strikes:</label>
              <select
                id="strikes"
                name="strikes"
                value={user.strikes}
                onChange={handleChange}
                required
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <br />
              <br />

              <label htmlFor="estado">Estado:</label>
              <select
                id="status"
                name="status"
                value={user.status || "1"}
                onChange={handleChange}
                required
              >
                <option value="1">Activo</option>
                <option value="2">Baja por promedio</option>
                <option value="3">Baja por intercambio</option>
                <option value="4">Baja por año sabático</option>
                <option value="5">Baja por cambio de campus</option>
              </select>
              <br />
              <br />

              <input type="submit" value="Submit" />
            </form>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edituser;
