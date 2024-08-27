import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ExamGenetorLearnerGrammarDTO } from './dtos';
import { examGeneratorUseCase } from './use-cases';

@Injectable()
export class LearnlangService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async examGenetorLeanerGrammar(
    examGenetorLearnerGrammarDTO: ExamGenetorLearnerGrammarDTO,
  ) {
    return await examGeneratorUseCase(this.openai, {
      ammountQuestions: examGenetorLearnerGrammarDTO.ammountQuestions,
      difficulty: examGenetorLearnerGrammarDTO.difficulty,
      grammar: examGenetorLearnerGrammarDTO.grammar,
      topic: examGenetorLearnerGrammarDTO.topic,
      level: examGenetorLearnerGrammarDTO.level,
    });
  }
}
