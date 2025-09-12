import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { instructors } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function InstructorsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Meet Our Instructors</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Learn from a dedicated team of experienced and passionate martial artists.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="flex flex-col overflow-hidden rounded-none border group">
            <CardHeader className="p-0">
              {instructor.image && (
                <Link href={`/instructors/${instructor.id}`} className="block">
                  <div className="relative aspect-square">
                    <Image
                      src={instructor.image.imageUrl}
                      alt={`Portrait of ${instructor.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={instructor.image.imageHint}
                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline group-hover:text-primary">
                 <Link href={`/instructors/${instructor.id}`}>{instructor.name}</Link>
              </CardTitle>
              <Badge variant="secondary" className="mt-2 text-sm rounded-sm">{instructor.beltRank}</Badge>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/80 rounded-none">
                <Link href={`/instructors/${instructor.id}`}>
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
