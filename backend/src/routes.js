const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

/** Tipos de parâmetros:
 * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: parâmetros utilizados para identificar recursos (':')
 * Request body:  corpo da requisição, utilizado para criar ou alterar recursos
 */



 //rotas para ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//rotas para incidentes 
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

//rotas para perfis específicos
routes.get('/profile', ProfileController.index)

//rotas para session (login etc)
routes.post('/sessions', SessionController.create)

//exportando as rotas
module.exports = routes