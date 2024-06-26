const express = require("express");
const router = express.Router();
const Sede = require("../models/Sede"); 
const Consultorio = require("../models/Consultorio")

// Obtener todas las ubicaciones
router.get("/sedes", (req, res) => {
    Sede.find()
    .populate('consultorios')
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

//GET nombre de la sede
router.get("/sedes/nombre/:nombreSede", (req, res) => {
    Sede.find({ nombreSede: req.params.nombreSede })
        .then((data) => {
            res.json(data); 
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

//GET id de la sede
router.get("/sedes/id/:idSede", (req, res) => {
    Sede.find({ idSede: req.params.idSede })
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

router.post("/sedes", (req, res) => {
    const sede = new Sede({
        idSede: req.body.idSede,
        nombreSede: req.body.nombreSede,
        direccionSede: req.body.direccionSede,
        consultorios: req.body.consultorios
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

router.delete("/sedes/:id", (req, res) => {
    Sede.deleteOne({ _id: req.params.id })
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

router.patch("/sedes/:id", (req, res) => {
    Sede.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idSede: req.body.idSede,
                nombreSede: req.body.nombreSede,
                direccionSede: req.body.direccionSede,
                consultorios: req.body.consultorios
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