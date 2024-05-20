const mongoose = require("mongoose");
//creamos el sequema para vehicle
const vehicleSchema = new mongoose.Schema({
    modelo: Number,
    marca: String
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = {Vehicle}
