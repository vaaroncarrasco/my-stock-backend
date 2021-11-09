import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  passwordConfirm: string;

  @Prop({ required: true })
  passwordChangedAt: Date;

  @Prop({ required: true })
  passwordResetToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
