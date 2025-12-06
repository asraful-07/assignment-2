import express from "express";
import {
  CreateVehiclesController,
  DeleteVehiclesController,
  GetsVehiclesController,
  GetVehiclesController,
  UpdateVehiclesController,
} from "./vehicles.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/v1/vehicles", CreateVehiclesController);
router.get("/v1/vehicles", auth("admin"), GetsVehiclesController);
router.get("/v1/vehicles/:vehicleId", GetVehiclesController);
router.put("/v1/vehicles/:vehicleId", UpdateVehiclesController);
router.delete("/v1/vehicles/:vehicleId", DeleteVehiclesController);

export default router;
