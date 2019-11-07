import { Repository, EntityRepository } from 'typeorm';
import { Specification, ISpecification, SpecificationGroup } from './specification.entity';
import { Specifications } from '../dataConfiguration/defaultSpecifications';

export interface ISpecificationRepository {
    fetchSpecifications: () => Promise<Specification[]>;
}

@EntityRepository(Specification)
export class SpecificationRepository extends Repository<Specification> implements ISpecificationRepository {

    fetchSpecifications = async (): Promise<Specification[]> => {
        const specifications = await this.find();
        if (!Array.isArray(specifications) || !specifications.length) {
            const sLength = Specifications.length - 1;
            const queryData = Specifications
                .reduce((acc: string, current: ISpecification, i: number) => {
                    acc = acc + `('${current.name}', '${current.group}')${ (i < sLength) ? ',' : ''} `;
                    return acc;
                }, '');
            await this.query(`INSERT INTO specification (name, "group") VALUES ${queryData}`);
            return await this.find();
        }
        return specifications;
    }

}
