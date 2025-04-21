/* eslint-disable prettier/prettier */
import {   
    IsNotEmpty,   
    IsString,   
    Length,   
    Matches   
  } from 'class-validator';  
  
  export class AboutDto {  
      @IsString()  
      @IsNotEmpty()  
      @Matches(/^\d{4}-\d{2}-\d{2}$/, {  
          message: 'Date must be in the format YYYY-MM-DD.'  
      })  
      date: string;  
  
      @IsString()  
      @IsNotEmpty()  
      @Length(5, 50)  
      @Matches(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {  
          message: 'Title must be between 5 and 50 characters and must not start with a space.'  
      })  
      title: string;  
  
      @IsString()  
      @IsNotEmpty()  
      @Length(10, 500)  
      @Matches(/^[A-Za-zÀ-ÿ0-9\s.,!()-]+$/, {  
          message: 'Description must be between 10 and 500 characters and can include letters, numbers, and certain punctuation.'  
      })  
      description: string;  
  }  