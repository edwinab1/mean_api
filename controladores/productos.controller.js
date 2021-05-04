const ProductoModel = require('../modelos/producto.model');

module.exports = {

    //CRUD PARA CATEGORIA
    crear: (req, res) => {
        let body = req.body;

        console.log(body);

        // categoria: { type: Schema.Types.ObjectId, ref: 'Categorias', required: true },
        // nombre: { type: String, required: true },
        // description: { type: String, required: false },
        // precio_unitario: { type: Number, required: true, min: 0 },
        // estado: { type: Boolean, required: true, default: true },
        // stock_minimo: { type: Number, required: true },
        // imagen: { type: String, required: false }


        let datos = new ProductoModel({
            categoria: body.categoria,
            nombre: body.nombre,
            descripcion: body.descripcion,
            precio_unitario: body.precio_unitario,
            stock_minimo: body.stock_minimo,
            imagen: body.imagen,

        })

        //Guardar en la base de datos
        datos.save((err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: info });
        })
    },

    leer: (req, res) => {
        //Buscar en la base de datos asc = ascendente desc= descendente
        ProductoModel.find()
            .sort({ nombre: 'asc' })
            .populate('categoria', 'nombre -_id')
            .exec((err, info) => {
                if (err) return res.send({ ok: false, message: err })
                return res.send({ ok: true, message: info });
            })

    },
    leerPorID: (req, res) => {
        let id = req.params.id;
        //console.log(id)
        ProductoModel.findById({ _id: id }, (err, info) => {
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
        let datos = new ProductoModel({
            categoria: body.categoria,
            nombre: body.nombre,
            descripcion: body.descripcion,
            precio_unitario: body.precio_unitario,
            stock_minimo: body.stock_minimo,
            imagen: body.imagen,

        })


        //Actualizar
        ProductoModel.findByIdAndUpdate(id, datos, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: false, message: 'Actualizacion Correcta' })

        })
    },
    eliminar: (req, res) => {
        let id = req.params.id;
        console.log(id)
        // Eliminar 
        ProductoModel.findByIdAndDelete(id, {}, (err, info) => {
            if (err) return res.send({ ok: false, message: err })
            return res.send({ ok: true, message: `Producto ${info.nombre}  Eliminado` })

        })
    }

}
