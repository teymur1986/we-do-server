import { Controller, Get } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';

@Controller('specifications')
export class SpecificationsController {

    constructor(
        private specificationsService: SpecificationsService,
    ) {/** NOP */}

    // GET ALL SPECIFICATIONS
    @Get()
    getSpecifications() {
        return this.specificationsService.fetchSpecifications();
    }

}
