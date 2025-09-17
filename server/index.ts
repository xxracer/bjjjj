import express from 'express';
import cors from 'cors';

import { generateInstructorBio } from './ai/flows/generate-instructor-bio';
import { generateFAQContent } from './ai/flows/generate-faq-content';
import { fetchInstagramPosts } from './ai/flows/fetch-instagram-posts';
import { sendSms } from './ai/flows/send-sms-flow';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Route for generating instructor bio
app.post('/api/generate-instructor-bio', async (req, res) => {
  try {
    const result = await generateInstructorBio(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Route for generating FAQ content
app.post('/api/generate-faq-content', async (req, res) => {
  try {
    const result = await generateFAQContent(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Route for fetching Instagram posts
app.get('/api/fetch-instagram-posts', async (req, res) => {
  try {
    const result = await fetchInstagramPosts();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Route for sending SMS
app.post('/api/send-sms', async (req, res) => {
  try {
    const result = await sendSms(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
