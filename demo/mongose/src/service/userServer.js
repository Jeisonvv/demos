// importamos el modulo User
const {User}= require("../model/Users")

class UserService{
    constructor(){

    }
    getUserMongoose = async () => {
        const user = await User.find().populate("vehicle");
        return user;
    }
    createUserMongoose = async (user) => {
        const newUser = await User.create(user);
        return newUser
    }
    findUserName = async (name)=> {
        const user = await User.findOne({name})
        return user
    }
    getById = async (id) => {
        const user = await User.findById(id);
        return user
    }
    addVehicle = async (data) => {
        const {userId, vehicleId} = data;
        const user = await User.findById(userId);
        user.vehicle = vehicleId;
        await user.save();
        return user;
    }
}

const userServices = new UserService()



module.exports = {userServices} 

