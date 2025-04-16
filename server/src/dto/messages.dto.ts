import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class MessagesDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  message: string;
}
