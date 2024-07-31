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
    // creamos la queryRuner 
        const queryRunner = AppDataSource.createQueryRunner();
        // conectamos la queryRuner
        await queryRunner.connect();
        // iniciamos el manejo de errores
        try {
            // iniciamos la transaccion
            queryRunner.startTransaction()
            // creamos el celular con la colocamos en una variable
            const newCellPhone =   cellPhoneRepository.create(cellPhone)
            // despues de crearla la guardamos 
            await queryRunner.manager.save(newCellPhone)
            // aqui identificamos al usurio dueño del celular 
            const user = await userRpository.findOneBy({id: cellPhone.userId})
            // damos la condicion que si el id del usuario no esta pues lo manejamos como un error
            if(!user) {throw Error("usuario no existe")}
            //si esta en el campo usuario se lo agragamos al campo newcellhone.user
            newCellPhone.user = user
            // gurdamos el celular 
            await queryRunner.manager.save(newCellPhone)
            //hacemos el cimmit de la transaccion es como guardar todo el proceso
            await queryRunner.commitTransaction()
            // retornamos el nuevo celular
            return newCellPhone
        } catch (error) {
            // si algo sale mal damos atras a toda la transaccion
            await queryRunner.rollbackTransaction()
            // damos el mensaja 
           throw Error ("no se creo el cellphone")
        }finally{
            //liberamos la transacion
            await queryRunner.release()
        }
        

    
}