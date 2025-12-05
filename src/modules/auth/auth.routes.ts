import express from "express";
import { LoginController } from "./auth.controller";

const router = express.Router();

router.post("/v1/auth/signin", LoginController);

export default router;
