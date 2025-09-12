'use server';
/**
 * @fileOverview A flow to fetch recent Instagram posts.
 * This is a placeholder and needs to be connected to the Instagram Basic Display API by a developer.
 *
 * - fetchInstagramPosts - Fetches recent Instagram posts.
 * - InstagramPost - The return type for a single Instagram post.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InstagramPostSchema = z.object({
  id: z.string(),
  media_type: z.enum(['IMAGE', 'VIDEO']),
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
    // DEVELOPER NOTE:
    // This is where you would make a call to the Instagram Basic Display API.
    // You will need an access token and to handle the API request and response.
    // The following is placeholder data.

    console.log('Fetching Instagram posts (placeholder data)');
    
    // To use your local video, place it in the `public/videos/` directory.
    // For example, if your video is named `hero-video.mp4`, the `src` should be `/videos/hero-video.mp4`.
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
        media_url: 'https://picsum.photos/seed/insta1/1920/1080',
        caption: 'A great training session tonight!',
        permalink: '#',
      },
      {
        id: '3',
        media_type: 'IMAGE',
        media_url: 'https://picsum.photos/seed/insta2/1920/1080',
        caption: 'Great rolls with the team.',
        permalink: '#',
      },
    ];
  }
);
