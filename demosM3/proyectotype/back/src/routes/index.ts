import { Router } from "express";
import routerUser from "./userRouter";
import vehicleRouter from "./vehicleRouter";
import cellPhoneRouter from "./cellPhoneRouter";

const router: Router = Router();

router.use("/user", routerUser)
router.use("/vehicle", vehicleRouter)
router.use("/cellphone", cellPhoneRouter)


export default router