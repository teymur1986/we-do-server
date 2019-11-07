import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { IWork, Work } from '../works/work.entity';
import { IWorker, Worker } from '../workers/worker.entity';

export enum AppointmentStatus {
    notStarted = 'not started',
    inProgress = 'in progress',
    inCompleted = 'in completed',
    completed = 'completed',
}

export interface IAppointment {
    id: number;
    work: IWork;
    worker: IWorker;
    date: Date;
    status: AppointmentStatus;
    createdAt: Date;
    modifiedAt: Date;
}

@Entity({
    name: 'appointment',
})
export class Appointment extends BaseEntity implements IAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Work)
    @JoinColumn()
    work: IWork;

    @ManyToOne(type => Worker, worker => worker.weDo)
    worker: IWorker;

    @Column({
        type: 'date',
        name: 'date',
    })
    date: Date;

    @Column({
        type: 'enum',
        name: 'status',
        nullable: false,
        enum: AppointmentStatus,
    })
    status: AppointmentStatus;

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
