import { Injectable, NotFoundException } from '@nestjs/common';
import { IWork } from './work.model';
import { WorkDto } from './dto/create-update-work.dto';
import { FilterWorkDto } from './dto/filter-work.dto';

@Injectable()
export class WorksService {

    createWork = async (createWorkDto: WorkDto): Promise<IWork> => {
        return null;
    }

    updateWork = async (id: number, createWorkDto: WorkDto): Promise<IWork> => {
        return null;
    }

    getWorks = async (): Promise<IWork[]> => {
        return null;
    }

    getFilteredWorks = (filterWorkDto: FilterWorkDto): Promise<IWork[]> => {
        const { status, search } = filterWorkDto;
        return null;
    }

    getWorkById = async (id: number): Promise<IWork> => {
        if (!id) {
            throw new NotFoundException();
        }
        return null;
    }

    deleteWorkById = async (id: number): Promise<number> => {
        if (!id) {
            throw new NotFoundException();
        }
        return id;
    }
}
