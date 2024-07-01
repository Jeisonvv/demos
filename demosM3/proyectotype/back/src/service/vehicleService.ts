import { AppDataSource } from "../config/data-source";
import TVehicleDto from "../dto/TVehicleDto";
import { Vehicle } from "../entities/vehicle";

export const getVehicles = async (): Promise<Vehicle[]> => {
    const vehicles = await AppDataSource.getRepository(Vehicle).find();
    return vehicles
};
export const vehicleById = async (id: number): Promise<Vehicle | null> => {
    const vehicle = await AppDataSource.getRepository(Vehicle).findOneBy({id})
    return vehicle
}

export const createVehicle = async (data: TVehicleDto): Promise<Vehicle> =>{
    const vehicle =  AppDataSource.getRepository(Vehicle).create(data);
    const results = await AppDataSource.getRepository(Vehicle).save(vehicle)
    return results
};