const express = require("express");
const router = express.Router();
const Ubicacion = require("../models/Ubicacion");
const Sede = require("../models/Sede")

router.get("/ubicaciones", (req, res) => {
    Ubicacion.find()
    .populate('sedes')
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

//GET id de la ubicacion
router.get("/ubicaciones/id/:idUbicacion", (req, res) => {
    Ubicacion.find({ idUbicacion: req.params.idUbicacion })
    .populate('sedes')
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

//GET nombre de la ubicacion
router.get("/ubicaciones/nombre/:nombreUbicacion", (req, res) => {
    Ubicacion.find({ nombreUbicacion: req.params.nombreUbicacion })
    .populate('sedes')
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

router.post("/ubicaciones", (req, res) => {
    const ubicacion = new Ubicacion({
        idUbicacion: req.body.idUbicacion,
        nombreUbicacion: req.body.nombreUbicacion,
        codigoUbicacion: req.body.codigoUbicacion,
        sedes: req.body.sedes
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

router.delete("/ubicaciones/:id", (req, res) => {
    Ubicacion.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.patch("/ubicaciones/:id", (req, res) => {
    Ubicacion.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idUbicacion: req.body.idUbicacion,
                nombreUbicacion: req.body.nombreUbicacion,
                codigoUbicacion: req.body.codigoUbicacion,
                sedes: req.body.sedes
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