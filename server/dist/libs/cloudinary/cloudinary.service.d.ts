import { Image } from 'src/interfaces/models';
export declare class CloudinaryService {
    constructor();
    uploadImage(file: Express.Multer.File): Promise<Image | Error>;
}
