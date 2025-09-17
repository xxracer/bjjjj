'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Metadata } from 'next';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendSms } from '@/ai/flows/send-sms-flow';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

// Note: The metadata object is not used in a client component, but we keep it for reference.
// To apply metadata, this page would need to be refactored to use a server component wrapper.
export const metadata: Metadata = {
    title: 'Free Jiu Jitsu Trial Class in Katy, TX | Reign Jiu Jitsu',
    description: 'Book your free trial class at Reign Jiu Jitsu in Katy, TX. Experience our world-class instruction for kids and adults. Sign up today!',
};


export default function FreeTrialPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    const result = await sendSms(data);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      reset();
      toast({
        title: 'Success!',
        description: "We've received your request and will contact you shortly.",
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error || 'There was a problem with your request. Please try again.',
      });
    }
  };

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
          {submitSuccess ? (
             <div className="text-center py-16">
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground text-lg">
                Your free trial request has been submitted. We'll be in touch soon to schedule your class!
              </p>
            </div>
          ) : (
            <>
            <h2 className="text-3xl font-bold mb-6 text-center">Start Your Journey</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" {...register('name')} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" {...register('email')} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" {...register('phone')} />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your goals or ask any questions." {...register('message')} />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none text-lg py-4 px-6 h-auto">
                {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <div className="flex flex-col items-center justify-center text-center w-full">
                        <div className="w-full border-t border-primary-foreground"></div>
                        <span className="text-sm font-medium tracking-widest my-2">SIGN UP FOR YOUR</span>
                        <span className="text-3xl font-bold text-accent">FREE CLASS TODAY</span>
                        <div className="w-full border-b border-primary-foreground mt-2"></div>
                    </div>
                )}
              </Button>
            </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
