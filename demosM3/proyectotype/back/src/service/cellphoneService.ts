import { AppDataSource } from "../config/data-source";
import TCellPhone from "../dto/TCellPhone";
import { Cellphone } from "../entities/cellPhone";
import { User } from "../entities/user";

export const getCellPhons = async (): Promise<Cellphone[]> => {
    const cellphones = await AppDataSource.getRepository(Cellphone).find();
    return  cellphones
}

export const cellPhoneById = async (id: number):Promise <Cellphone | null > => {
    const cellPhone = await AppDataSource.getRepository(Cellphone).findOneBy({id})
    return cellPhone
}

export const createCellPhone = async (cellPhone: TCellPhone): Promise <Cellphone> => {
    const newCellPhone = AppDataSource.getRepository(Cellphone).create(cellPhone);
    const result = await AppDataSource.getRepository(Cellphone).save(newCellPhone)

    const user = await AppDataSource.getRepository(User).findOneBy({
        id: cellPhone.userId
    })
    
    if(user){
        newCellPhone.user = user;
        AppDataSource.getRepository(Cellphone).save(newCellPhone)
    }

    return newCellPhone
}