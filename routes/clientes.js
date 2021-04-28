var express = require('express');
var router = express.Router();
var clienteControlador = require('../controladores/cliente.controller')
//Rutas o edpoint

//CRUD PARA CLIENTE

router
    .post('/crear', clienteControlador.crear)

    
    .get('/', (req, res) => {
        res.send('Lista de clientes')
    })
    .get('/leerPorID/:id', (req, res) => {
        console.log(req.params.id)
    })
    .put('/actualizar/:id', (req, res) => {

    })
    .delete('/eliminar/:id', (req, res) => {

    })

module.exports = router;

