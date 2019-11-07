/**
 * Created by: Teymur Tartakovsky
 * Date of creation: 07/11/2019
 * The (worker) controller have to handle CRUD of workers and manage authorization process and authentication.
 */
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { Worker } from './worker.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('workers')
export class WorkersController {
    constructor(
        private workersService: WorkersService,
    ) {/** NOP */}

    @Post('/signup')
    signUp(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    ): Promise<Worker> {
        return this.workersService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    ): Promise<Worker> {
        return this.workersService.signIn(authCredentialsDto);
    }
}
