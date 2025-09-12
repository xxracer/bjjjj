import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { programs } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Our Programs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          A path for everyone, from beginners to world champions. Find the program that's right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.id} className="flex flex-col overflow-hidden rounded-none border group">
            <CardHeader className="p-0">
              {program.image && (
                <Link href={`/programs/${program.id}`}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={program.image.imageUrl}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={program.image.imageHint}
                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline group-hover:text-primary">
                <Link href={`/programs/${program.id}`}>{program.title}</Link>
              </CardTitle>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-none">
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
