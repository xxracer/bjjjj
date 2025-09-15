import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

export type NavItem = {
  href: string;
  label: string;
  submenu?: NavItem[];
};

export const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { 
    href: '/programs', 
    label: 'Programs',
    submenu: [
      { href: '/programs/jiu-jitsu', label: 'Jiu-Jitsu' },
      { href: '/programs/kids-jiu-jitsu', label: 'Kids Jiu-Jitsu' },
      { href: '/programs/competition-training', label: 'Competition Training' },
      { href: '/programs/private-training', label: 'Private Training' },
      { href: '/programs/homeschool-martial-arts', label: 'Homeschool Program' },
      { href: '/sponsorship', label: 'Sponsorship' },
    ]
  },
  { href: '/faq', label: 'FAQ' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/free-trial', label: 'Free Trial Class' },
  {
    href: '#',
    label: 'More',
    submenu: [
      { href: '/affiliate-schools', label: 'Affiliate Schools' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact Us' },
    ]
  }
];

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
    bio: 'John Doe is a seasoned black belt with over 15 years of experience in Jiu-Jitsu. He began his journey with a passion for the "gentle art" and has since competed at national levels. His teaching style focuses on strong fundamentals and practical self-defense applications, making his classes accessible to both beginners and advanced students.',
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
    bio: 'A living legend, Carlos Gracie Jr. carries the legacy of his family\'s art. As a Coral Belt, his knowledge is vast and profound. He oversees the curriculum at Reign, ensuring the techniques and philosophies passed down from his father are preserved and taught with the highest standards of excellence.',
    image: getImage('instructor-carlos'),
  },
];

export type ClassInfo = {
  time: string;
  program: 'Adults' | 'Kids' | 'Open Mat' | 'No-Gi' | 'Fundamentals' | 'Competition' | 'Homeschool';
  level: string;
};

export type Schedule = {
  [day: string]: ClassInfo[];
};

export const schedule: Schedule = {
  Monday: [
    { time: '6:00 AM - 7:00 AM', program: 'Adults', level: 'All Levels' },
    { time: '10:00 AM - 11:30 AM', program: 'Homeschool', level: 'Ages 7-15' },
    { time: '5:00 PM - 6:00 PM', program: 'Kids', level: 'Ages 5-12' },
    { time: '6:00 PM - 7:30 PM', program: 'Fundamentals', level: 'Beginners' },
    { time: '7:30 PM - 8:30 PM', program: 'No-Gi', level: 'All Levels' },
  ],
  Tuesday: [
    { time: '12:00 PM - 1:00 PM', program: 'Adults', level: 'All Levels' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults', level: 'Advanced' },
    { time: '7:30 PM - 8:30 PM', program: 'Competition', level: 'Invite Only' },
  ],
  Wednesday: [
    { time: '6:00 AM - 7:00 AM', program: 'Adults', level: 'All Levels' },
     { time: '10:00 AM - 11:30 AM', program: 'Homeschool', level: 'Ages 7-15' },
    { time: '5:00 PM - 6:00 PM', program: 'Kids', level: 'Ages 5-12' },
    { time: '6:00 PM - 7:30 PM', program: 'Fundamentals', level: 'Beginners' },
    { time: '7:30 PM - 8:30 PM', program: 'No-Gi', level: 'All Levels' },
  ],
  Thursday: [
    { time: '12:00 PM - 1:00 PM', program: 'Adults', level: 'All Levels' },
    { time: '6:00 PM - 7:30 PM', program: 'Adults', level: 'Advanced' },
    { time: '7:30 PM - 8:30 PM', program: 'Competition', level: 'Invite Only' },
  ],
  Friday: [
    { time: '6:00 PM - 7:30 PM', program: 'Open Mat', level: 'All Levels' },
  ],
  Saturday: [
    { time: '10:00 AM - 11:00 AM', program: 'Kids', level: 'Ages 5-12' },
    { time: '11:00 AM - 1:00 PM', program: 'Open Mat', level: 'All Levels' },
  ],
  Sunday: [],
};

export type Program = {
  id: string;
  title: string;
  image: ImagePlaceholder | undefined;
}

export const programs: Program[] = [
    { id: 'jiu-jitsu', title: 'Jiu Jitsu', image: getImage('program-adult') },
    { id: 'kids-jiu-jitsu', title: 'Kids Jiu Jitsu', image: getImage('program-kids') },
    { id: 'competition-training', title: 'Competition Training', image: getImage('program-competition') },
    { id: 'private-training', title: 'Private Training', image: getImage('program-private') },
    { id: 'homeschool-martial-arts', title: 'Homeschool Martial Arts', image: getImage('program-homeschool') },
]

export const scheduleFilters = ['All', 'Adults', 'Kids', 'No-Gi', 'Open Mat', 'Fundamentals', 'Competition', 'Homeschool'];


export type Review = {
  name: string;
  rating: number;
  comment: string;
};

export const reviews: Review[] = [
  { name: 'Michael L.', rating: 5, comment: 'Fantastic instruction and a great community. The black belts are incredibly knowledgeable. Highly recommend for all skill levels!' },
  { name: 'Sarah P.', rating: 5, comment: 'My kids love the Jiu Jitsu program here. The instructors are patient and make learning fun. It\'s been great for their confidence.' },
  { name: 'David C.', rating: 5, comment: 'Clean facility, tough training, and no egos. Reign Jiu Jitsu is the real deal. The open mats are a great way to test your skills.' },
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
    title: 'General',
    faqs: [
      { question: 'What is Reign Jiu Jitsu and where is it located in Katy, TX?', answer: 'Reign Jiu Jitsu is a premier martial arts academy located in the heart of Katy, Texas, specializing in Jiu Jitsu for all ages and skill levels.' },
      { question: 'Do you offer a free trial class?', answer: 'Yes! We encourage everyone to experience a class for themselves. You can book your free trial class directly through our website.' },
      { question: 'What programs do you offer for kids and adults?', answer: 'We offer a wide range of programs including Kids Jiu Jitsu, a Homeschool program, Adult Fundamentals, Advanced classes, and Competition Training.' },
      { question: 'How do I schedule my first class?', answer: 'You can schedule your free trial class by filling out the form on our "Free Trial" page, or by giving us a call. We\'ll help you find a class time that works for you.' },
      { question: 'What should I bring to my first class?', answer: 'For your first class, please wear comfortable athletic clothing like a t-shirt and shorts or leggings. We will provide a loaner Gi (uniform) if needed. Also, bring a water bottle.' },
    ]
  },
  {
    title: 'Kids Program',
    faqs: [
      { question: 'At what age can my child start Jiu Jitsu?', answer: 'Our kids\' program is designed for children starting at age 5. We have different classes grouped by age to ensure a safe and productive learning environment.' },
      { question: 'Do you offer homeschool-friendly programs?', answer: 'Absolutely. We have a dedicated Homeschool Jiu Jitsu program that serves as a great physical education and social outlet for homeschooled children in the Katy area.' },
      { question: 'Is Jiu Jitsu safe for children?', answer: 'Yes, safety is our number one priority. Our instructors are highly experienced in teaching children, and all training is conducted on padded mats in a supervised environment.' },
    ]
  },
  {
    title: 'Competition',
    faqs: [
        { question: 'Who can join the competition team?', answer: 'Our competition team is for dedicated students who wish to test their skills at local and national tournaments. Access is typically by invitation from our head instructors based on skill, attendance, and attitude.'},
        { question: 'How often does Reign Jiu Jitsu attend tournaments?', answer: 'Our team actively competes throughout the year. We regularly participate in tournaments across Texas and support our athletes who travel for major national and international events.'},
    ]
  },
  {
    title: 'Private Lessons',
    faqs: [
        { question: 'How do private lessons work?', answer: 'Private lessons are one-on-one training sessions with an instructor, tailored to your specific goals. They are the fastest way to accelerate your learning and refine your technique.'},
        { question: 'Can beginners book one-on-one training?', answer: 'Yes, private lessons are highly recommended for beginners. They provide a fantastic opportunity to build a strong foundation and gain confidence before joining group classes.'},
    ]
  }
];

