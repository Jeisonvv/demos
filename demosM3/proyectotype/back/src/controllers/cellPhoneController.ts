import { Request, Response } from "express"
import { getCellPhons, cellPhoneById, createCellPhone } from "../service/cellphoneService"
import { Cellphone } from "../entities/cellPhone";


export const getCellPhoneController = async (req: Request, res: Response) => {
    const cellPhones: Cellphone[] = await getCellPhons();
    res.status(200).json(cellPhones)
}

export const cellPhoneByIdController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const cellPhone: Cellphone | void = await cellPhoneById(Number(id));
        res.status(200).json(cellPhone)
    } catch (error) {
        const {id} = req.params
        res.status(400).json({error: `no existe el cellPhone con el id: ${id}`})
    }
}

export const createCellPhoneController = async (req: Request, res: Response) => {
    const {bran, model, color, userId} = req.body;
    try {
        const newCellPhones: Cellphone|void = await createCellPhone({bran,model,color,userId})
        res.status(201).json(newCellPhones)
    } catch (error) {
        res.status(400).json({error: "error al crear el cellphon"})
    }
}