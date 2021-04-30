const categoriaModel = require('../modelos/categoria.model');

module.exports = {

    //CRUD PARA CATEGORIA
    crear: (req, res) => {
        let body = req.body;

        let datos = new categoriaModel({
            nombre: body.nombre,
            descripcion: body.descripcion,

        })

        //Guardar en la base de datos
        datos.save((err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: info });
        })
    },

    leer: (req, res) => {
        //Buscar en la base de datos asc = ascendente desc= descendente
        categoriaModel.find()
            .sort({ nombre: 'asc' })
            .exec((err, info) => {
                if (err) return res.send({ ok: false, message: err })
                return res.send({ ok: true, message: info });
            })

    },
    leerPorID: (req, res) => {
        let id = req.params.id;
        //console.log(id)
        categoriaModel.findById({ _id: id }, (err, info) => {
            if (err) return res.send({ ok: false, message: err })

            if (info)
                return res.send({ ok: true, message: info });
            else
                return res.send({ ok: false, message: 'No se encontro Categoria' })
        })

    },
    actualizar: (req, res) => {
        let id = req.params.id;
        let body = req.body;

        let datos = {
            nombre: body.nombre,
            descripcion: body.apellido,

        }

        //Actualizar categoria
        categoriaModel.findByIdAndUpdate(id, datos, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: false, message: 'Actualizacion Correcta' })

        })
    },
    eliminar: (req, res) => {
        let id = req.params.id;

        // Eliminar categoria
        categoriaModel.findByIdAndDelete(id, {}, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: `Categoria ${info.nombre}  Eliminado` })

        })
    }

}
