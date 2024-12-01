import express from "express";
import { getAllUsers } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);

export default router;
