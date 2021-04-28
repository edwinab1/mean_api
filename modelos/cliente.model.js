var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    ci_nit: { type: String, required: true },
    direccion: String,
    telefono: Number,
    estado: Boolean,
    fecha_creacion: { Type: Date, default: Date.now }
})

module.exports = mongoose.model('Clientes', clienteSchema);