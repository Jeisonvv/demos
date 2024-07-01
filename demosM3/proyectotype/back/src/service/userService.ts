import TUserDto from "../dto/TUserDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

// en esta ocacion lo hice por una clase 
class UserService{
    getUser = async (): Promise<User[]> =>{
        const users = await AppDataSource.getRepository(User).find();
        return users
    };
    userById = async (id: number): Promise< User | null > =>{
        const user = await AppDataSource.getRepository(User).findOneBy({id})
        return user
    }
    createUser = async (data: TUserDto): Promise<User> =>{
        const user = AppDataSource.getRepository(User).create(data);
        const results = await AppDataSource.getRepository(User).save(user)
        return results
        
    }
    // deleteUser = async (id: number):Promise<void> =>{
    //     users = users.filter((user: User) => {
    //         return user.id !== id
    //     })
    // }
    
}

export const userServices = new UserService