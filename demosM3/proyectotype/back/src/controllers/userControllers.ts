import { Request, Response } from "express";
import { userServices } from "../service/userService";
import { User } from "../entities/user";



class UserController{
    getuser = async (req:Request, res: Response) =>{
        const users: User[] = await userServices.getUser()
        res.status(200).json(users)
    };
    userById = async (req :Request, res: Response) =>{
        const {id} = req.params
        const user: User|null = await userServices.userById(Number(id))
        res.status(200).json(user)
    }
    createUser = async (req:Request, res: Response) =>{
        const {name, ege, active} = req.body;
        const newUser: User = await userServices.createUser({name, ege, active});
        res.status(201).json(newUser)
    };
    deleteUser = async (req:Request, res: Response) =>{
        const {id} = req.body;
        await userServices.deleteUser(id)
        res.status(201).json({message: "eliminado correctamente" })
    };
    
};

export const usercontrollers = new UserController;