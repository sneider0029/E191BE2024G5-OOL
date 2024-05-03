const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const rutaSede = require("./routes/SedeRouter");

app.use("/sede", rutaSede);

const PORT= process.env.PORT || 5000;
app.listen(PORT);


