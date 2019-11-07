import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IJwtPayload } from '../workers.service';
import { WorkerRepository, IWorkerRepository } from '../worker.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(WorkerRepository)
        private workerRepository: IWorkerRepository,
    ) {
        super({
            jstFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'we-do-you-do',
        });
    }

    async validate(payload: IJwtPayload) {
        const { email } = payload;
        return await this.workerRepository.fetchWorkerByEmail(email);
    }
}
