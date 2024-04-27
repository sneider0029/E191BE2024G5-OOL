
mongoose.connect("mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E191?retryWrites=true&w=majority&appName=UTS")
.then(() => console.log("Conectando a mongo"))
.catch(error => console.log(error));


//Ubicaciones
const UbicacionSchema = new mongoose.Schema({
    idUbicacion: { type: Number },
    nombreUbicacion: { type: String, required: true },
    codigoUbicacion: { type: String, required: true, unique: true },
    sedes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sede' }] // Ref-Sedes
});

// Model-Ubicaciones
module.exports = mongoose.model('Ubicacion', UbicacionSchema);
