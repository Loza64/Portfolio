/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Max, Min, IsPositive, IsInt } from "class-validator";  

export class TechnicalSkillDto {  
    @IsString()  
    @IsNotEmpty()  
    @Max(50)
    name: string;  

    @IsString()
    @IsNotEmpty()
    @Max(200)
    type:string;

    @IsNumber()  
    @IsNotEmpty()  
    @IsPositive() 
    @IsInt()
    @Min(0)
    @Max(100)
    percentage: number;  
}  