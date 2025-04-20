/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { About } from '../schemas/about.schema';
import { Model } from 'mongoose';
import { AboutDto } from 'src/dto/about.dto';

@Injectable()
export class AboutService {
    constructor(@InjectModel(About.name) private readonly about: Model<About>) { }

    async create(body: AboutDto): Promise<About> {
        try {
            const upload = new this.about(body);
            return await upload.save();
        } catch (error: unknown) {
            if (error instanceof Error && error.name === 'ValidationError') {
                throw new InternalServerErrorException('Error de validación al guardar los datos');
            }
            throw new InternalServerErrorException('Error interno del servidor al crear el recurso');
        }
    }

    async getList(): Promise<About[]> {
        try {
            return await this.about.find();
        } catch (error: unknown) {

            if (error instanceof Error && error.name === 'ValidationError') {
                throw new InternalServerErrorException('Error de validación al guardar los datos');
            }
            throw new InternalServerErrorException('Error interno del servidor al obtener la lista');
        }
    }
}  