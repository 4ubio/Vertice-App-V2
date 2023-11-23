const express = require('express');
const EventsController = require('./controllers/EventsController');
const SubjectsController = require('./controllers/SubjectsController');
const SkillsController = require('./controllers/SkillsController');
const MembersController = require('./controllers/MembersController');
const ApplicantsController = require('./controllers/ApplicantsController');
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
routes.patch('/members/:id', MembersController.editMember);

routes.get('/removed-members', RemovedMembersController.getAllRemovedMembers);
routes.delete('/removed-members/:id', RemovedMembersController.restoreMember);

routes.get('/applicants', ApplicantsController.getAllApplicants);
routes.post('/applicants', ApplicantsController.createApplicant);
routes.get('/applicants/email/:email', ApplicantsController.getApplicantByEmail);

routes.get('/events', EventsController.getAllEvents);
routes.post('/events', EventsController.createEvent);
routes.get('/events/:eventId', EventsController.getEventById);
routes.patch('/events/:eventId', EventsController.editEvent);
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

routes.get('/skills', SkillsController.getAllSkills);
routes.post('/skills', SkillsController.createSkill);
routes.get('/skills/gen/:gen', SkillsController.getSkillsByGen);

routes.get('/admins', AdministratorController.getAllAdministrators);
routes.post('/admins', AdministratorController.createAdministrator);
routes.get('/admins/:id', AdministratorController.getAdminById);
routes.get('/admins/email/:email', AdministratorController.getAdminByEmail);

module.exports = routes;
