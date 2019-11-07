import { WorkStatus } from '../work.entity';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export interface IFilterWorkDto {
    status: WorkStatus;
    search: string;
}

export class FilterWorkDto implements IFilterWorkDto {
    @IsNotEmpty()
    @IsOptional()
    @IsIn([
        WorkStatus.notStarted,
        WorkStatus.inProgress,
        WorkStatus.inCompleted,
        WorkStatus.completed,
    ])
    status: WorkStatus;

    @IsNotEmpty()
    @IsOptional()
    search: string;
}
