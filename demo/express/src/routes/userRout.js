const { Router } = require("express")
const {userController, createUserController} = require("../controllers/userController")
const userRouter = Router()
const {validateUser} = require("../middlewares/validateUser")

userRouter.get("/", userController)
userRouter.post("/",validateUser, createUserController)

module.exports = {userRouter}
