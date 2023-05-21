const express = require('express');
const EventsController = require('./controllers/EventsController');
const SubjectsController = require('./controllers/SubjectsController');
const MembersController = require('./controllers/MembersController');
const AdministratorController = require('./controllers/AdministratorsController');
const RemovedMembersController = require('./controllers/RemovedMembersController');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send({ status: 200, message: 'CONNECTED!' });
});

routes.get('/members', MembersController.getAllMembers);
routes.post('/members', MembersController.createMember);
routes.get('/members/:id', MembersController.getMemberById);
routes.put('/members/:email', MembersController.updateProfilePicture);
routes.delete('/members/:id', MembersController.removeMember);

routes.get('/removed-members', RemovedMembersController.getAllRemovedMembers);
routes.delete('/removed-members/:id', RemovedMembersController.restoreMember);

routes.get('/events', EventsController.getAllEvents);
routes.post('/events', EventsController.createEvent);
routes.get('/events/:eventId', EventsController.getEventById);
routes.put('/events/:eventId/attendees/', EventsController.registerAttendee);
routes.put(
  '/events/:eventId/attendees/:memberId',
  EventsController.registerAttendance
);
routes.put(
  '/events/:eventId/attendees/false/:memberId',
  EventsController.removeAttendance
);
routes.put(
  '/events/:eventId/attendees/remove/:memberId',
  EventsController.removeAttendee
);
routes.get('/events/gen/:gen', EventsController.getEventsByGen);
routes.get('/progress/gen/:gen', EventsController.getObligatoryEventsByGen);
routes.get('/events/all/attendees/:memberId', EventsController.getAttendance);
routes.get(
  '/events/all/attendees/:memberId/points',
  EventsController.calcPoints
);

routes.get('/subjects', SubjectsController.getAllSubjects);
routes.post('/subjects', SubjectsController.createSubject);
routes.get('/subjects/gen/:gen', SubjectsController.getSubjectsByGen);

routes.get('/admins', AdministratorController.getAllAdministrators);
routes.post('/admins', AdministratorController.createAdministrator);
routes.get('/admins/:id', AdministratorController.getAdminById);
routes.get('/admins/email/:email', AdministratorController.getAdminByEmail);

module.exports = routes;
