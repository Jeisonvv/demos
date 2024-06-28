import { Request, Response } from "express";
import { userServices } from "../service/userService";
import IUser from "../interface/IUser";


class UserController{
    getuser = async (req:Request, res: Response) =>{
        const users = await userServices.getUser()
        res.status(201).json(users)
    };
    createUser = async (req:Request, res: Response) =>{
        const {name, ege, active} = req.body;
        const newUser: IUser = await userServices.createUser({name, ege, active});
        res.status(201).json(newUser)
    };
    deleteUser = async (req:Request, res: Response) =>{
        const {id} = req.body;
        await userServices.deleteUser(id)
        res.status(201).json({message: "eliminado correcta mente" })
    };
    
};

export const usercontrollers = new UserController;