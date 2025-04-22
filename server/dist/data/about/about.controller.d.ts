import { Response } from 'express';
import { AboutService } from './about.service';
import { AboutDto } from 'src/dto/about.dto';
export declare class AboutController {
    private readonly service;
    constructor(service: AboutService);
    private responseMessage;
    uploadInfo(body: AboutDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getList(res: Response): Promise<Response<any, Record<string, any>>>;
}
