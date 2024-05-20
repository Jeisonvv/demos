const express = require("express");
const {router } = require("./router/userRouter")
const morgan = require("morgan");
const cors = require("cors");

// este es el servidor con express que acabo de instaciar
const appmongoose = express();
// meconsologea las peticiones
appmongoose.use(morgan("dev"));
// esto da permisos para las peticiones a mi servidor por el momento esta abierto a todo el munedo
appmongoose.use(cors())
// permite que la trasferecia de dtos con json la pueda utilizar 
appmongoose.use(express.json());

appmongoose.use(router)

module.exports = {appmongoose}