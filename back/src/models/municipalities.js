const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const municipalitiSchema = new Schema({
    codigo_postal: {type: String},
    municipio_id: {type: String},
    municipio_nombre: {type: String},
},
    { timestamps: true, capped: true, size: 100000} 
);

module.exports = mongoose.model('Municipaliti', municipalitiSchema);