const express = require('express');
const router = express.Router();

const usuariosControlador = require('../controladores/usuarios.controller');

router
    .get('/', usuariosControlador.leer)
    .get('/leerPorID/:id', usuariosControlador.leerPorID)
    .post('/crear', usuariosControlador.crear)
    .put('/actualizar/:id', usuariosControlador.actualizar)
    .delete('/eliminar/:id', usuariosControlador.eliminar)
    .all('', (req, res) => {
        res.send('No existe esta ruta')
    })
    


module.exports = router;
