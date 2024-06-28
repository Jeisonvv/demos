import { Request, Response } from "express";
import IUser from "../interface/IUser";
import IuserDto from "../dto/userDto";


let users: IUser[] = [
  {
    id: 1,
    name: "jeison",
    ege: 34,
    active: true
  }
];

let id = 1;

class UserService{
    getUser = async (): Promise<IUser[]> =>{
        return users
    };
    createUser = async (data: IuserDto): Promise<IUser> =>{
        const newUser: IUser = {
            id,
            name: data.name,
            ege: data.ege,
            active: data.active
        }
        users.push(newUser)
        id++
        return newUser
    }
    deleteUser = async (id: number):Promise<void> =>{
        users = users.filter((user: IUser) => {
            return user.id !== id
        })
    }
    
}

export const userServices = new UserService