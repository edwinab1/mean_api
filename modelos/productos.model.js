var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    categoria: { type: Schema.Types.ObjectId, ref: 'Categorias', required: true },
    nombre: { type: String, required: true },
    description: { type: String, required: false },
    precio_unitario: { type: Number, required: true, min: 0 },
    estado: { type: Boolean, required: true, default: true },
    stock_minimo: { type: Number, required: true },
    imagen: { type: String, required: false }

})

module.exports = mongoose.model('Productos', productoSchema);