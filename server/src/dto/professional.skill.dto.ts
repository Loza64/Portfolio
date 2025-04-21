/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Length, Max, Min, Matches } from 'class-validator';

export class ProfessionalSkillDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 50)
    @Matches(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Name must be between 1 and 50 characters and must not start with a space.'
    })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0, { message: 'Percentage must be at least 0.' })
    @Max(100, { message: 'Percentage must not exceed 100.' })
    percentage: number;
}  