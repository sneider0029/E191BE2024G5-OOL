const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E191?retryWrites=true&w=majority&appName=UTS")
.then(() => console.log("Conectando a mongo"))
.catch(error => console.log(error));

// Consultorios
const ConsultorioSchema = new mongoose.Schema({
    idConsultorio: { type: Number, required: true },
    codigoConsultorio: { type: String, required: true, unique: true },
    descripcionConsultorio: { type: String, required: true }
});
// Model-Consultorios
module.exports = mongoose.model('Consultorio', ConsultorioSchema);