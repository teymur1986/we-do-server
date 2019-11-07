import { WorkStatus } from '../work.model';
import { IsNotEmpty } from 'class-validator';

export class WorkDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    fullName: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    firstPhone: string;

    email?: string;
    secondPhone?: string;
    status?: WorkStatus;
}
