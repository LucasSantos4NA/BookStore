import { Pool } from "pg";
import pool from "../config/database";
import { Book } from "../models/bookModel";

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks(): Promise<Book[]> {
    const { rows } = await this.pool.query("SELECT * FROM books");
    return rows;
  }

  async getStock(id: number): Promise<number> {
    const { rows } = await this.pool.query(
      `SELECT stock FROM books WHERE id = ${id}`,
    );
    return rows[0].stock;
  }

  async addBook(
    title: string,
    author: string,
    price: number,
    stock: number,
    genre?: string,
    published_date?: string,
  ): Promise<Book> {
    const query = `
      INSERT INTO books (title, author, price, stock, genre, published_date) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;
    const { rows } = await this.pool.query(query, [
      title,
      author,
      price,
      stock,
      genre,
      published_date,
    ]);
    return rows[0];
  }
  async buyBook(id: number): Promise<Book> {
    const stock = await this.getStock(id);
    if (stock <= 0) {
      throw new Error("Livro sem estoque");
    }

    const query = `
      UPDATE books 
      SET stock = stock - 1 
      WHERE id = $1 
      RETURNING *;
    `;
    const { rows } = await this.pool.query(query, [id]);
    return rows[0];
  }
}
