import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IWork, Work } from '../works/work.entity';

export interface IImage {
    id: number;
    work: IWork;
    title: string;
    url: string;
    alt: string;
    createdAt: Date;
}

@Entity({
    name: 'image',
})
export class Image extends BaseEntity implements IImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'title',
    })
    title: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'url',
    })
    url: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'alt',
    })
    alt: string;

    @Column({
        type: 'date',
        name: 'createAt',
    })
    createdAt: Date;

    @ManyToOne(type => Work, work => work.images)
    work: IWork;
}
