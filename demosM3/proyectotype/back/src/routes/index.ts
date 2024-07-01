import { Router } from "express";
import routerUser from "./userRouter";
import vehicleRouter from "./vehicleRouter";

const router: Router = Router();

router.use("/user", routerUser)
router.use("/vehicle", vehicleRouter)


export default router