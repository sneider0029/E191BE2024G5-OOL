const mongoose = require("../conexionBD/conexionBD");


// Sedes
const SedeSchema = new mongoose.Schema({
    idSede: { type: Number, required: true },
    nombreSede: { type: String, required: true },
    direccionSede: { type: String, required: true },
    ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion' },
    consultorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Consultorio' }]
});

// Model-Sedes
module.exports = mongoose.model("Sede", SedeSchema);