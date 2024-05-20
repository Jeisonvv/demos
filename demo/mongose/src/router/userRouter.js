const { Router } = require("express")
const {userControlers} =require("../controller/userController")
const {controllersVehicle} = require("../controller/vehicleControllers")


const router = Router()

router.get("/user",userControlers.userCotrollerMongoose)
router.get("/userName",userControlers.getUserByName)
router.get("/user/:id",userControlers.getUserById)

router.post("/user",userControlers.createUserControlleMongoose)

router.put("/user/addvehicle",userControlers.addVehicleData)


router.get("/vehicles", controllersVehicle.getAllVehicles)
router.post("/vehicles", controllersVehicle.createVehicle)




module.exports = { router }