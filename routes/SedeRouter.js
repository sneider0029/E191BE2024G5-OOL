//const { request } = require("express");
const express = require("express");
const router = express.Router();
const Ubicacion = require("../models/Ubicacion");
const Sede = require("../models/Sede");
const Consultorio = require("../models/Consultorio");

// Obtener todas las ubicaciones
router.get("/ubicaciones", (req, res) => {
    Ubicacion.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

// Obtener todas las ubicaciones
router.get("/sedes", (req, res) => {
    Sede.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

router.get("/consultorios", (req, res) => {
    Consultorio.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

/*
    POST
*/

router.post("/ubicaciones", (req, res) => {
    const ubicacion = new Ubicacion({
        idUbicacion: req.body.idUbicacion,
        nombreUbicacion: req.body.nombreUbicacion,
        codigoUbicacion: req.body.codigoUbicacion
    });

    ubicacion
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err })
        });
});

router.post("/consultorios", (req, res) => {
    const consultorio = new Consultorio({
        idConsultorio: req.body.idConsultorio,
        codigoConsultorio: req.body.codigoConsultorio,
        descripcionConsultorio: req.body.descripcionConsultorio
    });

    consultorio
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err })
        });
});

router.post("/sedes", (req, res) => {
    const sede = new Sede({
        idSede: req.body.idSede,
        nombreSede: req.body.nombreSede,
        direccionSede: req.body.direccionSede,
    });

    sede
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err })
        });
});


/*
DELETE
*/

router.delete("/ubicaciones/:id", (req, res) => {
    Ubicacion.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.delete("/sedes/:id", (req, res) => {
    Sede.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.delete("/consultorios/:id", (req, res) => {
    Consultorio.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

/*
PATCHS
*/

router.patch("/ubicaciones/:id", (req, res) => {
    Ubicacion.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idUbicacion: req.body.idUbicacion,
                nombreUbicacion: req.body.nombreUbicacion,
                codigoUbicacion: req.body.codigoUbicacion
            },
        }
    ).then((data) => {
        res.json(data);
    })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.patch("/sedes/:id", (req, res) => {
    Sede.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idSede: req.body.idSede,
                nombreSede: req.body.nombreSede,
                direccionSede: req.body.direccionSede,
            },
        }
    ).then((data) => {
        res.json(data);
    })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.patch("/consultorios/:id", (req, res) => {
    Consultorio.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idConsultorio: req.body.idConsultorio,
                codigoConsultorio: req.body.codigoConsultorio,
                descripcionConsultorio: req.body.descripcionConsultorio
            },
        }
    ).then((data) => {
        res.json(data);
    })
        .catch((err) => {
            res.json({ message: err });
        });
});


module.exports = router;