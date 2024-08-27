import { IsString, IsEnum, IsNumber } from 'class-validator';
import { Grammar } from './grammar';

export class ExamGenetorLearnerGrammarDTO {
  @IsString()
  readonly topic: string;

  @IsString()
  readonly grammar: Grammar;

  @IsEnum(['HARD', 'MEDIUM', 'EASY'])
  readonly difficulty: 'HARD' | 'MEDIUM' | 'EASY';

  @IsEnum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
  readonly level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

  @IsNumber()
  readonly ammountQuestions: number;
}
