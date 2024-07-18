import server from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"
import { PreloanUserData, preloanCellphoneData } from "./helpers/preLoadData"

const initializeApp = async () => {
    await AppDataSource.initialize();
    await PreloanUserData();
    await preloanCellphoneData()
    server.listen((PORT), () => {console.log(`server lisening on port ${PORT}`)})
   
}

initializeApp()
