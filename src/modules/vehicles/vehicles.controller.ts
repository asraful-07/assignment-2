import { Request, Response } from "express";
import {
  CreateVehiclesService,
  DeleteVehiclesService,
  GetsVehiclesService,
  GetVehiclesService,
  UpdateVehiclesService,
} from "./vehicles.service";

export const CreateVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = await CreateVehiclesService(req.body);
    res.status(201).json({
      success: true,
      message: "Vehicle created successfully",
      data: vehicles.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const GetsVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = await GetsVehiclesService();

    if (!vehicles || vehicles.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No vehicles found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicles retrieved successfully",
      data: vehicles.rows,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const GetVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = await GetVehiclesService(req.params.vehicleId as string);

    if (!vehicles || vehicles.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No vehicles found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicles retrieved successfully",
      data: vehicles.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const UpdateVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = await UpdateVehiclesService(
      req.body,
      req.params.vehicleId as string
    );

    if (!vehicles || vehicles.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No vehicles found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      data: vehicles.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const DeleteVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = DeleteVehiclesService(req.params.vehicleId as string);
    if (!vehicles) {
      return res
        .status(404)
        .json({ success: false, message: "No vehicles found" });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
