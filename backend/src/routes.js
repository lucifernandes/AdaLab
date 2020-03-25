const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);


/** Listagem de ongs */
routes.get('/ongs', OngController.index);

/** Cadastro de ongs */
routes.post('/ongs', OngController.create);

/** Ações */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/** Perfil */
routes.get('/profile', ProfileController.index);

module.exports = routes;