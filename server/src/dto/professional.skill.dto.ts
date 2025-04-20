/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from "class-validator";

export class ProfessionalSkillDto {
    @IsNotEmpty()
    @IsString()
    @Length(50)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Max(100)
    @Min(0)
    percentage: number;
}