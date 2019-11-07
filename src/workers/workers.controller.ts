/**
 * Created by: Teymur Tartakovsky
 * Date of creation: 07/11/2019
 * The (worker) controller have to handle CRUD of workers and manage authorization process.
 */
import { Controller } from '@nestjs/common';
import { WorkersService } from './workers.service';

@Controller('workers')
export class WorkersController {
    constructor(
        private workersService: WorkersService,
    ) {/** NOP */}
}
