const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rutaSede = require("./routes/SedeRouter");
const rutaConsultorio = require("./routes/ConsultorioRouter");
const rutaUbicacion = require("./routes/UbicacionRouter");

app.use(cors());
app.use(bodyParser.json());
app.use("/sede", rutaSede);
app.use("/sede", rutaConsultorio);
app.use("/sede", rutaUbicacion);

const PORT= process.env.PORT || 5000;
app.listen(PORT);


