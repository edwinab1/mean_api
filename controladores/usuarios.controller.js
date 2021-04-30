const UsuarioModel = require('../modelos/usuario.model');
const bcrypt = require('bcrypt');

module.exports = {

    //CRUD PARA Usuarios
    crear: (req, res) => {
        let body = req.body;

        let datos = new UsuarioModel({
            nombre: body.nombre,
            apellido: body.apellido,
            telefono: body.telefono,
            correo: body.correo,
            imagen: body.imagen,
            nombre_usuario: body.nombre_usuario,
            password: bcrypt.hashSync(body.password, 10),
            rol: body.rol

        })

        //Guardar en la base de datos
        datos.save((err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: info });
        })
    },

    leer: (req, res) => {
        //Buscar en la base de datos asc = ascendente desc= descendente
        UsuarioModel.find()
            .sort({ apellido: 'asc' })
            .exec((err, info) => {
                if (err) return res.send({ ok: false, message: err })
                return res.send({ ok: true, message: info });
            })

    },
    leerPorID: (req, res) => {
        let id = req.params.id;
        //console.log(id)
        UsuarioModel.findById({ _id: id }, (err, info) => {
            if (err) return res.send({ ok: false, message: err })

            if (info)
                return res.send({ ok: true, message: info });
            else
                return res.send({ ok: false, message: 'No se encontro Usuario' })
        })

    },
    actualizar: (req, res) => {
        let id = req.params.id;
        let body = req.body;

        let datos = new UsuarioModel({
            nombre: body.nombre,
            apellido: body.apellido,
            telefono: body.telefono,
            correo: body.correo,
            imagen: body.imagen,
            nombre_usuario: body.nombre_usuario,
            password: body.password,
            rol: body.rol

        })

        //Actualizar categoria
        UsuarioModel.findByIdAndUpdate(id, datos, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: false, message: 'Actualizacion Correcta' })

        })
    },
    eliminar: (req, res) => {
        let id = req.params.id;

        // Eliminar categoria
        UsuarioModel.findByIdAndDelete(id, {}, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: `Usuario ${info.nombre}  Eliminado` })

        })
    }

}
