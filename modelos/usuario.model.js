var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roles = ['ADMIN', 'VENDEDOR', 'CONTADOR'];

var usuarioSchema = new Schema({
    nombre:         { type: String, required: true },
    apellido:       { type: String, required: true },
    telefono:       { type: Number, required: false },
    correo:         { type: String, required: false },
    estado:         { type: Boolean, required: true, default: true },
    imagen:         { type: String, required: false },
    nombre_usuario: { type: String, required: true },
    password:       { type: String, required: true },
    rol:            { type: String, required: true, enum: roles }

})

module.exports = mongoose.model('Usuarios', usuarioSchema);