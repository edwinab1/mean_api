var clienteModel = require('../modelos/cliente.model');


module.exports = {

    //CRUD PARA CLIENTE

    crear: (req, res) => {
        let cliente = req.body;

        let datos = new clienteModel({
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            ci_nit: cliente.ci_nit,
            direccion: cliente.direccion,
            telefono: cliente.telefono

        })

        //Guardar en la base de datos
        datos.save((err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: info });
        })


    },

    leer: (req, res) => {
        //Buscar en la base de datos asc = ascendente desc= descendente
        clienteModel.find()
            .sort({ nombre: 'asc' })
            .exec((err, info) => {
                if (err) return res.send({ ok: false, message: err })
                return res.send({ ok: true, message: info });
            })

    },
    leerPorID: (req, res) => {
        let id = req.params.id;
        //console.log(id)
        clienteModel.findById({ _id: id }, (err, info) => {
            if (err) return res.send({ ok: false, message: err })

            if (info)
                return res.send({ ok: true, message: info });
            else
                return res.send({ ok: false, message: 'No se encontro al Cliente' })
        })

    },
    actualizar: (req, res) => {
        let id = req.params.id;
        let cliente = req.body;

        let datos = {
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            ci_nit: cliente.ci_nit,
            direccion: cliente.direccion,
            telefono: cliente.telefono
        }

        //Actualizar cliente
        clienteModel.findByIdAndUpdate(id, datos, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: false, message: 'Actualizacion Correcta' })

        })
    },
    eliminar: (req, res) => {
        let id = req.params.id;

        // Eliminar cliente
        clienteModel.findByIdAndDelete(id, {}, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: `Cliente ${info.nombre}  Eliminado` })

        })
    }

}
