import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

const userRepository = new UserRepository();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.getAllUsers();

    
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};


