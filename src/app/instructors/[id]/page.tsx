import { instructors } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const instructor = instructors.find((inst) => inst.id === params.id);

  if (!instructor) {
    return {
      title: 'Instructor Not Found',
    };
  }

  return {
    title: `${instructor.name} - ${instructor.beltRank}`,
    description: `Learn about ${instructor.name}, a ${instructor.beltRank} at Reign BJJ Katy.`,
  };
}

export default function InstructorProfilePage({ params }: Props) {
  const instructor = instructors.find((inst) => inst.id === params.id);

  if (!instructor) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex flex-col items-center">
          {instructor.image && (
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-card">
              <Image
                src={instructor.image.imageUrl}
                alt={`Portrait of ${instructor.name}`}
                fill
                className="object-cover"
                data-ai-hint={instructor.image.imageHint}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold font-headline mt-6 text-center">{instructor.name}</h1>
          <Badge variant="default" className="mt-2 text-md px-4 py-1 bg-primary text-primary-foreground">
            {instructor.beltRank}
          </Badge>
          <div className="mt-2 text-sm text-muted-foreground">
            {instructor.yearsOfExperience} Years of Experience
          </div>
        </div>
        <div className="md:col-span-2 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-headline mb-4">Biography</h2>
          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="whitespace-pre-line text-lg leading-relaxed">{instructor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return instructors.map((instructor) => ({
    id: instructor.id,
  }));
}
