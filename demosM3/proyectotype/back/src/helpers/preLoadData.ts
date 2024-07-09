import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import { users } from "./preEtitiesDate"; 


export const PreloanData = async () => {
    
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
        const allusers = await AppDataSource.getRepository(User).find()
         if(allusers.length) return console.log("no se hizo la precarga de datos por que ya habian datos")
    
        const newUser1 =  AppDataSource.getRepository(User).create(users[0])
        const newUser2 =  AppDataSource.getRepository(User).create(users[1])
        const newUser3 =  AppDataSource.getRepository(User).create(users[2])
        const newUser4 =  AppDataSource.getRepository(User).create(users[3])
    
        await transactionalEntityManager.save(newUser1)
        await transactionalEntityManager.save(newUser2)
        await transactionalEntityManager.save(newUser3)
        await transactionalEntityManager.save(newUser4)
    
        console.log("precarga de datos guardada exitosamente")
    })
}