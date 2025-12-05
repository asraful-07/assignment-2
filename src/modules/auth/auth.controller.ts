import { Request, Response } from "express";
import { LoginService } from "./auth.service";

export const LoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await LoginService(email, password);

    res.status(200).json({ success: "Login successful", data: user });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
