'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { reviews, programs, facilityImages, faqContent } from '@/lib/data';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'insta-1');
  const featuredReviews = reviews.slice(0, 3);
  const generalFaqs = faqContent.find(category => category.title === 'General')?.faqs || [];

  return (
    <div className="flex flex-col min-h-dvh bg-white text-black">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white">
            JIU JITSU IN KATY, TEXAS
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
            A family friendly martial arts studio that promotes a positive school culture.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-gray-200 text-lg py-7 px-10 rounded-none">
            <Link href="/contact">
              Start Your Free Trial
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs Section */}
       <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl text-black">Our Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {programs.map((program) => (
              <Link key={program.id} href={`/programs/${program.id}`} className="block group relative aspect-w-1 aspect-h-1">
                  {program.image && (
                    <Image
                      src={program.image.imageUrl}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={program.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white font-headline">{program.title}</h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="w-full py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="lg:order-last">
                <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl text-black">World-Class Facility</h2>
                 <p className="mt-6 text-xl text-gray-600 max-w-xl">
                    Our academy is a state-of-the-art training environment designed for your success, safety, and comfort. We believe that a great facility inspires great performance.
                 </p>
                 <Button asChild variant="link" className="text-lg mt-8 p-0 h-auto text-black hover:underline">
                    <Link href="/facility">
                        Explore the Academy &rarr;
                    </Link>
                </Button>
             </div>
             {facilityImages.length > 0 && (
                <div className="relative aspect-video">
                    <Image
                        src={facilityImages[0].imageUrl}
                        alt={facilityImages[0].description}
                        fill
                        className="object-cover"
                        data-ai-hint={facilityImages[0].imageHint}
                    />
                </div>
             )}
           </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="w-full py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl text-white">WHAT OUR MEMBERS SAY</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-white text-white" />
                ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredReviews.map((review, index) => (
              <div key={index} className="text-center">
                  <p className="text-lg text-gray-300">&quot;{review.comment}&quot;</p>
                  <p className="mt-6 font-bold text-lg font-headline text-white">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-6xl text-black">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
                <AccordionTrigger className="text-xl font-semibold text-left text-black hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 pt-0 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
