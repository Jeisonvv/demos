import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admi",
    database: "demo_typeorm",
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})