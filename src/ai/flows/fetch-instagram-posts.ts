'use server';
/**
 * @fileOverview A flow to fetch recent Instagram posts.
 * This file contains the logic to connect to the Instagram Basic Display API.
 *
 * - fetchInstagramPosts - Fetches recent Instagram posts.
 * - InstagramPost - The return type for a single Instagram post.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InstagramPostSchema = z.object({
  id: z.string(),
  media_type: z.enum(['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']),
  media_url: z.string(),
  caption: z.string().optional(),
  permalink: z.string(),
});
export type InstagramPost = z.infer<typeof InstagramPostSchema>;

const InstagramResponseSchema = z.array(InstagramPostSchema);

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  return fetchInstagramPostsFlow();
}

const fetchInstagramPostsFlow = ai.defineFlow(
  {
    name: 'fetchInstagramPostsFlow',
    inputSchema: z.void(),
    outputSchema: InstagramResponseSchema,
  },
  async () => {
    // DEVELOPER INSTRUCTIONS:
    // To connect your real Instagram account, you need a long-lived access token
    // from the Instagram Basic Display API.

    // 1. Get an Access Token:
    //    - Go to https://developers.facebook.com/ and create an app.
    //    - Add the "Instagram Basic Display" product.
    //    - Authenticate with your Instagram account to generate a short-lived token.
    //    - Exchange the short-lived token for a long-lived one (lasts 60 days).
    //    - See Instagram's official guide: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started

    // 2. Store Your Token Securely:
    //    - Create a file named `.env.local` in the root of your project.
    //    - Add your token to this file like this:
    //      INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here

    // 3. Enable the API call below:
    //    - Uncomment the `try/catch` block below and remove the placeholder data.
    
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      console.warn('INSTAGRAM_ACCESS_TOKEN not found. Using placeholder data. See instructions in src/ai/flows/fetch-instagram-posts.ts');
      
      // --- START OF PLACEHOLDER DATA (DELETE THIS WHEN YOU HAVE A TOKEN) ---
      const localVideoUrl = '/videos/hero-video.mp4'; 
      return [
        {
          id: '1',
          media_type: 'VIDEO',
          media_url: localVideoUrl,
          caption: 'Jiu Jitsu highlight video',
          permalink: '#',
        },
        {
          id: '2',
          media_type: 'IMAGE',
          media_url: 'https://picsum.photos/seed/insta1/1080/1080',
          caption: 'A great training session tonight!',
          permalink: '#',
        },
        {
          id: '3',
          media_type: 'IMAGE',
          media_url: 'https://picsum.photos/seed/insta2/1080/1080',
          caption: 'Great rolls with the team.',
          permalink: '#',
        },
      ];
      // --- END OF PLACEHOLDER DATA ---
    }
    
    /*
    // --- UNCOMMENT THIS BLOCK TO USE THE REAL INSTAGRAM API ---
    try {
      const fields = 'id,media_type,media_url,caption,permalink';
      const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to fetch Instagram posts:', errorData);
        throw new Error('Failed to fetch Instagram posts.');
      }
      
      const json = await response.json();
      return json.data.slice(0, 3); // Return the 3 most recent posts

    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      // Return an empty array or handle the error as you see fit
      return [];
    }
    */
   
    // This return is just to satisfy TypeScript while the API block is commented out.
    // You can remove it when you uncomment the block above.
    return [];
  }
);
