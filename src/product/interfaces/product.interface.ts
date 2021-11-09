import { Document } from 'mongoose';

export interface Product extends Document {
  readonly owner: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly imageCoverURL: string;
  readonly imagesURLs: [string];
  readonly price: number;
  readonly stock: number;
  readonly createdAt: Date;
}
