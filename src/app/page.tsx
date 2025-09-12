'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { reviews, programs } from '@/lib/data';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'insta-1');
  const facilityImage = PlaceHolderImages.find(img => img.id === 'facility-1');

  // Take only 3 reviews for a cleaner look
  const featuredReviews = reviews.slice(0, 3);
  const featuredPrograms = programs.slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white">
            The Gentle Art, Mastered
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
            Discover the pinnacle of Jiu Jitsu training in a world-class environment.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/80 text-lg py-7 px-10 rounded-none border border-primary-foreground/50">
            <Link href="/contact">
              Start Your Free Trial
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl">Our Programs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">A path for everyone, from beginners to world champions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Link key={program.id} href={`/programs/${program.id}`} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {program.image && (
                    <Image
                      src={program.image.imageUrl}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={program.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white font-headline">{program.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
           <div className="text-center mt-16">
                <Button asChild variant="outline" size="lg" className="rounded-none text-lg py-6 px-8 border-2">
                    <Link href="/programs">
                        View All Programs <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="w-full py-24 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl">World-Class Facility</h2>
                 <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                    Our academy is a state-of-the-art training environment designed for your success, safety, and comfort. We believe that a great facility inspires great performance.
                 </p>
                 <Button asChild variant="link" className="text-lg mt-8 p-0 h-auto">
                    <Link href="/facility" className="text-primary hover:underline">
                        Explore the Academy <ArrowRight className="inline ml-2 h-5 w-5" />
                    </Link>
                </Button>
             </div>
             {facilityImage && (
                <div className="relative aspect-video">
                    <Image
                        src={facilityImage.imageUrl}
                        alt={facilityImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={facilityImage.imageHint}
                    />
                </div>
             )}
           </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl">What Our Members Say</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
            </div>
            <p className="mt-2 text-muted-foreground md:text-lg">Based on 5-Star Google Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <Card key={index} className="bg-transparent border-0 shadow-none text-center">
                <CardContent className="p-0">
                  <p className="text-lg md:text-xl text-foreground">&quot;{review.comment}&quot;</p>
                  <p className="mt-6 font-bold text-lg font-headline">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
