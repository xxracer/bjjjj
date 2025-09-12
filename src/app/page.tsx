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
    <div className="flex flex-col min-h-dvh bg-white text-black">
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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="relative p-4 flex flex-col items-center bg-black/30 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-white">
              Reign Jiu Jitsu
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/80">
              Family Friendly Jiu Jitsu in Katy
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
              <Link href="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Link href="#reviews" className="mt-4 flex items-center gap-2 text-white">
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
       <section id="programs" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Programs</h2>
          </div>
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {programs.map((program) => (
                <CarouselItem key={program.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                   <Link href={`/programs/${program.id}`} className="block group">
                    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                       <CardHeader className="p-0">
                        {program.image && (
                          <div className="relative aspect-video">
                            <Image
                              src={program.image.imageUrl}
                              alt={program.title}
                              fill
                              className="object-cover"
                              data-ai-hint={program.image.imageHint}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{program.title}</CardTitle>
                      </CardContent>
                    </Card>
                   </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* SEO Verbiage Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
            Family Friendly Jiu Jitsu in Katy
          </h2>
          <div className="mt-6 text-lg text-gray-700 space-y-4">
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
      <section id="facility" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Facility</h2>
            <Link href="/facility" className="text-primary hover:underline mt-2 inline-block">
              Learn more about our state-of-the-art academy <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {facilityImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
            <div className="lg:col-span-2">
               <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.689659223013!2d-95.77118968489117!3d29.75783598198759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121da633c3739%3A0x1d5f4a6136d77b81!2sKaty%2C%20TX!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reign BJJ Katy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">What Our Students Say</h2>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600 md:text-xl">
              Directly from our Google Business Profile.
            </p>
          </div>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-gray-50">
                      <CardHeader>
                        <CardTitle>{review.name}</CardTitle>
                        <div className="flex items-center gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>&quot;{review.comment}&quot;</CardDescription>
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

      {/* YouTube Section */}
      <section id="youtube" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">From Our YouTube Channel</h2>
          </div>
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="sm:basis-1/2 lg:basis-1/3">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={video.thumbnailUrl}
                            alt={video.title}
                            fill
                            className="object-cover"
                            data-ai-hint="youtube thumbnail"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">{video.title}</CardTitle>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {faqContent.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold font-headline mb-6 pb-2 border-b-2 border-primary">{category.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-700">
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
