const {vehicleServres} = require("../service/veihicleServer")

class VehicleController{
    getAllVehicles = async (req, res) => {
        const vehicles = await vehicleServres.getVehicles();
        res.status(200).json(vehicles);
    }

    createVehicle = async (req, res) => {
        const {modelo, marca} = req.body;
        const newVehicle = await vehicleServres.createVehicle({modelo, marca});
        res.status(201).json(newVehicle)
    }
}
const controllersVehicle = new VehicleController
module.exports = {controllersVehicle}