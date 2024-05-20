const {userServices} = require("../service/userServer")

class UserControler{
    constructor(){

    }
    userCotrollerMongoose = async (req, res) => {
        const user = await userServices.getUserMongoose();
        res.status(200).json(user)
    }
    createUserControlleMongoose = async (req, res) => {
        const {name, ege, email} = req.body;
        try {
            const newUser = await userServices.createUserMongoose( {name, ege, email} )
            res.status(201).json(newUser)  
        } catch {
            res.status(500).json({
                error: "no se pudo crear el usuario"
            })
        }
        
    }
    getUserByName = async (req, res) =>{
        const {name} = req.body;
        const user = await userServices.findUserName(name)
        res.status(200).json(user)

    }
    getUserById = async (req, res) =>{
        const {id} = req.params;
        const user = await userServices.getById(id);
        res.status(200).json(user)

    }
    addVehicleData = async (req, res) => {
        const {userId, vehicleId} = req.body;
        const newVehicle = await userServices.addVehicle({userId, vehicleId});
        res.status(201).json({message:"todo corecto" })
    }
}

const userControlers = new UserControler

module.exports = {userControlers}
