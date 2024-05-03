const express = require("express");
const router = express.Router();
const Consultorio = require("../models/Consultorio");

router.get("/consultorios", (req, res) => {
    Consultorio.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

//GET codigo de consultorio
router.get("/consultorios/:idConsultorio", (req, res) => {
    Consultorio.find({ idConsultorio: req.params.idConsultorio })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
})

//
//
//

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

router.delete("/consultorios/:id", (req, res) => {
    Consultorio.deleteOne({ _id: req.params.id })
        .then((data) => {
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