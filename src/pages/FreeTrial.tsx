import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

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
    try {
      const response = await fetch('/api/flows/sendSmsFlow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: data }),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.error || 'An unknown error occurred');
      }

      const result = await response.json();

      if (result.output?.success) {
        setSubmitSuccess(true);
        reset();
        toast({
          title: 'Success!',
          description: "We've received your request and will contact you shortly.",
        });
      } else {
        throw new Error(result.output?.error || 'An unknown error occurred on the server.');
      }
    } catch (error: unknown) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error instanceof Error ? error.message : 'There was a problem with your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <div>
            <h1>Book Your Free Trial</h1>
            <p>
                Experience the art of Jiu Jitsu firsthand. Your first class is on us. Fill out the form to schedule your free introductory session.
            </p>
            <div>
                <img
                    src="https://picsum.photos/seed/trial/800/450"
                    alt="Jiu Jitsu class in session"
                />
            </div>
        </div>
        <div>
          {submitSuccess ? (
             <div>
              <h2>Thank You!</h2>
              <p>
                Your free trial request has been submitted. We'll be in touch soon to schedule your class!
              </p>
            </div>
          ) : (
            <>
            <h2>Start Your Journey</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" {...register('name')} />
                  {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                  <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" {...register('email')} />
                      {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" {...register('phone')} />
                      {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
              </div>
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your goals or ask any questions." {...register('message')} />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                    <Loader2 />
                ) : (
                    <div>
                        <div></div>
                        <span>SIGN UP FOR YOUR</span>
                        <span>FREE CLASS TODAY</span>
                        <div></div>
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
