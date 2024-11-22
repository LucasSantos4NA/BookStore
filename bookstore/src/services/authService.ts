import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

const userRepository = new UserRepository();

export class AuthService {
    async registerUser(name: string, email: string, password: string) {
        const existingUser = await userRepository.getUserByEmail(email);
        if (existingUser) {
            throw new Error("Email já registrado.");
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await userRepository.addUser(name, email, passwordHash);
        return user;
    }

    async loginUser(email: string, password: string) {
        const user = await userRepository.getUserByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        console.log(user.password_hash);
        const isValidPassword = await bcrypt.compare(
            password,
            user.password_hash,
        );
        if (!isValidPassword) {
            throw new Error("Email ou senha incorretos.");
        }

        return user;
    }
}
