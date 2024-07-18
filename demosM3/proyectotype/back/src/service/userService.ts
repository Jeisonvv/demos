import TUserDto from "../dto/TUserDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import userRpository from "../repositories/userRepository";
import cellPhoneRepository from "../repositories/cellPhoneRepository";
import vehicleRepository from "../repositories/vehicleRepository";

// en esta ocacion lo hice por una clase 
class UserService{
    getUser = async (): Promise<User[]> =>{
        const users = await userRpository.find({relations:{
            vehicle: true,
            cellPhones: true
        }});
        return users
    };
    userById = async (id: number): Promise< User | null > =>{
        const user = await userRpository.findOneBy({id})
        return user
    }
    createUser = async (data: TUserDto): Promise<User> =>{
        const user = userRpository.create(data);
        const results = await userRpository.save(user)
        return results
        
    }
    
    deleteUser = async (id: number):Promise<User|void> =>{
        const user1 = await userRpository.findOneBy({id})
        if(!user1){
           throw Error("el usuario no existe")
        }
        await cellPhoneRepository.delete({ user: {id} });
        
        await userRpository.delete(id)
        return user1
    }

    
}

export const userServices = new UserService