import { AppDataSource } from "../config/data-source";
import { Cellphone } from "../entities/cellPhone";

const cellPhoneRepository = AppDataSource.getRepository(Cellphone)

export default cellPhoneRepository