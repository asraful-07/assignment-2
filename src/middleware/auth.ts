import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        throw new Error("Unauthorized: Token missing");
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        throw new Error("Unauthorized: Invalid token format");
      }

      const decoded = jwt.verify(token, config.secret as string) as JwtPayload;

      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role as string)) {
        return res.status(403).json({ success: false, message: "Forbidden" });
      }

      next();
    } catch (err: any) {
      res.status(401).json({ success: false, message: err.message });
    }
  };
};

export default auth;
