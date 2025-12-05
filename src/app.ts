import express from "express";
import initDB from "./config/db";
import usersRoutes from "./modules/users/users.routes";
import authRotes from "./modules/auth/auth.routes";

export const app = express();
app.use(express.json());

//TODO inti db
initDB();

//* routes
app.use("/api", usersRoutes);
app.use("/api", authRotes);
