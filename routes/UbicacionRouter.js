const express = require("express");
const router = express.Router();
const Ubicacion = require("../models/Ubicacion");

router.get("/ubicaciones", (req, res) => {
    Ubicacion.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

//GET id de la ubicacion
router.get("/ubicaciones/:idUbicacion", (req, res) => {
    Consultorio.find({ idUbicacion: req.params.idUbicacion })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

//GET nombre de la ubicacion
router.get("/ubicaciones/:nombreUbicacion", (req, res) => {
    Consultorio.find({ nombreUbicacion: req.params.nombreUbicacion })
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

module.exports = router;