import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IWork, Work } from '../works/work.entity';

export interface ISpecification {
    id: number;
    name: string;
    works: IWork[];
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

    @OneToMany(type => Work, work => work.specification)
    works: IWork[];
}
