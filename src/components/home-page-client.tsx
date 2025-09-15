'use client';

import { Button } from '@/components/ui/button';
import { instructors, programs, reviews } from '@/lib/data';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function HomePageClient() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center">
        <Image
          src="https://picsum.photos/seed/hero-main/1920/1080"
          alt="Jiu Jitsu training session"
          fill
          className="object-cover"
          priority
          data-ai-hint="jiu jitsu action"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white">
            Reign Jiu Jitsu
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Discover the discipline, confidence, and community of Jiu-Jitsu right here in Katy, TX.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-lg py-6 px-8">
            <Link href="/free-trial">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Welcome to Reign Jiu Jitsu</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Reign Jiu Jitsu is more than a martial arts academy; we are a community dedicated to personal growth, discipline, and the art of Jiu-Jitsu. We provide a welcoming yet challenging environment in Katy, TX, where students of all ages and skill levels can achieve their goals, whether it's for fitness, self-defense, or competition.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Our Programs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Find the perfect class to start your journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0,3).map((program) => (
              <Link key={program.id} href={`/programs/${program.id}`} className="group block">
                <Card className="h-full flex flex-col border-border shadow-lg overflow-hidden rounded-md transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-2xl font-bold text-white uppercase">{program.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button asChild variant="outline" className="text-lg py-6 px-8 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/programs">View All Programs</Link>
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
                  <div className="relative w-full aspect-square mx-auto overflow-hidden rounded-md">
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
           <div className="text-center mt-12">
                <Button asChild className="text-lg py-6 px-8 rounded-none">
                    <Link href="/instructors">View All Instructors</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto text-center max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Weekly Schedule</h2>
              <p className="mt-4 text-lg text-muted-foreground">Find a time that works for you. We offer classes all week for all skill levels.</p>
               <div className="mt-8">
                 <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-lg py-6 px-8">
                    <Link href="/schedule">View Full Schedule</Link>
                </Button>
               </div>
          </div>
      </section>
      
      {/* Blog Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">From The Blog</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col border-border shadow-lg overflow-hidden rounded-md">
                  <CardContent className="p-6">
                      <h3 className="text-xl font-bold">The Beginner's Guide to BJJ</h3>
                      <p className="mt-2 text-muted-foreground">Everything you need to know before stepping on the mats for the first time.</p>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                      <Button asChild variant="link" className="text-primary p-0">
                          <Link href="/blog">Read More</Link>
                      </Button>
                  </div>
              </Card>
               <Card className="flex flex-col border-border shadow-lg overflow-hidden rounded-md">
                  <CardContent className="p-6">
                      <h3 className="text-xl font-bold">Nutrition for Grapplers</h3>
                      <p className="mt-2 text-muted-foreground">Fuel your body for performance and recovery with these essential tips.</p>
                  </CardContent>
                   <div className="p-6 pt-0 mt-auto">
                       <Button asChild variant="link" className="text-primary p-0">
                           <Link href="/blog">Read More</Link>
                       </Button>
                   </div>
              </Card>
               <Card className="flex flex-col border-border shadow-lg overflow-hidden rounded-md">
                  <CardContent className="p-6">
                      <h3 className="text-xl font-bold">The Importance of Drilling</h3>
                      <p className="mt-2 text-muted-foreground">Why repetition is the key to building muscle memory and sharp technique.</p>
                  </CardContent>
                   <div className="p-6 pt-0 mt-auto">
                       <Button asChild variant="link" className="text-primary p-0">
                           <Link href="/blog">Read More</Link>
                       </Button>
                   </div>
              </Card>
           </div>
        </div>
      </section>

      {/* Contact Section */}
       <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">Questions? Ready to start? We're here to help.</p>
            <form className="mt-8 space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-card rounded-sm h-12"/>
                    <Input type="email" placeholder="Your Email" className="bg-card rounded-sm h-12"/>
                </div>
                <Textarea placeholder="Your Message" className="bg-card rounded-sm" />
                <div className="text-center">
                    <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-lg py-6 px-8">
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
      </section>
    </div>
  );
}