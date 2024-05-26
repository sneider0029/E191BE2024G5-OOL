const mongoose = require("../conexionBD/conexionBD");


// Sedes
const SedeSchema = new mongoose.Schema({
    idSede: { type: Number, required: true },
    nombreSede: { type: String, required: true },
    direccionSede: { type: String, required: true }
});

// Model-Sedes
module.exports = mongoose.model("Sede", SedeSchema);