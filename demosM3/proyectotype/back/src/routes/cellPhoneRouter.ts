import { Router } from "express";
import { cellPhoneByIdController, createCellPhoneController, getCellPhoneController } from "../controllers/cellPhoneController";


const cellPhoneRouter: Router = Router();

cellPhoneRouter.get("/", getCellPhoneController);
cellPhoneRouter.get("/:id", cellPhoneByIdController);

cellPhoneRouter.post("/", createCellPhoneController);

export default cellPhoneRouter