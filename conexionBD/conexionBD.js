const mongoose = require("mongoose");

let conexion="mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E191?retryWrites=true&w=majority&appName=UTS";

mongoose.connect(conexion)
.then(() => console.log("Conectando a mongo"))
.catch(error => console.log(error));

module.exports = mongoose;
