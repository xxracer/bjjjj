import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { instructors } from '@/lib/data';
import Link from 'next/link';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'insta-1');

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">About Reign & Our Method</h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
          Discover the philosophy and passion behind our academy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <div className="prose prose-lg max-w-none text-card-foreground">
          <h2 className="font-headline text-3xl">Our Philosophy</h2>
          <p>
            At Reign Jiu Jitsu, we believe that martial arts is a powerful tool for personal growth. Our method is built on a foundation of respect, discipline, and continuous improvement. We foster a positive and challenging environment where every student, regardless of age or skill level, can thrive.
          </p>
          <p>
            We are more than just a gym; we are a community. We support each other on and off the mats, celebrating victories and learning from setbacks together. Our goal is to empower you with the skills and confidence to not only defend yourself but to conquer any challenge life throws your way.
          </p>
        </div>
        {aboutImage && (
          <div className="relative w-full h-96">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        )}
      </div>

       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Meet the Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <Link key={instructor.id} href={`/instructors/${instructor.id}`} className="group block">
            <div className="text-center">
              {instructor.image && (
                <div className="relative w-full aspect-square mx-auto overflow-hidden">
                  <Image
                    src={instructor.image.imageUrl}
                    alt={`Portrait of ${instructor.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint={instructor.image.imageHint}
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold mt-6">{instructor.name}</h3>
              <p className="text-primary font-semibold mt-1">{instructor.beltRank}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
