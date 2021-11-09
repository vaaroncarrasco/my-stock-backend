import { Document } from 'mongoose';
export interface User extends Document {
  role: string;
  photo: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  passwordChangedAt: Date;
  passwordResetToken: string;
}
