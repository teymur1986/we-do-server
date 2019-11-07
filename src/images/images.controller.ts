import { Controller, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {

    @Post()
    @UseInterceptors(FilesInterceptor('files'))
    uploadFile(@UploadedFiles() file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }

}
