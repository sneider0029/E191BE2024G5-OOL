const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rutaSede = require("./routes/SedeRouter");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use("/sede", rutaSede)

const PORT= process.env.PORT || 5000;
app.listen(PORT);

//mongoose.connect("mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Prueba2024E191?retryWrites=true&w=majority&appName=UTS")
//.then(() => console.log("Conectando a mongo"))
//.catch(error => console.log(error));

/*
app.get("/", (req, res) => {
    res.json({data:"hola con get"});
});

app.post("/", (req, res) => {
    res.json({data: "Hola con post"});
});

app.delete("/:id", (req,res) => {
    res.json({data: "hola con delete"})
});

app.patch("/:id", (req, res) =>{
    res.json({data: "Hola con path"})
});

*/
