/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length, Matches, } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  @Matches(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
    message: 'Title must be between 2 and 50 characters and must not start with a space.'
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 500)
  @Matches(/^[A-Za-zÀ-ÿ0-9\s.,!()-]+$/, {
    message: 'Description must be between 10 and 500 characters and can include letters, numbers, and certain punctuation.'
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(https?:\/\/[^\s$.?#].[^\s]*)?$/, {
    message: 'URL must be a valid URL format.'
  })
  url: string | null;
}  