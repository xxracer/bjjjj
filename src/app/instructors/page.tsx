import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { instructors } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function InstructorsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Meet Our Instructors</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Learn from a dedicated team of experienced and passionate martial artists.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="p-0">
              {instructor.image && (
                <div className="relative aspect-square">
                  <Image
                    src={instructor.image.imageUrl}
                    alt={`Portrait of ${instructor.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={instructor.image.imageHint}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline">{instructor.name}</CardTitle>
              <Badge variant="secondary" className="mt-2 text-sm">{instructor.beltRank}</Badge>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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
