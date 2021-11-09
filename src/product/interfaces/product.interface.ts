import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly owner: string;
  readonly category: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly stock: number;
  readonly createdAt: Date;
}
