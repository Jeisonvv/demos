import { AppDataSource } from "../config/data-source";

import { Vehicle } from "../entities/vehicle";

const vehicleRepository = AppDataSource.getRepository(Vehicle)

export default vehicleRepository