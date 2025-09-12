'use client';

import { Button } from '@/components/ui/button';
import { instructors, programs, reviews, youtubeVideos } from '@/lib/data';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from '@/lib/data';
import { useEffect, useState } from 'react';
import { fetchInstagramPosts, InstagramPost } from '@/ai/flows/fetch-instagram-posts';

export default function Home() {
  const generalFaqs = faqContent.find(category => category.title === 'General')?.faqs.slice(0, 5) || [];
  const kidsFaqs = faqContent.find(category => category.title === 'Kids Program')?.faqs.slice(0, 2) || [];
  const competitionFaqs = faqContent.find(category => category.title === 'Competition')?.faqs.slice(0, 2) || [];
  const [heroContent, setHeroContent] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchInstagramPosts();
      setHeroContent(posts);
    }
    getPosts();
  }, [])

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] md:h-screen flex items-center justify-center text-center bg-black">
         <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className='m-0 h-full'>
            {heroContent.map((item) => (
              <CarouselItem key={item.id} className='p-0 relative h-full'>
                {item.media_type === 'VIDEO' ? (
                  <video
                    src={item.media_url}
                    title={item.caption}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                  />
                ) : (
                   <Image
                    src={item.media_url}
                    alt={item.caption || 'Instagram post'}
                    fill
                    className="object-cover opacity-50"
                    priority
                    data-ai-hint="jiu jitsu instagram"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-black/40">
          <Link href="#reviews" className="mb-4">
            <div className="flex items-center gap-1 text-white">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
            </div>
            <span className="sr-only">Scroll to reviews</span>
          </Link>
          <h1 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-wider">
            Jiu Jitsu in Katy, TX
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
            A family friendly martial arts studio promoting a positive school culture.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 text-lg py-7 px-10 rounded-none">
            <Link href="/free-trial">
              Book Your Free Trial Class
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs Carousel */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {programs.map((program) => (
                <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/programs/${program.id}`} className="group block h-full">
                    <Card className="h-full flex flex-col border-none shadow-none bg-transparent rounded-none">
                      <CardContent className="p-0 relative aspect-[4/3] overflow-hidden">
                        {program.image && (
                           <Image
                            src={program.image.imageUrl}
                            alt={program.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={program.image.imageHint}
                          />
                        )}
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                         <div className="absolute bottom-4 left-4">
                           <h3 className="text-2xl font-bold text-white uppercase">{program.title}</h3>
                         </div>
                      </CardContent>
                    </Card>
                   </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
            <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          </Carousel>
        </div>
      </section>
      
      {/* Short SEO Text */}
      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto text-center max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Family Friendly Jiu Jitsu in Katy</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Reign Jiu Jitsu is a family friendly martial arts studio in Katy, Texas. We promote a positive school culture that enables us all to grow together through Jiu Jitsu. We encourage hard work in a welcoming environment. For the beginner, we will have an introductory course to go over the basics and main concepts of Jiu Jitsu to help you develop a solid understanding. Beginners will learn the basics in a manner that will make your transition to the art easier, safer, and your development faster. Join us today to see what we're about!
              </p>
          </div>
      </section>

      {/* Kids Highlight Section */}
      <section className="w-full bg-secondary">
        <div className="container mx-auto grid md:grid-cols-2 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px]">
                 <Image 
                    src="https://picsum.photos/seed/kids1/800/800"
                    alt="Kids learning Jiu Jitsu"
                    fill
                    className="object-cover"
                    data-ai-hint="kids jiu jitsu"
                />
            </div>
            <div className="p-12 md:p-16 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Build Confidence with Kids Jiu Jitsu in Katy</h2>
                <p className="mt-4 text-lg text-muted-foreground">Our kids program is designed to build character, discipline, and respect in a fun and safe environment.</p>
                <Button asChild size="lg" variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none">
                    <Link href="/programs/kids">Learn More About Our Kids Program</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Meet Our Instructors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Link key={instructor.id} href={`/instructors/${instructor.id}`} className="group block text-center">
                {instructor.image && (
                  <div className="relative w-full aspect-square mx-auto overflow-hidden">
                    <Image
                      src={instructor.image.imageUrl}
                      alt={`Portrait of ${instructor.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={instructor.image.imageHint}
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold mt-6">{instructor.name}</h3>
                <p className="text-primary font-semibold mt-1">{instructor.beltRank}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Facility Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Train in a World-Class Facility</h2>
                <p className="mt-4 text-lg text-muted-foreground">Our state-of-the-art academy in Katy is designed for your success, safety, and comfort.</p>
                <div className="mt-6 aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.689659223013!2d-95.77118968489117!3d29.75783598198759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121da633c3739%3A0x1d5f4a6136d77b81!2sKaty%2C%20TX!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Reign Jiu Jitsu Katy Location"
                    ></iframe>
                </div>
            </div>
             <div>
                <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        <CarouselItem>
                             <Image src="https://picsum.photos/seed/fac1/800/600" alt="Mat space" width={800} height={600} className="w-full" data-ai-hint="gym interior" />
                        </CarouselItem>
                         <CarouselItem>
                             <Image src="https://picsum.photos/seed/fac2/800/600" alt="Seating area" width={800} height={600} className="w-full" data-ai-hint="gym seating" />
                        </CarouselItem>
                         <CarouselItem>
                             <Image src="https://picsum.photos/seed/fac3/800/600" alt="Gym equipment" width={800} height={600} className="w-full" data-ai-hint="gym equipment" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-20px] hidden md:inline-flex" />
                    <CarouselNext className="absolute right-[-20px] hidden md:inline-flex" />
                </Carousel>
             </div>
        </div>
      </section>

      {/* Sponsorship Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto text-center">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Proudly Sponsored By</h3>
                <div className="mt-8 flex justify-center">
                   <a href="https://rekt.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Image src="https://picsum.photos/seed/rekt/200/100" alt="REKT logo" width={200} height={100} data-ai-hint="company logo" />
                    </a>
                </div>
                <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">Reign Jiu Jitsu is proud to be sponsored by REKT. Together we support Jiu Jitsu athletes and the Katy martial arts community.</p>
            </div>
        </section>

      {/* Reviews Section */}
      <section id="reviews" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">What Our Members Say</h2>
          </div>
          <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col justify-center items-center text-center p-8 bg-background rounded-none border">
                       <div className="flex items-center gap-1 mb-4 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      <p className="text-muted-foreground italic">&quot;{review.comment}&quot;</p>
                      <p className="mt-6 font-bold uppercase text-sm tracking-wider">- {review.name}</p>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          </Carousel>
        </div>
      </section>

        {/* Video Section */}
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Competition & Classes</h2>
                </div>
                <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
                    <CarouselContent>
                        {youtubeVideos.map((video) => (
                            <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                <a href={video.url} target="_blank" rel="noopener noreferrer" className="block group p-4">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={video.thumbnailUrl}
                                            alt={video.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint="jiu jitsu video"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                           <svg className="h-16 w-16 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-4 font-bold group-hover:text-accent transition-colors">{video.title}</h3>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
                </Carousel>
            </div>
        </section>


      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[...generalFaqs, ...kidsFaqs, ...competitionFaqs].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2">
                <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-0 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

        {/* Final CTA */}
        <section className="w-full py-20 md:py-24 bg-primary">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-primary-foreground">Try Your First Class Free at Reign Jiu Jitsu in Katy, TX</h2>
                 <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80 text-lg py-7 px-10 rounded-none">
                    <Link href="/free-trial">
                    Book Your Free Trial Class
                    </Link>
                </Button>
            </div>
        </section>

    </div>
  );
}
