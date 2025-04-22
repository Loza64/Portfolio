import { About } from '../schemas/about.schema';
import { Model } from 'mongoose';
import { AboutDto } from 'src/dto/about.dto';
export declare class AboutService {
    private readonly about;
    constructor(about: Model<About>);
    create(body: AboutDto): Promise<About>;
    getList(): Promise<About[]>;
}
