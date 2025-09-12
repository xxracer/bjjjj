import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { reviews } from '@/lib/data';
import { Crown, ShieldCheck, HeartPulse, Users, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  const features = [
    {
      icon: <Crown className="h-10 w-10 text-accent" />,
      title: 'World-Class Instruction',
      description: 'Learn from highly experienced black belts in a supportive environment.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: 'Strong Community',
      description: 'Join a family of passionate martial artists who support each other on and off the mats.',
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-accent" />,
      title: 'Fitness & Health',
      description: 'Get in the best shape of your life while learning practical self-defense skills.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: 'Programs for All',
      description: 'We offer classes for adults and kids, from beginners to advanced competitors.',
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
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
        <div className="relative z-10 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            Forge Your Legacy on the Mats
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Discover the art of Brazilian Jiu-Jitsu at Katy&apos;s premier academy.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Why Train at Reign BJJ?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              We offer more than just classes. We offer a path to self-improvement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                {feature.icon}
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">What Our Students Say</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Real stories from the members of our community.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold">{review.name}</CardTitle>
                          <div className="flex items-center gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">&quot;{review.comment}&quot;</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Ready to Roll?</h2>
          <p className="mt-3 max-w-xl mx-auto md:text-xl">
            Your first class is on us. Book your free trial today and experience the Reign BJJ difference.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Claim Your Free Class
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
