import {
  IsString,
  IsEnum,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ValidationsDto } from './validations.dto';

export class QuestionDto {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly title: string;

  @IsEnum(['MULTIPLE', 'UNIQUE', 'OPENTEXT'])
  readonly type: 'MULTIPLE' | 'UNIQUE' | 'OPENTEXT';

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly options?: string[];

  @IsString()
  readonly correctAnswer: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ValidationsDto)
  readonly validations?: ValidationsDto;
}
