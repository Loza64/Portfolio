/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Image } from 'src/interfaces/models';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {

    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }

    async uploadImage(file: Express.Multer.File): Promise<Image | Error> {
        return new Promise((resolve, reject) => {
            const upload_stream = cloudinary.uploader.upload_stream(
                { resource_type: 'auto',folder: 'PORTFOLIO' },
                (error, result) => {
                    if (error) {
                        reject(new Error(error.message)); 
                    } else {
                        resolve({
                            url: result?.url || '',
                            public_id: result?.public_id || '',
                        });
                    }
                },
            );
            const bufferStream = new Readable();
            bufferStream.push(file.buffer);
            bufferStream.push(null);
            
            bufferStream.pipe(upload_stream);
        })
    }
};