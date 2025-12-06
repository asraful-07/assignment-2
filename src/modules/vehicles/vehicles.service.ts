import { pool } from "../../config/db";

export const CreateVehiclesService = async (
  payload: Record<string, unknown>
) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  if (availability_status !== "available" && availability_status !== "booked") {
    throw new Error("Invalid availability_status");
  }

  const result = await pool.query(
    `INSERT INTO vehicles (vehicle_name, type, registration_number, daily_rent_price, availability_status) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );

  return result;
};

export const GetsVehiclesService = async () => {
  const result = await pool.query(`SELECT * FROM vehicles`);
  return result;
};

export const GetVehiclesService = async (id: string) => {
  const result = await pool.query(`SELECT * FROM vehicles WHERE id = $1`, [id]);
  return result;
};

export const UpdateVehiclesService = async (
  payload: Record<string, unknown>,
  id: string
) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;
  const result = await pool.query(
    `UPDATE vehicles SET 
    vehicle_name = $1,
    type = $2,
    registration_number = $3,
    daily_rent_price = $4,
    availability_status = $5 WHERE id = $6 RETURNING *`,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
      id,
    ]
  );

  return result;
};

export const DeleteVehiclesService = async (id: string) => {
  const result = pool.query(`DELETE FROM vehicles WHERE id = $1 RETURNING *`, [
    id,
  ]);
  return result;
};
