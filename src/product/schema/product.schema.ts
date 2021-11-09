import { Document, Schema } from 'mongoose';
import { Product } from '../interfaces/product.interface';

export type ProductDocument = Product & Document;

// export const ProductSchema = new Schema({
//   name: {
//     type: String,
//     required: [true, 'product must have a name'],
//     trim: true,
//     maxlength: [40, 'product name max length is 40 characters'],
//     minlength: [10, 'product name min length is 10 characters'],
//   },
//   category: {
//     type: String,
//     required: [true, 'product must have a category'],
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: [true, 'product must have a description'],
//     trim: true,
//   },
//   imageURL: {
//     type: String,
//     required: [true, 'product must have an image'],
//     trim: true,
//   },
//   price: {
//     type: Number,
//     required: [true, 'product must have a price'],
//   },
//   stock: {
//     type: Number,
//     requried: [true, 'stock must be either 0 or more'],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false,
//   },
// });
