var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: String
})

module.exports = mongoose.model('Categorias', categoriaSchema);