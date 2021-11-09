import {
  validate,
  validateOrReject,
  Contains,
  IsEmail,
  IsDate,
  IsString,
  IsJWT,
  MinLength,
  MaxLength,
} from 'class-validator';
export class CreateUserDTO {
  @IsString()
  role: string;

  @IsString()
  photo: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  passwordConfirm: string;

  @IsDate()
  passwordChangedAt: Date;

  @IsJWT()
  passwordResetToken: string;
}
