import { User } from "../entities/User";

// Interface que define os métodos do repositório de exemplo.
export interface IUserRepository {
    // Soma(num1: number, num2: number): Promise<number>;
    Register(data: User): Promise<User>;
    // FindUserById(email: string): Promise<User | null>;
    FindUserByEmail(email: string): Promise<User | null>;
    FindUserById(id: string): Promise<User | null>;
}