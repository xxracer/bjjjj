'use server';

/**
 * @fileOverview Generates FAQ content for different program types using GenAI.
 *
 * - generateFAQContent - A function to generate FAQ content.
 * - GenerateFAQContentInput - The input type for the generateFAQContent function.
 * - GenerateFAQContentOutput - The return type for the generateFAQContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFAQContentInputSchema = z.object({
  topic: z
    .string()
    .describe('The topic for which to generate FAQ content (e.g., Kids Jiu Jitsu, Adults BJJ).'),
});
export type GenerateFAQContentInput = z.infer<typeof GenerateFAQContentInputSchema>;

const GenerateFAQContentOutputSchema = z.object({
  faqContent: z.string().describe('The generated FAQ content in a structured format.'),
});
export type GenerateFAQContentOutput = z.infer<typeof GenerateFAQContentOutputSchema>;

export async function generateFAQContent(input: GenerateFAQContentInput): Promise<GenerateFAQContentOutput> {
  return generateFAQContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFAQContentPrompt',
  input: {schema: GenerateFAQContentInputSchema},
  output: {schema: GenerateFAQContentOutputSchema},
  prompt: `You are an expert in Jiu Jitsu program information.

  Generate a list of frequently asked questions and their answers for the following topic:

  Topic: {{{topic}}}

  Format the FAQ content in a structured format, with each question and answer clearly delineated.
  Each question should be relevant and helpful for potential students.
  Include a variety of questions to cover different aspects of the program.
  The FAQ should have at least 5 questions.
  `,
});

const generateFAQContentFlow = ai.defineFlow(
  {
    name: 'generateFAQContentFlow',
    inputSchema: GenerateFAQContentInputSchema,
    outputSchema: GenerateFAQContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
