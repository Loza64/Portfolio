/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Max, Min, IsPositive, IsInt, Matches } from 'class-validator';

export class TechnicalSkillDto {
    @IsString()
    @IsNotEmpty()
    @Max(50)
    @Matches(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Name must be up to 50 characters and must not start with a space.'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @Max(200)
    @Matches(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Type must be up to 200 characters and must not start with a space.'
    })
    type: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    @Min(0, { message: 'Percentage must be at least 0.' })
    @Max(100, { message: 'Percentage must not exceed 100.' })
    percentage: number;
}  