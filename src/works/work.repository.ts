import { Repository, EntityRepository } from 'typeorm';
import { Work, WorkStatus, IWork } from './work.entity';
import { IFilterWorkDto } from './dto/filter-work.dto';
import { WorkDto } from './dto/create-update-work.dto';
import { NotFoundException } from '@nestjs/common';

export interface IWorksRepository {
    fetchFilteredWorks: (filterWorkDto: IFilterWorkDto) => Promise<IWork[]>;
    fetchWorkById: (i: number) =>  Promise<IWork>;
    fetchWorks: () => Promise<IWork[]>;
    createWork: (d: WorkDto) => Promise<IWork>;
    deleteWork: (i: number) => Promise<number>;
    updateWork: (i: number, c: WorkDto) => Promise<IWork>;
}

@EntityRepository(Work)
export class WorksRepository extends Repository<Work> implements IWorksRepository {

    createWork = async (workDto: WorkDto): Promise<Work> => {
        const { title, fullName, firstPhone, secondPhone, description, email } = workDto;
        const work = new Work();
        const newDate = new Date();
        work.title = title;
        work.fullName = fullName;
        work.firstPhone = firstPhone;
        work.secondPhone = secondPhone;
        work.description = description;
        work.email = email;
        work.status = WorkStatus.notStarted;
        work.createAt = newDate;
        work.modifiedAt = newDate;
        await work.save();
        return work;
    }

    updateWork = async (id: number, createWorkDto: WorkDto): Promise<IWork> => {
        const foundWork = await this.findOne(id);
        if (!foundWork) {
            throw new NotFoundException(`Work with id=${id} wasn't defined.`);
        }
        const { title, fullName, firstPhone, secondPhone, description, email, status } = createWorkDto;
        foundWork.title = title || foundWork.title;
        foundWork.fullName = fullName || foundWork.fullName;
        foundWork.firstPhone = firstPhone || foundWork.firstPhone;
        foundWork.secondPhone = secondPhone || foundWork.secondPhone;
        foundWork.description = description || foundWork.description;
        foundWork.email = email || foundWork.email;
        foundWork.status = status || foundWork.status;
        foundWork.modifiedAt = new Date();
        await foundWork.save();
        return foundWork;
    }

    deleteWork = async (id: number): Promise<number> => {
        const deletedWork = await this.delete(id);
        return deletedWork.affected;
    }

    fetchWorkById = async (id: number): Promise<IWork> => {
        return await this.findOne(id);
    }

    fetchFilteredWorks = async (filterWorkDto: IFilterWorkDto): Promise<IWork[]> => {
        const { status, search } = filterWorkDto;
        const query = this.createQueryBuilder('work');
        if (status) {
            query.andWhere(`work.status = :status`, { status });
        }

        if (search) {
            query.andWhere(`
                (work.title LIKE :search OR
                work.fullName LIKE :search OR
                work.firstPhone LIKE :search OR
                work.secondPhone LIKE :search OR
                work.description LIKE :search OR
                work.email LIKE :search)
            `, { search: `%${search}%` });
        }
        const works = await query.getMany();
        return works;
    }

    fetchWorks = async (): Promise<IWork[]> => {
        return this.find();
    }
}
