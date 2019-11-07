import { Repository, EntityRepository } from 'typeorm';
import { Worker } from './worker.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export interface IWorkerRepository {
    signUp: (a: AuthCredentialsDto) => Promise<Worker>;
    validateWorkerPassword: (a: AuthCredentialsDto) => Promise<Worker>;
}

@EntityRepository(Worker)
export class WorkerRepository extends Repository<Worker> implements IWorkerRepository {

    signUp = async (authCredentials: AuthCredentialsDto): Promise<Worker> => {
        const { email, password, firstName, lastName} = authCredentials;
        const date = new Date();
        const worker = new Worker();
        worker.email = email;
        worker.salt = await bcrypt.genSalt();
        worker.password = await this.hashPassword(password, worker.salt);
        worker.firstName = firstName;
        worker.lastName = lastName;
        worker.createdAt = date;
        worker.modifiedAt = date;
        try {
            await worker.save();
            return worker;
        } catch (e) {
            if (e.code === '23505') {
                throw new InternalServerErrorException('This email cannot be used, try other email.');
            }
            return null;
        }
    }

    validateWorkerPassword = async (authCredentials: AuthCredentialsDto): Promise<Worker> => {
        const { email, password } = authCredentials;
        const worker = await this.findOne({ email });
        if (!worker) {
            throw new UnauthorizedException(`Worker is undefined.`);
        }
        return (worker.validatePassword(password)) ? worker : null;
    }

    private hashPassword = async (password: string, salt: string): Promise<string> => {
        return bcrypt.hash(password, salt);
    }
}
