import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

const userRpository = AppDataSource.getRepository(User)

export default userRpository