const express = require('express');
const router = express.Router();

const ventasControlador = require('../controladores/ventas.controller');

router
    .get('/', ventasControlador.leer)
    .get('/leerPorID/:id', ventasControlador.leerPorID)
    .post('/crear', ventasControlador.crear)
    .put('/actualizar/:id', ventasControlador.actualizar)
    .delete('/eliminar/:id', ventasControlador.eliminar)
    .all('', (req, res) => {
        res.send('No existe esta ruta')
    })
    


module.exports = router;
