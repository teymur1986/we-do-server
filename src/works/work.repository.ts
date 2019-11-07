import { Repository, EntityRepository } from 'typeorm';
import { Work } from './work.entity';

@EntityRepository(Work)
export class WorksRepository extends Repository<Work> {

}
