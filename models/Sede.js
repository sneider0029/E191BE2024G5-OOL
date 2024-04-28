const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E191?retryWrites=true&w=majority&appName=UTS")
.then(() => console.log("Conectando a mongo"))
.catch(error => console.log(error));


// Sedes
const SedeSchema = new mongoose.Schema({
    idSede: { type: Number, required: true },
    nombreSede: { type: String, required: true },
    direccionSede: { type: String, required: true },
    consultorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Consultorio' }] // Ref-Consultorios
});

// Model-Sedes
module.exports = mongoose.model("Sede", SedeSchema);