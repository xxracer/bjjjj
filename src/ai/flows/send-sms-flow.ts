'use server';
/**
 * @fileOverview A flow to send an SMS notification using Twilio.
 *
 * - sendSms - Sends an SMS with the details from the free trial form.
 * - SendSmsInput - The input type for the sendSms function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Twilio } from 'twilio';

const SendSmsInputSchema = z.object({
  name: z.string().describe("The full name of the person who submitted the form."),
  phone: z.string().describe("The phone number of the person."),
  email: z.string().describe("The email address of the person."),
  message: z.string().optional().describe("An optional message from the person."),
});
export type SendSmsInput = z.infer<typeof SendSmsInputSchema>;

export async function sendSms(input: SendSmsInput): Promise<{ success: boolean; error?: string }> {
  return sendSmsFlow(input);
}

const sendSmsFlow = ai.defineFlow(
  {
    name: 'sendSmsFlow',
    inputSchema: SendSmsInputSchema,
    outputSchema: z.object({ success: z.boolean(), error: z.string().optional() }),
  },
  async (input) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_PHONE_NUMBER;
    const to = process.env.TO_PHONE_NUMBER;
    
    if (!accountSid || !authToken || !from || !to) {
      const errorMessage = 'Twilio environment variables are not configured. Please check your .env file.';
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    }

    if (from === 'your_twilio_phone_number' || to === 'your_personal_phone_number') {
        const errorMessage = 'Please replace placeholder phone numbers in your .env file.';
        console.error(errorMessage);
        return { success: false, error: errorMessage };
    }

    const client = new Twilio(accountSid, authToken);
    
    const body = `
      New Free Trial Lead!
      Name: ${input.name}
      Phone: ${input.phone}
      Email: ${input.email}
      Message: ${input.message || 'N/A'}
    `.trim().replace(/  +/g, '');

    try {
      await client.messages.create({ body, from, to });
      return { success: true };
    } catch (error: unknown) {
      console.error('Failed to send SMS via Twilio:', error);
      if (error instanceof Error) {
        return { success: false, error: error.message };
      }
      return { success: false, error: 'An unknown error occurred' };
    }
  }
);
