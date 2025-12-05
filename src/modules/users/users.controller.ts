import { Request, Response } from "express";
import { CreateUserService } from "./users.service";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const user = await CreateUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
