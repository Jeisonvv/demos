const { Router } = require("express")
const userController =require("../controller/userController")
const validateId = require("../middleware/validateId")
const {controllersVehicle} = require("../controller/vehicleControllers")


const router = Router()

router.get("/user",userController.userCotrollerMongoose)
router.get("/userName",userController.getUserByName)
// tiene que ser el ultimo
router.get("/user/:id",validateId, userController.getUserById)

router.post("/user",userController.createUserControlleMongoose)

router.put("/user/addvehicle",userController.addVehicleData)


router.get("/vehicles", controllersVehicle.getAllVehicles)
router.post("/vehicles", controllersVehicle.createVehicle)




module.exports = { router }