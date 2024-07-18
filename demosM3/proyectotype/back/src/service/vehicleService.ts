import { AppDataSource } from "../config/data-source";
import TVehicleDto from "../dto/TVehicleDto";
import { User } from "../entities/user";
import { Vehicle } from "../entities/vehicle";
import vehicleRepository from "../repositories/vehicleRepository";

export const getVehicles = async (): Promise<Vehicle[]> => {
    const vehicles = await vehicleRepository.find();
    return vehicles
};
export const vehicleById = async (id: number): Promise<Vehicle | null> => {
    const vehicle = await vehicleRepository.findOneBy({id})
    return vehicle
}

export const createVehicle = async (data: TVehicleDto): Promise<Vehicle> =>{
    const vehicle =  vehicleRepository.create(data);
    const results = await vehicleRepository.save(vehicle)
    const user = await AppDataSource.getRepository(User).findOneBy({
        id: data.userId
    })
    if(user){
        user.vehicle = vehicle;
        await AppDataSource.getRepository(User).save(user)
    }else{
        throw Error ("Username does not exist")
    }

    return results
};