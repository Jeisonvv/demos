import { AppDataSource } from "../config/data-source";
import { preloadUsers, preloadCellPhones } from "./preEtitiesDate"; 
import cellPhoneRepository from "../repositories/cellPhoneRepository";
import userRpository from "../repositories/userRepository";


export const PreloanUserData = async () => {
    
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
        const allusers = await userRpository.find()
         if(allusers.length) return console.log("no se hizo la precarga de datos por que ya habian datos");
            for await (const user of preloadUsers) {
             const newUser = userRpository.create(user);
             await transactionalEntityManager.save(newUser)
            }
        console.log("precarga de datos user guardada exitosamente")
    })
}

export const preloanCellphoneData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    const cellPhones = await cellPhoneRepository.find()
        if(cellPhones.length) return console.log("no se hz la precarga de datos por que ya existian datos")
    const promises = preloadCellPhones.map(async(cellphones) => {
        
        const  newCellphone = cellPhoneRepository.create(cellphones);
        const user = await userRpository.findOneBy({id: cellphones.userId});
        if(!user) throw Error("usuario inexistente");
        newCellphone.user = user;
        await queryRunner.manager.save(newCellphone);
        
    })


    try {
        
        await queryRunner.startTransaction();
        await Promise.all(promises);
        console.log("precarga cellphone realizada con exito")
        await queryRunner.commitTransaction();
    } catch (error) {
        console.log("error al crear los cellphone")
        await queryRunner.rollbackTransaction();
    }finally {
        await queryRunner.release()
        console.log("final de la transaccion")
    }

}



















// ESTA ES LA FORMA DE UNA TRANSACION EN LA QUE PUEDEN ACURRI ERRORES Y NO ES COMBENINTE PARA LA APLICACION 
    // await AppDataSource.manager.transaction(async(transactionalEntityManager) => {
    //     for await (const cellPhone of preloadCellPhones){
    //         const newcellphone =  AppDataSource.getRepository(Cellphone).create(cellPhone);
    //         const cellPhones = await AppDataSource.getRepository(Cellphone).find();
    //         if(cellPhones.length) return console.log("no se crearon mas veiculos por que ya habian datos")
    //         const user = await AppDataSource.getRepository(User).findOneBy({id: cellPhone.userId});
    //         if(user){
    //             newcellphone.user = user;
    //             transactionalEntityManager.save(newcellphone)
    //         }
    //         else{
    //             console.log("no se pudo guardar los vehiculo")
    //         }
           
    //     }
    //     console.log("precarga de datos cellPhone guardada exitosamente")
    // })
