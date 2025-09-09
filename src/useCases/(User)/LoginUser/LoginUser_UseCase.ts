import { NotFound, Unauthorized } from "../../../repositories/IErrorRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { TokensRepository } from "../../../repositories/implementations/TokenRepository";
import { ITokenRepository } from "../../../repositories/ITokenRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILoginUserDTO } from "./LoginUserDTO";
import bcrypt from "bcrypt";

export class LoginUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tokenRepository: ITokenRepository,
  ) {}

  async execute(data: ILoginUserDTO) {
    const userAlreadyExists = await this.userRepository.FindUserByEmail(
      data.email
    );

    if (!userAlreadyExists) {
      throw new NotFound("Ops! Usuário não encontrado em nosso sistema");
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      userAlreadyExists.password
    );

    if (!isPasswordValid) {
      throw new Unauthorized("Senha inválida");
    }

    const accessToken = await this.tokenRepository.signAccess({
      id: userAlreadyExists.id,
      email: userAlreadyExists.email,
    });
    const refreshToken = await this.tokenRepository.signRefresh({
      id: userAlreadyExists.id,
      email: userAlreadyExists.email,
    });

    return { accessToken, refreshToken }
  }
}
