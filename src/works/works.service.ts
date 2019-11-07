import { Injectable, NotFoundException } from '@nestjs/common';
import { IWork } from './work.entity';
import { WorkDto } from './dto/create-update-work.dto';
import { FilterWorkDto } from './dto/filter-work.dto';
import { WorksRepository, IWorksRepository } from './work.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WorksService {

    constructor(
        @InjectRepository(WorksRepository)
        private worksRepository: IWorksRepository,
    ) {/** NOP */}

    createWork = async (createWorkDto: WorkDto): Promise<IWork> => {
        return this.worksRepository.createWork(createWorkDto);
    }

    updateWork = async (id: number, createWorkDto: WorkDto): Promise<IWork> => {
        return this.worksRepository.updateWork(id, createWorkDto);
    }

    getWorks = async (): Promise<IWork[]> => {
        return this.worksRepository.fetchWorks();
    }

    getFilteredWorks = (filterWorkDto: FilterWorkDto): Promise<IWork[]> => {
        return this.worksRepository.fetchFilteredWorks(filterWorkDto);
    }

    getWorkById = async (id: number): Promise<IWork> => {
        if (!id) {
            throw new NotFoundException(`The id wasn't defined.`);
        }
        const work = this.worksRepository.fetchWorkById(id);
        if (!work) {
            throw new NotFoundException(`Work with id=${id} wasn't found.`);
        }
        return work;
    }

    deleteWorkById = async (id: number): Promise<number> => {
        if (!id) {
            throw new NotFoundException();
        }
        return this.worksRepository.deleteWork(id);
    }
}
