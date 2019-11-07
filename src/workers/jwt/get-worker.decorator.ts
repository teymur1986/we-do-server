import { createParamDecorator } from '@nestjs/common';
import { Worker } from '../worker.entity';

export const GetWorker = createParamDecorator((data, req): Worker => {
    return req.worker;
});
