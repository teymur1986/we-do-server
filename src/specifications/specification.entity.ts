import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IWork, Work } from '../works/work.entity';

export enum SpecificationGroup {
    movableProperty = 'Movables Property',
    immovableProperty = 'Immovable Property',
    health = 'Health',
    sport = 'Sport',
    entertainment = 'Entertainment',
}

export interface ISpecification {
    id?: number;
    name: string;
    group: SpecificationGroup;
    works?: IWork[];
}

@Entity({
    name: 'specification',
})
export class Specification extends BaseEntity implements ISpecification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'name',
    })
    name: string;

    @Column({
        type: 'enum',
        name: 'group',
        nullable: false,
        enum: SpecificationGroup,
    })
    group: SpecificationGroup;

    @OneToMany(type => Work, work => work.specification)
    works: IWork[];
}
