import { DataSource } from "typeorm"
import { User } from "../entities/user"
import { Vehicle } from "../entities/vehicle"
import { Cellphone } from "../entities/cellPhone"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admi",
    database: "demo_typeorm",
    //dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Vehicle, Cellphone],
    subscribers: [],
    migrations: [],
})