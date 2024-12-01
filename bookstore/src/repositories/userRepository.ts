import { Pool } from "pg";
import pool from "../config/database";
import { User } from "../models/userModel";

export class UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query("SELECT * FROM users");
    return rows;
  }

  async addUser(
    name: string,
    email: string,
    passwordHash: string,
  ): Promise<User> {
    const queryText =
      "INSERT INTO users(name, email, password_hash) VALUES($1, $2, $3) RETURNING *";
    const { rows } = await this.pool.query(queryText, [
      name,
      email,
      passwordHash,
    ]);
    return rows[0];
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    return rows[0] || null;
  }
}
