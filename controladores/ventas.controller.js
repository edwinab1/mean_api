const VentasModel = require('../modelos/venta.model');

module.exports = {

    //CRUD PARA CATEGORIA
    crear: (req, res) => {
        let body = req.body;

        let datos = new VentasModel({
            usuario: body.usuario,
            cliente: body.cliente,
            detalleVenta: body.detalleVenta,
            subTotal: body.subTotal,
            descuento: body.descuento,
            total: body.total

        })

        //Guardar en la base de datos
        datos.save((err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: info });
        })
    },

    leer: (req, res) => {
        //Buscar en la base de datos asc = ascendente desc= descendente
        VentasModel.find()
            .sort({ nombre: 'asc' })
            .populate('usuario', 'nombre -_id')
            .populate('cliente', 'nombre apellido ci_nit telefono -_id')
            .populate('detalleVenta.producto', 'nombre -_id')
            .exec((err, info) => {
                if (err) return res.send({ ok: false, message: err })
                return res.send({ ok: true, message: info });
            })

    },
    leerPorID: (req, res) => {
        let id = req.params.id;
        //console.log(id)
        VentasModel.findById({ _id: id }, (err, info) => {
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

        let datos = new VentasModel({
            usuario: body.usuario,
            cliente: body.cliente,
            detalleVenta: body.detalleVenta,
            subTotal: body.subTotal,
            descuento: body.descuento,
            total: body.total

        })
        //Actualizar
        VentasModel.findByIdAndUpdate(id, datos, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: false, message: 'Actualizacion Correcta' })

        })
    },
    eliminar: (req, res) => {
        let id = req.params.id;
        console.log(id)
        // Eliminar 
        VentasModel.findByIdAndDelete(id, {}, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: `Venta ${info_._id}  Eliminado` })

        })
    }

}
