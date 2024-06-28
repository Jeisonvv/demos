import server from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"
AppDataSource.initialize()
.then(res => {
    console.log("conectados a la base de datos demo_typeorm");
    server.listen((PORT), () => {console.log(`server lisening on port ${PORT}`)});
})