const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rutaSede = require("./routes/SedeRouter");

app.use(cors());
app.use(bodyParser.json());
app.use("/sede", rutaSede)

const PORT= process.env.PORT || 5000;
app.listen(PORT);