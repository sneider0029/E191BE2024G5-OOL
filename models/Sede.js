const mongoose = require("../conexionBD/conexionBD");


// Sedes
const SedeSchema = new mongoose.Schema({
    idSede: { type: Number, required: true },
    nombreSede: { type: String, required: true },
    direccionSede: { type: String, required: true },
    consultorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Consultorio' }] // Ref-Consultorios
});







// Model-Sedes
module.exports = mongoose.model("Sede", SedeSchema);

/*
const mongoose = require('mongoose');
const SedeEsquema = mongoose.Schema({
    ubicaciones:[
        {
            idUbicaciones: {type: Number},
            nombreUbicacion: {type: String,
                 required:true},
            codigoUbicacion: {type: String,
                 required:true,
                 unique:true },
            idUbicacionPadre: {type: String,
                 required:true},
            sedes:[
                {
                    idSedes: {type: Number,
                         required:true},
                    nombreSedes: {type: String,
                         required:true},
                    direccionSedes: {type: String,
                         required:true},
                    consultorios:[
                        {
                            idConsultorio: {type: Number,
                                 required:true},
                            codigoConsultorio: {type: String,
                                 required:true,
                                  unique:true},
                            descripcionConsultorio: {type: String,
                                 required:true}
                        }
                    ]
                },
            ]
        }
    ],
}, {
    collection: "sedes",
    versionKey: false
}
);
module.exports = mongoose.model("sede", SedeEsquema)*/
