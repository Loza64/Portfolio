/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 500)
  description: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 500)
  url: string | null;
}
