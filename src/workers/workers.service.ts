import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IWorkerRepository, WorkerRepository } from './worker.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Worker } from './worker.entity';

@Injectable()
export class WorkersService {

    constructor(
        @InjectRepository(WorkerRepository)
        private workerRepository: IWorkerRepository,
    ) {/** NOP */}

    signUp = async (authCredentials: AuthCredentialsDto): Promise<Worker> => {
        return this.workerRepository.signUp(authCredentials);
    }

    signIn = async (authCredentials: AuthCredentialsDto): Promise<Worker> => {
        const worker = await this.workerRepository.validateWorkerPassword(authCredentials);
        if (!worker) {
            throw new UnauthorizedException(`Invalid credentials.`);
        }
        return worker;
    }
}
