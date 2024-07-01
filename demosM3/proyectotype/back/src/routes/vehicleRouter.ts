import { Router } from "express";
import { createVehicleController, getVehicleController, vehicleByIdController } from "../controllers/vehicleControllers";

const vehicleRouter: Router = Router()

vehicleRouter.get("/", getVehicleController)
vehicleRouter.get("/:id", vehicleByIdController)

vehicleRouter.post("/", createVehicleController)


export default vehicleRouter