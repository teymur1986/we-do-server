import { IsNotEmpty } from 'class-validator';
import { Optional } from '@nestjs/common';

export class ImageDto {

    @IsNotEmpty()
    url: string;

    @Optional()
    title: string;

    @Optional()
    alt: string;
}
