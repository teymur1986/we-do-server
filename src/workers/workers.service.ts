import { Injectable } from '@nestjs/common';
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
}