export const facilityImages = [
    getImage('facility-1'),
    getImage('facility-2'),
    getImage('facility-3'),
    getImage('facility-4'),
].filter(Boolean) as ImagePlaceholder[];


export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnailUrl: string;
  url: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  { id: 'yt-1', title: 'De La Riva Guard Sweep Technique', thumbnailUrl: 'https://picsum.photos/seed/yt1/1280/720', url: 'https://youtube.com' },
  { id: 'yt-2', title: 'Kids Class Highlights - Fun & Games', thumbnailUrl: 'https://picsum.photos/seed/yt2/1280/720', url: 'https://youtube.com' },
  { id: 'yt-3', title: 'How to Tie Your Jiu Jitsu Belt', thumbnailUrl: 'https://picsum.photos/seed/yt3/1280/720', url: 'https://youtube.com' },
  { id: 'yt-4', title: 'Reign Competition Team Highlights', thumbnailUrl: 'https://picsum.photos/seed/yt4/1280/720', url: 'https://youtube.com' },
]

export type HeroCarouselItem = {
  id: string;
  type: 'video' | 'image';
  src: string;
  alt: string;
  imageHint?: string;
}

// INSTRUCTIONS FOR THE USER:
// To use your local video, place it in the `public/videos/` directory.
// For example, if your video is named `hero-video.mp4`, the `src` should be `/videos/hero-video.mp4`.
// The Instagram images are placeholders. A developer will need to connect the `fetchInstagramPosts` flow to the Instagram API.
export const heroCarouselContent: HeroCarouselItem[] = [
  { id: 'hero-1', type: 'video', src: '/videos/hero-video.mp4', alt: 'Jiu Jitsu highlight video' },
  { id: 'hero-2', type: 'image', src: 'https://picsum.photos/seed/insta1/1920/1080', alt: 'Jiu Jitsu class in session', imageHint: 'jiu jitsu class' },
  { id: 'hero-3', type: 'image', src: 'https://picsum.photos/seed/insta2/1920/1080', alt: 'Two people rolling on the mats', imageHint: 'jiu jitsu roll' }
]
