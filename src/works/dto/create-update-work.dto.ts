import { IsNotEmpty } from 'class-validator';
import { WorkStatus } from '../work.entity';
import { Optional } from '@nestjs/common';

export class WorkDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    fullName: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    firstPhone: string;

    @Optional()
    email?: string;
    @Optional()
    secondPhone?: string;
    @Optional()
    status?: WorkStatus;
}
