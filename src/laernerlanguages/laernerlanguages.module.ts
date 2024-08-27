import { Module } from '@nestjs/common';
import { LearnlangController } from './learnlang.controller';
import { LearnlangService } from './learnlang.service';

@Module({
  controllers: [LearnlangController],
  providers: [LearnlangService],
})
export class LaernerlanguagesModule {}
