import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { WorksService } from './works.service';
import { IWork } from './work.entity';
import { WorkDto } from './dto/create-update-work.dto';
import { FilterWorkDto } from './dto/filter-work.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('works')
export class WorksController {

    constructor(
        private worksService: WorksService,
    ) {/** NOP */}

    @Get()
    async getWorks(
        @Query(ValidationPipe) filterWorkDto: FilterWorkDto,
    ): Promise<IWork[]> {
        if (filterWorkDto && Object.keys(filterWorkDto).length) {
            return await this.worksService.getFilteredWorks(filterWorkDto);
        }
        return await this.worksService.getWorks();
    }

    @Get('/:id')
    async getWorkById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<IWork> {
        return await this.worksService.getWorkById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard())
    async postCreateWork(
        @Body() createWorkDto: WorkDto,
    ): Promise<IWork> {
        return await this.worksService.createWork(createWorkDto);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard())
    async updateWork(
        @Param('id') id: number,
        @Body() createWorkDto: WorkDto,
    ): Promise<IWork> {
        return await this.worksService.updateWork(id, createWorkDto);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    async deleteWorkById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<number> {
        return await this.worksService.deleteWorkById(id);
    }
}
