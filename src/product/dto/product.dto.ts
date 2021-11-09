import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsDate,
  Min,
  Max,
  IsString,
  MinLength,
  MaxLength,
  IsIn,
  IsArray,
} from 'class-validator';
export class CreateProductDTO {
  @IsIn(['user', 'admin'])
  @IsString()
  owner: string;

  @IsString()
  @MinLength(5)
  @MaxLength(40)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(40)
  category: string;

  @IsString()
  @MinLength(1)
  @MaxLength(40)
  description: string;

  @IsString()
  imageCoverURL: string;

  @IsArray()
  @IsString({ each: true })
  imagesURLs: [string];

  @IsInt()
  @Min(0)
  @Max(999999999)
  price: number;

  @IsInt()
  @Min(0)
  @Max(999999999)
  stock: number;

  @IsDate()
  createdAt: Date;
}
