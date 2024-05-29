const mongoose = require("../conexionBD/conexionBD");


//Ubicaciones
const UbicacionSchema = new mongoose.Schema({
    idUbicacion: { type: Number },
    nombreUbicacion: { type: String, required: true },
    codigoUbicacion: { type: String, required: true, unique: true },
    sedes: { type: mongoose.Schema.Types.ObjectId, ref: 'Sede' }
});

// Model-Ubicaciones
module.exports = mongoose.model('Ubicacion', UbicacionSchema);
