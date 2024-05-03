const mongoose = require("../conexionBD/conexionBD");


// Consultorios
const ConsultorioSchema = new mongoose.Schema({
    idConsultorio: { type: Number, required: true },
    codigoConsultorio: { type: String, required: true, unique: true },
    descripcionConsultorio: { type: String, required: true }
});
// Model-Consultorios
module.exports = mongoose.model('Consultorio', ConsultorioSchema);