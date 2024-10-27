import { UserRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';

const userRepository = new UserRepository();

export class AuthService {
    async registerUser(name: string, email: string, password: string) {
        // Verificar se o usuário já existe
        const existingUser = await userRepository.getUserByEmail(email);
        if (existingUser) {
            throw new Error('Email já registrado.');
        }

        // Hash da senha
        const passwordHash = await bcrypt.hash(password, 10);

        // Registrar usuário
        const user = await userRepository.addUser(name, email, passwordHash);
        return user;
    }

    async loginUser(email: string, password: string) {
        // Buscar o usuário
        const user = await userRepository.getUserByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        // Verificar senha
        const isValidPassword = await bcrypt.compare(password, user.passwordHash);
        if (!isValidPassword) {
            throw new Error('Senha incorreta.');
        }

        return user;
    }
}
