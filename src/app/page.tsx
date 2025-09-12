'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { reviews, programs, facilityImages, youtubeVideos } from '@/lib/data';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/lib/data"


export default function Home() {
  const instagramVideos = PlaceHolderImages.filter(img => img.id.startsWith('insta-'));

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        <Carousel
          opts={{ loop: true }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {instagramVideos.map((video, index) => (
              <CarouselItem key={video.id} className="h-full">
                <div className="relative h-full">
                  <Image
                    src={video.imageUrl}
                    alt={video.description}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    data-ai-hint={video.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="relative p-8 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-white">
              Reign Jiu Jitsu
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
              Family Friendly Jiu Jitsu in Katy
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/80 text-lg py-7 px-10 rounded-none">
              <Link href="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Link href="#reviews" className="mt-6 flex items-center gap-2 text-white">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium hover:underline">5-Star Google Reviews</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Carousel */}
       <section id="programs" className="w-full py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Our Programs</h2>
          </div>
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {programs.map((program) => (
                <CarouselItem key={program.id} className="pl-4 sm:basis-1/2 md:basis-1/3">
                   <Link href={`/programs/${program.id}`} className="block group">
                    <Card className="overflow-hidden rounded-none border-0 shadow-none">
                       <CardHeader className="p-0">
                        {program.image && (
                          <div className="relative aspect-[4/5]">
                            <Image
                              src={program.image.imageUrl}
                              alt={program.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={program.image.imageHint}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-4 bg-background">
                        <CardTitle className="text-2xl font-bold tracking-tight">{program.title}</CardTitle>
                      </CardContent>
                    </Card>
                   </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
          </Carousel>
        </div>
      </section>

      {/* SEO Verbiage Section */}
      <section className="w-full py-16 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
            Family Friendly Jiu Jitsu in Katy
          </h2>
          <div className="mt-6 text-lg text-muted-foreground space-y-4">
            <p>
              Reign Jiu Jitsu is a family friendly martial arts studio in Katy, Texas. We promote a positive school culture that enables us all to grow together through Jiu Jitsu. We encourage hard work in a welcoming environment. At Reign Jiu Jitsu, we stimulate and challenge the mind as well as the body; utilizing full maximum potential.
            </p>
            <p>
              For the beginner, we will have an introductory course to go over the basics and main concepts of Jiu Jitsu to help you develop a solid understanding. Beginners will learn the basics in a manner that will make your transition to the art easier, safer, and your development faster. Join us today to see what we're about, or fill out the short form on your screen today to learn more!
            </p>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="w-full py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Our Facility</h2>
            <Button asChild variant="link" className="text-lg mt-2">
              <Link href="/facility" className="text-primary hover:underline">
                Learn more about our state-of-the-art academy <ArrowRight className="inline h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {facilityImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="aspect-w-16 aspect-h-10">
                        <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
              </Carousel>
            </div>
            <div className="lg:order-1">
               <div className="aspect-w-4 aspect-h-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.689659223013!2d-95.77118968489117!3d29.75783598198759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121da633c3739%3A0x1d5f4a6136d77b81!2sKaty%2C%20TX!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reign Jiu Jitsu Katy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="w-full py-16 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">What Our Students Say</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Directly from our Google Business Profile.
            </p>
          </div>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="p-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full flex flex-col justify-between shadow-none rounded-none bg-transparent border-0">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-0.5 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                      </div>
                      <CardDescription className="text-base text-foreground">&quot;{review.comment}&quot;</CardDescription>
                    </CardContent>
                    <CardHeader className="p-0 pt-4">
                      <CardTitle className="text-lg">- {review.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
          </Carousel>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="w-full py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">From Our YouTube Channel</h2>
          </div>
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="overflow-hidden rounded-none border-0 shadow-none">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={video.thumbnailUrl}
                            alt={video.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint="youtube thumbnail"
                          />
                           <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 opacity-80 group-hover:opacity-100 transition-opacity"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                           </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 bg-background">
                        <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">{video.title}</CardTitle>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-none bg-background/80 hover:bg-background" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 md:py-32 bg-secondary/50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {faqContent.map((category) => (
              <div key={category.title}>
                <h3 className="text-3xl font-bold font-headline mb-6 pb-2 border-b-2 border-primary">{category.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                      <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
