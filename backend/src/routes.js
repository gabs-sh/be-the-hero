const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

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

 /**
  * Celebrate serve para validar dados
  */

 //rotas para ongs
routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) ,OngController.create)

//rotas para incidentes 
routes.post('/incidents', IncidentController.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,IncidentController.index)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}) ,IncidentController.delete)

//rotas para perfis específicos
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) ,ProfileController.index)

//rotas para session (login etc)
routes.post('/sessions', SessionController.create)

//exportando as rotas
module.exports = routes