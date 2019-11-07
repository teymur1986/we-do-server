import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Image } from '../images/image.entity';
import { ISpecification, Specification } from '../specifications/specification.entity';
import { IWorker, Worker } from '../workers/worker.entity';

export interface IWork {
    id: number;
    title: string;
    fullName: string;
    firstPhone: string;
    secondPhone: string;
    description: string;
    email: string;
    images: Image[];
    specification: ISpecification;
    worker: IWorker;
    createdAt: Date;
    modifiedAt: Date;
}

@Entity({
    name: 'work',
})
export class Work extends BaseEntity implements IWork {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'title',
    })
    title: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'fullName',
    })
    fullName: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'firstPhone',
    })
    firstPhone: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'secondPhone',
    })
    secondPhone: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'description',
    })
    description: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'email',
    })
    email: string;

    @OneToMany(type => Image, image => image.work)
    images: Image[];

    @ManyToOne(type => Specification, specification => specification.works)
    specification: ISpecification;

    @ManyToOne(type => Worker, worker => worker.youDo)
    worker: IWorker;

    @Column({
        type: 'date',
        name: 'createAt',
    })
    createdAt: Date;

    @Column({
        type: 'date',
        name: 'modifiedAt',
    })
    modifiedAt: Date;
}
