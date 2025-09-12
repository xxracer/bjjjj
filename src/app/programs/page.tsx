import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { programs } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Our Programs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          A path for everyone, from beginners to world champions. Find the program that's right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="p-0">
              {program.image && (
                <div className="relative aspect-video">
                  <Image
                    src={program.image.imageUrl}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={program.image.imageHint}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline">{program.title}</CardTitle>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/programs/${program.id}`}>
                  Learn More
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
