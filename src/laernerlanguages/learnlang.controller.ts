import { Controller, Post, Body } from '@nestjs/common';
import { LearnlangService } from './learnlang.service';
import { ExamGenetorLearnerGrammarDTO } from './dtos';

@Controller('learnlang')
export class LearnlangController {
  constructor(private readonly learnlangService: LearnlangService) {}

  @Post('generate-exam')
  async generateExam(
    @Body() examGenetorLearnerGrammarDTO: ExamGenetorLearnerGrammarDTO,
  ) {
    return await this.learnlangService.examGenetorLeanerGrammar(
      examGenetorLearnerGrammarDTO,
    );
  }
}
