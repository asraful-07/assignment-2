import express from "express";
import { CreateUserController } from "./users.controller";

const router = express.Router();

router.post("/v1/auth/signup", CreateUserController);

export default router;
