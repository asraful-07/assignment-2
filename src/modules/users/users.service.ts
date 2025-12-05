import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

export const CreateUserService = async (payload: Record<string, unknown>) => {
  const { name, email, password, phone, role } = payload;

  // check role
  if (!["admin", "customer"].includes(role as string)) {
    throw new Error("Invalid role");
  }

  // check existing user
  const existUser = await pool.query(`SELECT id FROM users WHERE email = $1`, [
    email,
  ]);

  if (existUser.rows.length > 0) {
    throw new Error("User already exists with this email");
  }

  const hashPassword = await bcrypt.hash(password as string, 10);

  const result = await pool.query(
    `INSERT INTO users (name, email, password, phone, role)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, email, phone, role`,
    [name, email, hashPassword, phone, role]
  );

  return result;
};
