import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum WorkStatus {
    notStarted = 'not started',
    inProgress = 'in progress',
    inCompleted = 'in completed',
    completed = 'completed',
}

export interface IWork {
    id: number;
    title: string;
    fullName: string;
    firstPhone: string;
    secondPhone: string;
    description: string;
    email: string;
    // images: Image[];
    // specification: Specification;
    status: WorkStatus;
    createAt: Date;
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

    @Column({
        type: 'enum',
        name: 'status',
        nullable: false,
        enum: WorkStatus,
    })
    status: WorkStatus;

    @Column({
        type: 'date',
        name: 'createAt',
    })
    createAt: Date;

    @Column({
        type: 'date',
        name: 'modifiedAt',
    })
    modifiedAt: Date;
}
