import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Erro ao registrar usuário: " + (err as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const token = await authService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Erro ao fazer login: " + (err as Error).message });
  }
};
