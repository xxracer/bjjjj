import { programs } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const programDetails: { [key: string]: { description: string, details: string[] } } = {
    'kids': {
        description: 'Our Kids Jiu Jitsu program is designed to be fun, engaging, and educational. We teach discipline, respect, and confidence in a safe and supportive environment.',
        details: ['Anti-Bullying Strategies', 'Improved Focus & Concentration', 'Physical Fitness & Coordination', 'Social Skills & Teamwork']
    },
    'homeschool': {
        description: 'A perfect physical education supplement for homeschooled children. Our program focuses on Jiu-Jitsu fundamentals, physical fitness, and social interaction.',
        details: ['Structured PE Curriculum', 'Socialization with Peers', 'Builds Confidence and Discipline', 'Weekday Morning Classes']
    },
    'competition': {
        description: 'For those looking to test their skills in a competitive setting. Our competition team receives advanced training, strategic coaching, and dedicated support.',
        details: ['Advanced Sparring Sessions', 'Sport-Specific Conditioning', 'Tournament Strategy & Mindset', 'Coached by Black Belts']
    },
    'private-lessons': {
        description: 'Accelerate your learning with one-on-one instruction. Private lessons are tailored to your specific goals, challenges, and learning style.',
        details: ['Personalized Curriculum', 'Flexible Scheduling', 'Accelerated Skill Development', 'Ideal for All Levels']
    },
    'adult': {
        description: 'Our Adult Jiu Jitsu program is for everyone, from the complete beginner to the seasoned competitor. Learn self-defense, get in shape, and join an amazing community.',
        details: ['Classes for All Skill Levels', 'Improve Strength & Conditioning', 'Practical Self-Defense Skills', 'Supportive Community']
    },
    'fundamentals': {
        description: 'The Fundamentals program is the starting point for your Jiu-Jitsu journey. We focus on the core concepts, positions, and techniques that form the foundation of BJJ.',
        details: ['Beginner-Friendly Environment', 'Step-by-Step Instruction', 'Focus on Safety & Technique', 'Build a Solid BJJ Foundation']
    },
};


export default function ProgramPage({ params }: { params: { id: string } }) {
  const program = programs.find((p) => p.id === params.id);
  const details = programDetails[params.id];

  if (!program || !details) {
    notFound();
  }

  return (
    <div className="bg-white">
        <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
            {program.image && (
                <Image
                    src={program.image.imageUrl}
                    alt={program.title}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={program.image.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
                    {program.title}
                </h1>
            </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                 <div className="prose prose-lg max-w-none text-card-foreground">
                    <p className="lead text-xl">{details.description}</p>
                    <h3 className="font-headline mt-8">Program Highlights:</h3>
                     <ul className="space-y-2">
                       {details.details.map((item, index) => (
                           <li key={index} className="flex items-center gap-3">
                               <svg className="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                               <span>{item}</span>
                           </li>
                       ))}
                    </ul>
                 </div>
                 <div className="bg-card p-8 rounded-lg shadow-lg">
                     <h3 className="text-2xl font-bold font-headline mb-4 text-center">Ready to Start?</h3>
                     <p className="text-muted-foreground text-center mb-6">
                         Your first class is on us. Book your free trial today and experience it for yourself.
                     </p>
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/contact">
                        Claim Your Free Class
                        <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                 </div>
            </div>
        </section>
    </div>
  );
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}
