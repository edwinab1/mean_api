var express = require('express');
var router = express.Router();
var clienteControlador = require('../controladores/cliente.controller')
//Rutas o edpoint

//CRUD PARA CLIENTE

router
    //Crear nuevo cliente
    .post('/crear', clienteControlador.crear)
    //Leer todos los cliente
    .get('/', clienteControlador.leer)
    // Leer cliente por ID, pasar ID por parametro
    .get('/leerPorID/:id', clienteControlador.leerPorID)
    //Actualizar cliente por ID
    .put('/actualizar/:id', clienteControlador.actualizar)
    //ELiminar cliente por ID
    .delete('/eliminar/:id', clienteControlador.eliminar)

module.exports = router;

