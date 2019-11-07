import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IWorkerRepository, WorkerRepository } from './worker.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Worker } from './worker.entity';
import { JwtService } from '@nestjs/jwt';

export interface IJwtPayload {
    email: string;
}

export interface IAccessToken {
    accessToken: string;
}

@Injectable()
export class WorkersService {

    constructor(
        @InjectRepository(WorkerRepository)
        private workerRepository: IWorkerRepository,
        private jwtService: JwtService,
    ) {/** NOP */}

    signUp = async (authCredentials: AuthCredentialsDto): Promise<Worker> => {
        return this.workerRepository.signUp(authCredentials);
    }

    signIn = async (authCredentials: AuthCredentialsDto): Promise<IAccessToken> => {
        const worker = await this.workerRepository.validateWorkerPassword(authCredentials);
        if (!worker) {
            throw new UnauthorizedException(`Invalid credentials.`);
        }
        const payload: IJwtPayload = { email: worker.email };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
