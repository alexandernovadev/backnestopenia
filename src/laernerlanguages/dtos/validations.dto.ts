import { IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class ValidationsDto {
  @IsOptional()
  @IsBoolean()
  readonly required?: boolean;

  @IsOptional()
  @IsNumber()
  readonly max?: number;

  @IsOptional()
  @IsNumber()
  readonly min?: number;
}
