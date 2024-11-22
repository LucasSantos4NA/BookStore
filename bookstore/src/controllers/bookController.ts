import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRepository";

const bookRepository = new BookRepository();

export const getAllBooks = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

export const addBook = async (req: Request, res: Response): Promise<void> => {
  const { title, author, price, stock, genre, published_date } = req.body;
  if (!title || !author || !price || !stock) {
    res
      .status(400)
      .json({ message: "Todos os campos obrigatórios devem ser preenchidos." });
    return;
  }
  try {
    const book = await bookRepository.addBook(
      title,
      author,
      price,
      stock,
      genre,
      published_date,
    );
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar livro" });
  }
};

export const buyBook = async (req: Request, res: Response): Promise<void> => {
  const params = req.params;
  if (!params) {
    res.status(400).json({ message: "ID do livro obrigatório" });
    return;
  }

  const id = parseInt(params.id);

  try {
    const book = await bookRepository.buyBook(id);
    res.status(201).json(book);
  } catch ({ message }: any) {
    res.status(500).json({ message });
  }
};
