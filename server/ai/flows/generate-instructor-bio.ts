/**
 * @fileOverview Instructor bio generator.
 *
 * - generateInstructorBio - A function that generates instructor bios.
 * - GenerateInstructorBioInput - The input type for the generateInstructorBio function.
 * - GenerateInstructorBioOutput - The return type for the generateInstructorBio function.
 */

import {ai} from '../genkit';
import {z} from 'genkit';

const GenerateInstructorBioInputSchema = z.object({
  name: z.string().describe('Instructor name'),
  beltRank: z.string().describe('Instructor belt rank'),
  yearsOfExperience: z.number().describe('Years of experience'),
  photoDataUri: z
    .string()
    .optional()
    .describe(
      "A photo of the instructor, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateInstructorBioInput = z.infer<typeof GenerateInstructorBioInputSchema>;

const GenerateInstructorBioOutputSchema = z.object({
  bio: z.string().describe('Generated instructor biography.'),
  pageTitle: z.string().describe('SEO-optimized page title for the instructor bio.'),
});
export type GenerateInstructorBioOutput = z.infer<typeof GenerateInstructorBioOutputSchema>;

export async function generateInstructorBio(input: GenerateInstructorBioInput): Promise<GenerateInstructorBioOutput> {
  return generateInstructorBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInstructorBioPrompt',
  input: {schema: GenerateInstructorBioInputSchema},
  output: {schema: GenerateInstructorBioOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging and SEO-friendly content for martial arts academies.

  Based on the provided information, generate a short and compelling biography for the instructor. The biography should highlight their expertise and experience in Jiu-Jitsu.

  Also, create an SEO-optimized page title that includes the instructor's name and belt rank.

  Here is the instructor's information:
  Name: {{{name}}}
  Belt Rank: {{{beltRank}}}
  Years of Experience: {{{yearsOfExperience}}}
  {{#if photoDataUri}}
  Photo: {{media url=photoDataUri}}
  {{/if}}
  Biography:
  `, 
});

const generateInstructorBioFlow = ai.defineFlow(
  {
    name: 'generateInstructorBioFlow',
    inputSchema: GenerateInstructorBioInputSchema,
    outputSchema: GenerateInstructorBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
