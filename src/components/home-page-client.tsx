'use client';

import { Button } from '@/components/ui/button';
import { programs, instructors, faqContent } from '@/lib/data';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import type { InstagramPost } from '@/ai/flows/fetch-instagram-posts';
import { fetchInstagramPosts } from '@/ai/flows/fetch-instagram-posts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function HomePageClient() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const posts = await fetchInstagramPosts();
        setInstagramPosts(posts);
      } catch (error) {
        console.error('Failed to fetch instagram posts', error);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  const generalFaqs = faqContent.find(category => category.title === 'General')?.faqs || [];

  const fundamentalsProgram = programs.find(p => p.id === 'jiu-jitsu-fundamentals');
  const kidsProgram = programs.find(p => p.id === 'kids-jiu-jitsu');
  const privateProgram = programs.find(p => p.id === 'private-training');
  const finalImage = { imageUrl: 'https://picsum.photos/seed/final1/800/600', imageHint: 'jiu jitsu class' };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
       <section className="relative h-[85vh] w-full flex items-center justify-center text-center overflow-hidden">
        <video
          src="https://video.wixstatic.com/video/c5947c_d0a123d1c62d47f0a7688a29ca9325ca/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white">
            Reign Jiu Jitsu
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Discover the discipline, confidence, and community of Jiu-Jitsu right here in Katy, TX.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-lg py-4 px-6 h-auto">
            <Link href="/free-trial">
               <div className="flex flex-col items-center justify-center text-center w-full">
                  <div className="w-full border-t border-primary-foreground"></div>
                  <span className="text-sm font-medium tracking-widest my-2">SIGN UP FOR YOUR</span>
                  <span className="text-3xl font-bold text-accent">FREE CLASS TODAY</span>
                  <div className="w-full border-b border-primary-foreground mt-2"></div>
              </div>
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">Welcome to Reign Jiu Jitsu – Katy, TX</h2>
          <div className="prose prose-lg mx-auto mt-6 text-muted-foreground text-center">
            <p>Reign Jiu Jitsu is more than a martial arts academy; we are a family-driven community dedicated to personal growth, discipline, and the art of Jiu Jitsu.</p>
            <p>Located in Katy, Texas, we welcome students of all ages—from kids as young as 4 years old to adults seeking fitness, self-defense, or competition-level Jiu Jitsu training.</p>
            <p>Whether you’re searching for “Jiu Jitsu near me”, beginner BJJ classes, kids martial arts in Katy, or advanced Jiu Jitsu competition training, Reign Jiu Jitsu is Katy’s trusted source.</p>
            <p>👉 Start your journey today with a FREE trial class and experience why families across Katy, Richmond, Cypress, and Houston choose Reign Jiu Jitsu.</p>
          </div>
        </div>
      </section>

       {/* Why Choose Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Jiu Jitsu in Katy?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Training at Reign BJJ isn’t just about learning techniques. Our Jiu Jitsu classes in Katy provide:</p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-3xl mx-auto prose prose-lg">
            <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-6 w-6 shrink-0" /><span>Practical self-defense skills for kids, teens, and adults</span></li>
            <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-6 w-6 shrink-0" /><span>Weight loss & fitness training that builds lean muscle</span></li>
            <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-6 w-6 shrink-0" /><span>Confidence, focus, and discipline—invaluable both on and off the mats</span></li>
            <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-6 w-6 shrink-0" /><span>A positive, family-friendly martial arts community</span></li>
          </ul>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our programs cover:</h2>

          {/* JJ Fundamentals */}
          {fundamentalsProgram && (
            <Link href={`/programs/${fundamentalsProgram.id}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{fundamentalsProgram.title} → perfect for beginners</h3>
                </div>
                <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="https://placehold.co/800x450.png"
                      alt={fundamentalsProgram.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
              </div>
            </Link>
          )}

          {/* Kids Jiu-Jitsu Program */}
          {kidsProgram && (
             <Link href={`/programs/${kidsProgram.id}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden md:order-last">
                    <Image
                      src="https://placehold.co/800x450.png"
                      alt={kidsProgram.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                <div className="md:order-first">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{kidsProgram.title} (ages 4–13) → confidence, focus & anti-bullying skills</h3>
                </div>
              </div>
            </Link>
          )}

          {/* Private Training Program */}
          {privateProgram && (
            <Link href={`/programs/${privateProgram.id}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{privateProgram.title} in Katy TX → one-on-one progress with our instructors</h3>
                </div>
                <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="https://placehold.co/800x450.png"
                      alt={privateProgram.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                 <h2 className="text-3xl md:text-4xl font-bold">Try Katy’s Favorite Jiu Jitsu Classes Today</h2>
                 <p className="mt-4 text-lg text-muted-foreground">No matter your age, skill level, or goals, Reign Jiu Jitsu in Katy has a program tailored for you:</p>
                 <ul className="space-y-3 mt-6 prose prose-lg">
                    <li className="flex items-start gap-3">✅ <span>Parents love our after-school martial arts for kids</span></li>
                    <li className="flex items-start gap-3">✅ <span>Women join us for self-defense and fitness Jiu Jitsu classes</span></li>
                    <li className="flex items-start gap-3">✅ <span>Adults and athletes push their limits with competition BJJ training in Katy</span></li>
                 </ul>
                 <p className="mt-6 text-lg">📍 Join us in Katy, TX—just minutes from Richmond, Cinco Ranch, and Cypress—for your first free Jiu Jitsu class.</p>
            </div>
            <div className="relative aspect-w-4 aspect-h-3">
                 <Image
                    src={finalImage.imageUrl}
                    alt="Try Katy’s Favorite Jiu Jitsu Classes Today"
                    fill
                    className="object-cover"
                    data-ai-hint={finalImage.imageHint}
                />
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
           <div className="text-center mt-12">
                <Button asChild className="text-lg py-6 px-8 rounded-none">
                    <Link href="/instructors">View All Instructors</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Follow us on Instagram</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-muted animate-pulse" />
                ))
            ) : (
                instagramPosts.map((post) => (
                <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="group block relative aspect-square overflow-hidden">
                  {post.media_type === 'VIDEO' ? (
                    <video src={post.media_url} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  ) : (
                    <Image
                      src={post.media_url}
                      alt={post.caption || 'Instagram post'}
                      fill
                      className="object-cover"
                      data-ai-hint="jiu jitsu instagram"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm">{post.caption}</p>

                  </div>
                </a>
              ))
            )}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-none">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                View on Instagram
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
              <Card className="flex flex-col border-border shadow-lg overflow-hidden">
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
               <Card className="flex flex-col border-border shadow-lg overflow-hidden">
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
               <Card className="flex flex-col border-border shadow-lg overflow-hidden">
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

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-0 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div className="text-center mt-12">
                <Button asChild variant="outline" className="text-lg py-6 px-8 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/faq">View All FAQs</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Contact Section */}
       <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">Questions? Ready to start? We're here to help.</p>
            <form className="mt-8 space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-background rounded-sm h-12"/>
                    <Input type="email" placeholder="Your Email" className="bg-background rounded-sm h-12"/>
                </div>
                <Textarea placeholder="Your Message" className="bg-background rounded-sm" />
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
