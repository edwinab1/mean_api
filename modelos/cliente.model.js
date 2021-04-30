var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    ci_nit: { type: String, required: true },
    direccion: String,
    telefono: { type: Number, required: true },
    estado: { type: Boolean, default: true },
    fecha_creacion: { type: Date, required: true, default: Date.now },

})

module.exports = mongoose.model('Clientes', clienteSchema);