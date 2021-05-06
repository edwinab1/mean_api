const express = require('express');
const router = express.Router();

const productosControlador = require('../controladores/productos.controller');

router
    .get('/', productosControlador.leer)
    .get('/leerPorID/:id', productosControlador.leerPorID)
    .post('/crear', productosControlador.crear)
    .put('/editar/:id', productosControlador.actualizar)
    .delete('/eliminar/:id', productosControlador.eliminar)
    .all('', (req, res) => {
        res.send('No existe esta ruta')
    })
    


module.exports = router;
