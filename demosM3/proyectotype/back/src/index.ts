import server from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"
import { PreloanData } from "./helpers/preLoadData"

AppDataSource.initialize()
.then(res => {
    console.log("conectados a la base de datos demo_typeorm");
    PreloanData()
    .then(res => {
        server.listen((PORT), () => {console.log(`server lisening on port ${PORT}`)});
    })
})