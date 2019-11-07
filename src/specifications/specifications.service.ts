import { Injectable } from '@nestjs/common';
import { ISpecificationRepository, SpecificationRepository } from './specification.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SpecificationsService {

    constructor(
        @InjectRepository(SpecificationRepository)
        private specificationRepository: ISpecificationRepository,
    ) {/** NOP */}

    fetchSpecifications = async () => {
        return await this.specificationRepository.fetchSpecifications();
    }
}
