import { Request, Response } from "express";
import { Vehicle } from "../entities/vehicle";
import { createVehicle, getVehicles, vehicleById} from "../service/vehicleService";

export const getVehicleController = async (req: Request, res: Response) =>{
    const vehicles: Vehicle[] = await getVehicles()
    res.status(200).json(vehicles)
};

export const vehicleByIdController = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const vehicle: Vehicle | null = await vehicleById(Number(id))
    res.status(200).json(vehicle)
}

export const createVehicleController = async (req: Request, res: Response) => {
    const {marca, modelo, color} = req.body;
    const newVehicle: Vehicle = await createVehicle({marca, modelo, color})
    res.status(200).json(newVehicle)
}