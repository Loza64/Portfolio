/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length } from "class-validator";

export class AboutDto {
    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    @Length(5, 50)
    title: string;

    @IsString()
    @IsNotEmpty()
    @Length(10, 500)
    description: string;
}