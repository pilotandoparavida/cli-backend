const express = require('express');
let path_controller = 'react-controller'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    path_controller = 'react-controller-dev';
} 
const {AlunoController, AlunoTurmaController, NegarInscricaoController, AceitarInscricaoController, LoginController} = require(path_controller);
const routes = express.Router();

routes.get('/', (req, res) =>{
    res.status(404).send("Backend para versão cliente do Pilotando Para Vida!");
});
routes.post('/aluno/cadastro', AlunoController.store); 

routes.get('/aluno/turma', AlunoTurmaController.show);

routes.get('/aluno/turma/negar', NegarInscricaoController.store);
routes.get('/aluno/turma/aceitar', AceitarInscricaoController.store);

routes.get('/login', LoginController.show);

module.exports = routes;