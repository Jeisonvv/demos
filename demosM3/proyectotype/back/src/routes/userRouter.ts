import { Router } from "express";
import { usercontrollers } from "../controllers/userControllers";
import auth from "../middlewares/auth";

const routerUser: Router = Router()

routerUser.get("/", auth, usercontrollers.getuser)
routerUser.get("/:id", usercontrollers.userById)
routerUser.post("/", usercontrollers.createUser)
// router.delete("/user",usercontrollers.deleteUser)

export default routerUser