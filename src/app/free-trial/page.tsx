import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Free Jiu Jitsu Trial Class in Katy, TX | Reign Jiu Jitsu',
    description: 'Book your free trial class at Reign Jiu Jitsu in Katy, TX. Experience our world-class instruction for kids and adults. Sign up today!',
};


export default function FreeTrialPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider sm:text-5xl">Book Your Free Trial</h1>
            <p className="mt-4 text-xl text-muted-foreground">
                Experience the art of Jiu Jitsu firsthand. Your first class is on us. Fill out the form to schedule your free introductory session.
            </p>
            <div className="relative mt-8 aspect-video">
                <Image 
                    src="https://picsum.photos/seed/trial/800/450"
                    alt="Jiu Jitsu class in session"
                    fill
                    className="object-cover"
                    data-ai-hint="jiu jitsu class"
                />
            </div>
        </div>
        <div className="bg-card p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Start Your Journey</h2>
          <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" placeholder="Tell us about your goals or ask any questions." />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none text-lg py-4 px-6 h-auto">
              <div className="flex flex-col items-center justify-center text-center w-full">
                <div className="w-full border-t border-primary-foreground"></div>
                <span className="text-sm font-medium tracking-widest my-2">SIGN UP FOR YOUR</span>
                <span className="text-3xl font-bold text-accent">FREE CLASS TODAY</span>
                <div className="w-full border-b border-primary-foreground mt-2"></div>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
