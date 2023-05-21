import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AdminEvents from './pages/Dashboard/adminEvents';
import Events from './pages/Events';
import Members from './pages/Members';
import DeletedMembers from './pages/DeletedMembers';
import NewEvent from './pages/NewEvent';
import Attendance from './pages/Attendance';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import MemberAttendance from './pages/MemberAttendance';
import Apply from './pages/Apply';
import Applications from './pages/Applications';
import Skills from './pages/Skills';
import Subjects from './pages/Subjects';
import Progress from './pages/Progress';
import Points from './pages/Points';
import AdminSubjects from './pages/AdminSubjects';
import NewSubject from './pages/NewSubject';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/eventos' element={<Events />} />
        <Route path='/mi-perfil' element={<Perfil />} />
        <Route path='/asistencias' element={<MemberAttendance />} />
        <Route path='/competencias' element={<Skills />} />
        <Route path='/materias' element={<Subjects />} />
        <Route path='/avance' element={<Progress />} />
        <Route path='/puntaje' element={<Points />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/eventos' element={<AdminEvents />} />
        <Route
          path='/dashboard/eventos/:eventId/asistencias/'
          element={<Attendance />}
        />
        <Route path="/aplicar" element={<Apply />} />
        <Route path="/dashboard/solicitudes" element={<Applications />} />
        <Route path='/dashboard/miembros' element={<Members />} />
        <Route path='/dashboard/miembros-eliminados' element={<DeletedMembers />} />
        <Route path='/dashboard/nuevo-evento' element={<NewEvent />} />
        <Route path='/dashboard/materias' element={<AdminSubjects />} />
        <Route path='/dashboard/nueva-materia' element={<NewSubject />} />
        <Route path='/register/:eventId' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
