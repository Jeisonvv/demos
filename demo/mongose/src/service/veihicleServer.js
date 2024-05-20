const { Vehicle } = require("../model/Vehicle")

class VehivleServer{
    getVehicles = async () => {
        const vehicle = await Vehicle.find()
        return vehicle
    }
    createVehicle = async (vehicle) => {
         const newVehicle = Vehicle.create(vehicle);
         return newVehicle
    }
}

const vehicleServres = new VehivleServer

module.exports = { vehicleServres}