import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

// A classe representa um repositorio de exemplo.
// Pode interagir com banco de dados ou APIs.

export let MockUser: User[] = []

export class MockUserRepository implements IUserRepository {
    async Register(data: User): Promise<User> {
        MockUser.push(data)
        return data
    }

    async FindUserByEmail(email: string): Promise<User | null> {
        const user: User = MockUser.find(user => user.email === email) || null

        return user
    }
    async FindUserById(id: string): Promise<User | null> {
        const user: User = MockUser.find(user => user.id === id) || null

        return user
    }
}