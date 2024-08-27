import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GptModule } from './gpt/gpt.module';
import { SamAssistantModule } from './sam-assistant/sam-assistant.module';
import { LaernerlanguagesModule } from './laernerlanguages/laernerlanguages.module';

import { LearnlangService } from './laernerlanguages/learnlang.service';
import { LearnlangController } from './laernerlanguages/learnlang.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GptModule,
    SamAssistantModule,
    LaernerlanguagesModule,
  ],
  controllers: [LearnlangController],
  providers: [LearnlangService],
})
export class AppModule {}
