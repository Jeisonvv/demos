const express = require("express");
const {router} = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const appmongoose = require("../../mongose/src/server");
const app = express();

// este morgan consologea la peticion
app.use(morgan("dev"));
// esto nos permite dar permisos para que soliciten la informacion de servidor
app.use(cors());
// esto permite que los archivos json se puedan utilizar
app.use(express.json())


app.use(router)

module.exports = {appmongoose};