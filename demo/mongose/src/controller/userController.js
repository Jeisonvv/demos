const {userServices} = require("../service/userServer")
const {catchAsync} = require("../utils/catchAsync")


    const userCotrollerMongoose = async (req, res) => {
        const user = await userServices.getUserMongoose();
        res.status(200).json(user)
    }
    const createUserControlleMongoose = async (req, res) => {
        const {name, ege, email} = req.body;
            const newUser = await userServices.createUserMongoose( {name, ege, email} )
            res.status(201).json(newUser)  
        
        
    }
    const getUserByName = async (req, res) =>{
        const {name} = req.body;
        const user = await userServices.findUserName(name)
        res.status(200).json(user)

    }
    const getUserById = async (req, res) =>{
        const {id} = req.params;
        const user = await userServices.getById(id);
        res.status(200).json(user)

    }
    const addVehicleData = async (req, res) => {
        const {userId, vehicleId} = req.body;
        const newVehicle = await userServices.addVehicle({userId, vehicleId});
        res.status(201).json({message:"todo corecto" })
    }




module.exports = {
    userCotrollerMongoose: catchAsync(userCotrollerMongoose),
    createUserControlleMongoose: catchAsync(createUserControlleMongoose),
    getUserByName: catchAsync(getUserByName),
    getUserById: catchAsync(getUserById),
    addVehicleData: catchAsync(addVehicleData)
}
