import { Request, Response } from "express"
import { getCellPhons, cellPhoneById, createCellPhone } from "../service/cellphoneService"
import { Cellphone } from "../entities/cellPhone";


export const getCellPhoneController = async (req: Request, res: Response) => {
    const cellPhones: Cellphone[] = await getCellPhons();
    res.status(200).json(cellPhones)
}

export const cellPhoneByIdController = async (req: Request, res: Response) => {
    const {id} = req.params
    const cellPhone: Cellphone | null = await cellPhoneById(Number(id));
    res.status(200).json(cellPhone)
}

export const createCellPhoneController = async (req: Request, res: Response) => {
    const {bran, model, color, userId} = req.body;
    const newCellPhone: Cellphone = await createCellPhone({bran,model,color,userId})
    res.status(201).json(newCellPhone)
}