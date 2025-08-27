import { Role, User } from "../../../entities/User";
import { BadRequest, Conflict } from "../../../repositories/IErrorRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { IRegisterUserDTO, registerUserSchema } from "./Register_DTO";
import bcrypt from "bcrypt";

// Contém a lógica de negócio do sistema.
export class RegisterUserUseCase {
    constructor(
        private userRepository: MockUserRepository
    ) { }

    async execute(data: IRegisterUserDTO) {
        const userAlreadyExists = await this.userRepository.FindUserById(data.email)
        if (userAlreadyExists) {
            throw new Conflict('Ops! Usuário já cadastrado no nosso sistema');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = new User({...data, password: hashedPassword, role: data.role ?? Role.READER})
        return await this.userRepository.Register(newUser)
    }
}