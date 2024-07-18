import { AppDataSource } from "../config/data-source";
import TCellPhone from "../dto/TCellPhone";
import { Cellphone } from "../entities/cellPhone";
import { User } from "../entities/user";
import cellPhoneRepository from "../repositories/cellPhoneRepository";
import userRpository from "../repositories/userRepository";

export const getCellPhons = async (): Promise<Cellphone[]> => {
    const cellphones = await cellPhoneRepository.find();
    return  cellphones
}

export const cellPhoneById = async (id: number):Promise <Cellphone | void > => {
    
        const cellPhone = await cellPhoneRepository.findOneBy({id})
        if(!cellPhone){throw Error("cellPhone no existe")}
        return cellPhone
     
}

export const createCellPhone = async (cellPhone: TCellPhone): Promise <Cellphone | void> => {
        const queryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        try {
            
            queryRunner.startTransaction()
            const newCellPhone =   cellPhoneRepository.create(cellPhone)
            await queryRunner.manager.save(newCellPhone)
            
            const user = await userRpository.findOneBy({id: cellPhone.userId})
    
            if(!user) {throw Error("usuario no existe")}
    
            newCellPhone.user = user
            await queryRunner.manager.save(newCellPhone)
    
            await queryRunner.commitTransaction()
    
            return newCellPhone
        } catch (error) {
            await queryRunner.rollbackTransaction()
           throw Error ("no se creo el cellphone")
        }finally{
            await queryRunner.release()
        }
        

    
}