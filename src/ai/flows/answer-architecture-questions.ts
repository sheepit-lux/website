// 'use server';

/**
 * @fileOverview An AI agent that answers questions about enterprise architecture.
 *
 * - answerArchitectureQuestion - A function that handles the question answering process.
 * - AnswerArchitectureQuestionInput - The input type for the answerArchitectureQuestion function.
 * - AnswerArchitectureQuestionOutput - The return type for the answerArchitectureQuestion function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerArchitectureQuestionInputSchema = z.object({
  question: z.string().describe('The question about enterprise architecture.'),
});
export type AnswerArchitectureQuestionInput = z.infer<typeof AnswerArchitectureQuestionInputSchema>;

const AnswerArchitectureQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about enterprise architecture.'),
});
export type AnswerArchitectureQuestionOutput = z.infer<typeof AnswerArchitectureQuestionOutputSchema>;

export async function answerArchitectureQuestion(input: AnswerArchitectureQuestionInput): Promise<AnswerArchitectureQuestionOutput> {
  return answerArchitectureQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerArchitectureQuestionPrompt',
  input: {schema: AnswerArchitectureQuestionInputSchema},
  output: {schema: AnswerArchitectureQuestionOutputSchema},
  prompt: `You are an expert in enterprise software architecture.

  Answer the following question about enterprise architecture:

  Question: {{{question}}}
  `,
});

const answerArchitectureQuestionFlow = ai.defineFlow(
  {
    name: 'answerArchitectureQuestionFlow',
    inputSchema: AnswerArchitectureQuestionInputSchema,
    outputSchema: AnswerArchitectureQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
