const express = require('express');
const router = express.Router();

const categoriaControlador = require('../controladores/categorias.controller');

router
    .get('/', categoriaControlador.leer)
    .get('/leerPorID/:id', categoriaControlador.leerPorID)
    .post('/crear', categoriaControlador.crear)
    .put('/actualizar/:id', categoriaControlador.actualizar)
    .delete('/eliminar/:id', categoriaControlador.eliminar)


module.exports = router;
