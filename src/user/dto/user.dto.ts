export class CreateUserDTO {
  role: string;
  photo: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  passwordChangedAt: Date;
  passwordResetToken: string;
}
