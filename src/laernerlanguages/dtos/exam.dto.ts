import {
  IsString,
  IsEnum,
  IsNumber,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionDto } from './question.dto';

export class ExamDto {
  @IsOptional()
  @IsString()
  readonly _id?: string;

  @IsString()
  readonly lectureID: string;

  @IsString()
  readonly title: string;

  @IsEnum(['HARD', 'MEDIUM', 'EASY'])
  readonly difficulty: 'HARD' | 'MEDIUM' | 'EASY';

  @IsEnum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
  readonly level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

  @IsNumber()
  readonly score: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  readonly questions: QuestionDto[];

  @IsOptional()
  @IsString()
  readonly createdAt?: string;

  @IsOptional()
  @IsString()
  readonly updatedAt?: string;
}
