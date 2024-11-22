import express from "express";
import { getAllBooks, addBook, buyBook } from "../controllers/bookController";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.post("/:id/buy", buyBook);

export default router;
