import { Router } from "express";
import { usercontrollers } from "../controllers/userControllers";
import auth from "../middlewares/auth";

const router: Router = Router();

router.get("/user", auth, usercontrollers.getuser)
router.post("/user", usercontrollers.createUser)
router.delete("/user",usercontrollers.deleteUser)

export default router