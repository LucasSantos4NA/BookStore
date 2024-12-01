import express from "express";
import { getAllBooks, addBook, buyBook } from "../controllers/bookController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getAllBooks);
router.post("/", authMiddleware, addBook);
router.post("/:id/buy", authMiddleware, buyBook);

export default router;
