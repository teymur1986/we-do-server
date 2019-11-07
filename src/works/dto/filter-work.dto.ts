import { WorkStatus } from '../work.model';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class FilterWorkDto {
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
