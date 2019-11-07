import { IsNotEmpty, IsOptional } from 'class-validator';

export interface IFilterWorkDto {
    search: string;
}

export class FilterWorkDto implements IFilterWorkDto {
    @IsNotEmpty()
    @IsOptional()
    search: string;
}
