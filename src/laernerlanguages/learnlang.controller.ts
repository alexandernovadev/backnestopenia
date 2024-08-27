import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { LearnlangService } from './learnlang.service';
import { ExamGenetorLearnerGrammarDTO } from './dtos';

@Controller('learnlang')
export class LearnlangController {
  constructor(private readonly learnlangService: LearnlangService) {}

  @Post('generate-exam')
  async generateExamStream(
    @Body() examGenetorLearnerGrammarDTO: ExamGenetorLearnerGrammarDTO,
    @Res() res: Response,
  ) {
    const stream = await this.learnlangService.examGenetorLeanerGrammar(
      examGenetorLearnerGrammarDTO,
    );

    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK);

    for await (const chunk of stream) {
      const piece = chunk.choices[0].delta.content || '';
      res.write(piece);
    }

    res.end();
  }
}
