import TUserDto from "../dto/TUserDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import userRpository from "../repositories/userRepository";

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
    
    // deleteUser = async (id: number):Promise<void> =>{
    //     users = users.filter((user: User) => {
    //         return user.id !== id
    //     })
    // }
    
}

export const userServices = new UserService