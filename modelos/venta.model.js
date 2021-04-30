var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventasSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, required: true, ref: 'Usuarios' },
    cliente: { type: Schema.Types.ObjectId, required: true, ref: 'Clientes' },
    detalleVenta: [
        {
            producto: { type: Schema.Types.ObjectId, ref: 'Productos' },
            cantidad: { type: Number, required: true, min: 0 },
            precio_unitario: { type: Number, required: true, min: 0 },
            total: { type: Number, required: true },
        }
    ],
    subTotal: { type: Number, required: true },
    descuento: { type: Number, required: true },
    total: { type: Number, required: true, min: 0 },
    fecha_venta: { type: Date, required: true, default: Date.now },
})

module.exports = mongoose.model('Ventas', ventasSchema);