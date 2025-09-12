import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

export type Instructor = {
  id: string;
  name: string;
  beltRank: string;
  bio: string;
  image: ImagePlaceholder | undefined;
  yearsOfExperience: number;
};

export const instructors: Instructor[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    beltRank: 'Black Belt',
    yearsOfExperience: 15,
    bio: 'John Doe is a seasoned black belt with over 15 years of experience in Brazilian Jiu-Jitsu. He began his journey with a passion for the "gentle art" and has since competed at national levels. His teaching style focuses on strong fundamentals and practical self-defense applications, making his classes accessible to both beginners and advanced students.',
    image: getImage('instructor-john'),
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    beltRank: 'Brown Belt',
    yearsOfExperience: 8,
    bio: 'Jane Smith, a dedicated brown belt, is known for her technical prowess and patient instruction. With 8 years on the mats, she has a deep understanding of leverage and body mechanics. Jane specializes in coaching the kids\' program, fostering a fun, safe, and disciplined environment for the next generation of grapplers.',
    image: getImage('instructor-jane'),
  },
  {
    id: 'carlos-gracie',
    name: 'Carlos Gracie Jr.',
    beltRank: 'Coral Belt',
    yearsOfExperience: 50,
    bio: 'A living legend, Carlos Gracie Jr. carries the legacy of his family\'s art. As a Coral Belt, his knowledge is vast and profound. He oversees the curriculum at Reign BJJ, ensuring the techniques and philosophies passed down from his father are preserved and taught with the highest standards of excellence.',
    image: getImage('instructor-carlos'),
  },
];

export type ClassInfo = {
  time: string;
  program: 'Adults BJJ' | 'Kids BJJ' | 'Open Mat' | 'No-Gi';
  level: string;
};

export type Schedule = {
  [day: string]: ClassInfo[];
};

export const schedule: Schedule = {
  Monday: [
    { time: '6:00 AM - 7:00 AM', program: 'Adults BJJ', level: 'All Levels' },
    { time: '5:00 PM - 6:00 PM', program: 'Kids BJJ', level: 'Ages 5-12' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults BJJ', level: 'Fundamentals' },
    { time: '7:30 PM - 8:30 PM', program: 'No-Gi', level: 'All Levels' },
  ],
  Tuesday: [
    { time: '12:00 PM - 1:00 PM', program: 'Adults BJJ', level: 'All Levels' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults BJJ', level: 'Advanced' },
    { time: '7:30 PM - 8:30 PM', program: 'Open Mat', level: 'All Levels' },
  ],
  Wednesday: [
    { time: '6:00 AM - 7:00 AM', program: 'Adults BJJ', level: 'All Levels' },
    { time: '5:00 PM - 6:00 PM', program: 'Kids BJJ', level: 'Ages 5-12' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults BJJ', level: 'Fundamentals' },
    { time: '7:30 PM - 8:30 PM', program: 'No-Gi', level: 'All Levels' },
  ],
  Thursday: [
    { time: '12:00 PM - 1:00 PM', program: 'Adults BJJ', level: 'All Levels' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults BJJ', level: 'Advanced' },
    { time: '7:30 PM - 8:30 PM', program: 'Open Mat', level: 'All Levels' },
  ],
  Friday: [
    { time: '6:00 PM - 7:30 PM', program: 'Adults BJJ', level: 'All Levels' },
  ],
  Saturday: [
    { time: '10:00 AM - 11:00 AM', program: 'Kids BJJ', level: 'Ages 5-12' },
    { time: '11:00 AM - 1:00 PM', program: 'Open Mat', level: 'All Levels' },
  ],
  Sunday: [],
};

export const programs = ['All', 'Adults BJJ', 'Kids BJJ', 'No-Gi', 'Open Mat'];


export type Review = {
  name: string;
  rating: number;
  comment: string;
};

export const reviews: Review[] = [
  { name: 'Michael L.', rating: 5, comment: 'Fantastic instruction and a great community. The black belts are incredibly knowledgeable. Highly recommend for all skill levels!' },
  { name: 'Sarah P.', rating: 5, comment: 'My kids love the BJJ program here. The instructors are patient and make learning fun. It\'s been great for their confidence.' },
  { name: 'David C.', rating: 5, comment: 'Clean facility, tough training, and no egos. Reign BJJ is the real deal. The open mats are a great way to test your skills.' },
  { name: 'Emily R.', rating: 5, comment: 'As a woman, I was nervous to start, but everyone was so welcoming. It\'s a safe and empowering environment to train in.' },
  { name: 'James T.', rating: 5, comment: 'I dropped in while on a business trip and was blown away. World-class jiu-jitsu with a friendly, small-town feel. I\'ll be back for sure.' },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  faqs: FaqItem[];
};

export const faqContent: FaqCategory[] = [
  {
    title: 'Adults Jiu Jitsu',
    faqs: [
      { question: 'Do I need to be in shape to start?', answer: 'Not at all! Jiu-Jitsu is a great way to get in shape. Our fundamentals classes are designed to build your fitness and technique from the ground up.' },
      { question: 'What should I wear to my first class?', answer: 'For your first few classes, comfortable athletic wear like a t-shirt and shorts/leggings is perfectly fine. If you decide to continue, you will need to purchase a Gi (uniform).' },
      { question: 'Is Jiu-Jitsu good for self-defense?', answer: 'Yes, BJJ is considered one of the most effective martial arts for real-world self-defense, as it focuses on leverage and technique to control a larger, stronger opponent.' },
      { question: 'How often should I train?', answer: 'We recommend 2-3 times per week for beginners to build a strong foundation and see consistent progress.' },
      { question: 'Are there contracts?', answer: 'We offer flexible membership options, including month-to-month plans. We believe in our program and want you to train with us because you love it, not because you\'re locked in.' },
    ]
  },
  {
    title: 'Kids Jiu Jitsu',
    faqs: [
      { question: 'What age can my child start?', answer: 'Our kids\' program starts at age 5. We group children by age and maturity to ensure they get the most out of their training.' },
      { question: 'Will Jiu-Jitsu make my child violent?', answer: 'No, quite the opposite. We teach discipline, respect, and control. Children learn when it is and isn\'t appropriate to use their techniques.' },
      { question: 'What are the benefits for kids?', answer: 'BJJ improves focus, discipline, confidence, and physical fitness. It also teaches valuable anti-bullying strategies and problem-solving skills.' },
      { question: 'Is it safe for my child?', answer: 'Safety is our top priority. All classes are supervised by experienced instructors, and we teach techniques in a controlled, step-by-step manner.' },
    ]
  }
];
