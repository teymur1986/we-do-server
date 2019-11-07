import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, Unique } from 'typeorm';
import { Image } from '../images/image.entity';
import { IWork, Work } from '../works/work.entity';
import { IAppointment, Appointment } from '../appointment/appointment.entity';

export interface IWorker {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    birthDate: Date;
    youDo: IWork[];
    weDo: IAppointment[];
    profileImage: Image;
    privatePhone: string;
    salt: string;
    createdAt: Date;
    modifiedAt: Date;
}

@Entity({
    name: 'worker',
})
@Unique(['email'])
export class Worker extends BaseEntity implements IWorker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'email',
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'password',
    })
    password: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'firstName',
    })
    firstName: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'lastName',
    })
    lastName: string;

    @Column({
        type: 'int',
        nullable: true,
        name: 'age',
    })
    age: number;

    @Column({
        type: 'date',
        nullable: true,
        name: 'birthDate',
    })
    birthDate: Date;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'privatePhone',
    })
    privatePhone: string;

    @Column({
        type: 'varchar',
        name: 'salt',
    })
    salt: string;

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

    @OneToOne(type => Image)
    @JoinColumn()
    profileImage: Image;

    @OneToMany(type => Work, work => work.worker)
    youDo: IWork[];

    @OneToMany(type => Appointment, appointment => appointment.worker)
    weDo: IAppointment[];
}
