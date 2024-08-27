import OpenAI from 'openai';
import { Grammar } from '../dtos/grammar';

interface Options {
  topic: string;
  grammar: Grammar;
  difficulty: 'HARD' | 'MEDIUM' | 'EASY';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  ammountQuestions: number;
}

export const examGeneratorUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { ammountQuestions, difficulty, grammar, level, topic } = options;

  return await openai.chat.completions.create({
    stream: true,
    messages: [
      {
        role: 'system',
        content: `
          You are an expert in evaluations and exam generation. Please create an advanced-level grammar exam in English 
          based on the following specifications provided by the user. The questions should have a logical progression 
          and demonstrate a deep understanding of the topic.

          **Exam Specifications:**
          - **Topic:** ${topic}
          - **Grammar Rule:** ${grammar}
          - **Difficulty:** ${difficulty} of ('HARD' | 'MEDIUM' | 'EASY')
          - **Level:** ${level}
          - **Number of Questions:** ${ammountQuestions}

          **Requirements for Questions:**
          1. The exam should include ${ammountQuestions} questions that assess 
          the understanding of the topic "${topic}" concerning the 
          grammar rule "${grammar}".
          2. The questions should be appropriate for the "${level}" English level.
          3. Each question should have the proper format depending on the evaluation type (e.g., 
          multiple choice, single answer, or open text).
          4. Provide answer options and indicate the correct answer if it's a multiple choice or single answer question.


          Example json output: 

          {
            "title": "Creative and Coherent Exam Title",
            "questions": [
            {
              "title": "Question statement",
              "type": "MULTIPLE" | "UNIQUE",
              "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
              "correctAnswer": "Correct Option"
            }
            ]
          }

          **Exam Format:**
          {
            title: string; // Question statement.
            options?: string[]; // Available options for the question.
            correctAnswer: string; // Correct answer to the question.
          }
          (Continue with the same format for all questions)

          **Additional Instructions:**
          - Include a brief introductory text for each question if needed to help contextualize 
            the situation or the grammar rule.
          - Ensure that the questions are varied and cover different 
            aspects of the selected grammar rule.
        `,
      },
    ],
    model: 'gpt-4o-2024-08-06',
    temperature: 0.3,
    response_format: {
      type: 'json_object',
    },
  });
};
