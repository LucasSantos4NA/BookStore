import { Pool } from 'pg';
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks(): Promise<Book[]> {
    const { rows } = await this.pool.query('SELECT * FROM books');
    return rows;
  }

  async addBook(
    title: string,
    author: string,
    price: number,
    stock: number,
    genre?: string,
    published_date?: string
  ): Promise<Book> {
    const query = `
      INSERT INTO books (title, author, price, stock, genre, published_date) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;
    const { rows } = await this.pool.query(query, [title, author, price, stock, genre, published_date]);
    return rows[0];
  }
}
