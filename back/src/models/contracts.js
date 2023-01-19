const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const contractSchema = new Schema({
    name: { type: String, required: true },
    lastName1: { type: String },
    lastName2: { type: String },
    documentType: {type: String, enum: ['DNI', 'NIF', "NIE", "CIF"], required: true},
    document: {type: Number, required: true},
    postalCode: { type: String },
    location: { type: String },
    address: { type: String },
    phone: { type: Number, required: true },
}
);



module.exports = mongoose.model('Contract', contractSchema);

