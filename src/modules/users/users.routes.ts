import express from "express";
import {
  DeleteUserController,
  GetsUserController,
  GetUserController,
  UpdateUserController,
} from "./users.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.get("/users", auth("admin"), GetsUserController);
router.get("/users/:userId", auth("admin", "customer"), GetUserController);
router.put("/users/:userId", auth("admin", "customer"), UpdateUserController);
router.delete("/users/:userId", auth("admin"), DeleteUserController);

export default router;
