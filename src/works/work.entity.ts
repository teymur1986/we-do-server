import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IWork, WorkStatus } from './work.model';

@Entity()
export class Work extends BaseEntity implements IWork {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'title',
    })
    title: string;

    @Column({
        type: 'varchar',
        name: 'fullName',
    })
    fullName: string;

    @Column({
        type: 'varchar',
        name: 'firstPhone',
    })
    firstPhone: string;

    @Column({
        type: 'varchar',
        name: 'secondPhone',
    })
    secondPhone: string;

    @Column({
        type: 'varchar',
        name: 'description',
    })
    description: string;

    @Column({
        type: 'varchar',
        name: 'email',
    })
    email: string;

    @Column({
        type: 'enum',
        name: 'status',
    })
    status: WorkStatus;

    @Column({
        type: 'datetime',
        name: 'createAt',
    })
    createAt: Date;

    @Column({
        type: 'datetime',
        name: 'modifiedAt',
    })
    modifiedAt: Date;
}
