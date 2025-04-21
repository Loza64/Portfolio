/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, Matches } from 'class-validator';

export class MessagesDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @Matches(/^(?! )[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/, {
    message:
      'Firstname must be at least 2 characters long and must not start with a space.',
  })
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @Matches(/^(?! )[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/, {
    message:
      'Lastname must be at least 2 characters long and must not start with a space.',
  })
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, {
    message: 'Email format is invalid.',
  })
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber(undefined)
  @Matches(/^\+?[1-9]\d{1,14}([ -]?[\d()]+)*$/, {
    message: 'Phone number is invalid.',
  })
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  @Matches(/^[a-zA-ZÁ-ÿ0-9\s.,()-]+$/, {
    message: 'Message can only contain certain characters.',
  })
  message: string;
}
