const express = require('express')
const routes = express.Router()
const CondominioController = require('./controllers/condomino')
const AchadoController = require('./controllers/achado')


//Rota busca todos os condominio registrado
routes.get('/condominio',CondominioController.buscarTodosCondominios)
//Rota busca pelo id os condominio registrado
routes.get('/condominio/:id',CondominioController.buscarCondominio)
//Rota atualiza um condominio pelo id
routes.put('/condominio/:id',CondominioController.atualizandoCondominio)
//Rota registra um condominio no banco
routes.post('/condominio',CondominioController.adicionarCondominio)
//Rota deleta um condominio do banco
routes.delete('/condominio/:id',CondominioController.deltarCondominio)
//Rota registra um achado e perdido  no banco
routes.post('/achado',AchadoController.adicionarAchado)
//Rota busca todos os condominio registrado
routes.get('/achado',AchadoController.buscarTodosAchados)
//Rota atualiza um achado pelo id
routes.get('/achado/:id',AchadoController.buscarAchadoCondominio)
//Rota atualiza um achado pelo id
routes.put('/achado/:id',AchadoController.atualizandoAchado)
//Rota deleta um achado do banco
routes.delete('/achado/:id',AchadoController.deltarAchadoLista)

module.exports=routes