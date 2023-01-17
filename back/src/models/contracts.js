const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const contractSchema = new Schema({
    name: { type: String, required: true },
    lastName1: { type: String },
    lastName2: { type: String },
    document: {type: String, enum: ['Dni', 'NIF', "NIE", "CIF", "Pasaporte"]},
    postalCode: { type: Number },
    location: { type: String, required: true },
    address: { type: String },
    phone: { type: Number, required: true },
},
    { timestamps: true } 
);

module.exports = mongoose.model('Contract', contractSchema);

