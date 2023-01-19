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

// contractSchema.plugin(autoIncrement);
// contractSchema.pre("save", function (next) {
//     let doc = this;
//     sequencing.getSequenceNextValue("user_id").
//     then(counter => {
//         console.log("asdasd", counter);
//         if(!counter) {
//             sequencing.insertCounter("user_id")
//             .then(counter => {
//                 doc._id = counter;
//                 console.log(doc)
//                 next();
//             })
//             .catch(error => next(error))
//         } else {
//             doc._id = counter;
//             next();
//         }
//     })
//     .catch(error => next(error))
// });

module.exports = mongoose.model('Contract', contractSchema);

