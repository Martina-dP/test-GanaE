const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const municipalitiSchema = new Schema({
    name: { type: String },
    postalCode: { type: Number },
    idMunicipaliti: { type: Number },
},
    { timestamps: true } 
);

module.exports = mongoose.model('Municipaliti', municipalitiSchema);