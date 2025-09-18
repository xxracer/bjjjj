import { programs } from '@/lib/data';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NotFoundPage from './NotFound';

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
        description: 'The Fundamentals program is the starting point for your Jiu-Jitsu journey. We focus on the core concepts, positions, and techniques that form the foundation of Jiu-Jitsu.',
        details: ['Beginner-Friendly Environment', 'Step-by-Step Instruction', 'Focus on Safety & Technique', 'Build a Solid Jiu-Jitsu Foundation']
    },
};

export default function ProgramPage() {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === id);
  const details = id ? programDetails[id] : undefined;

  if (!program || !details) {
    return <NotFoundPage />;
  }

  return (
    <div >
        <section >
            {program.image && (
                <img
                    src={program.image.imageUrl}
                    alt={program.title}

                />
            )}
            <div  />
            <div >
                <h1 >
                    {program.title}
                </h1>
            </div>
        </section>

        <section >
            <div >
                 <div >
                    <p >{details.description}</p>
                    <h3 >Program Highlights:</h3>
                     <ul >
                       {details.details.map((item, index) => (
                           <li key={index} >
                               <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                               <span>{item}</span>
                           </li>
                       ))}
                    </ul>
                 </div>
                 <div >
                     <h3 >Ready to Start?</h3>
                     <p >
                         Your first class is on us. Book your free trial today and experience it for yourself.
                     </p>
                    <Button asChild size="lg" >
                        <Link to="/contact">
                        Claim Your Free Class
                        <ArrowRight  />
                        </Link>
                    </Button>
                 </div>
            </div>
        </section>
    </div>
  );
}
