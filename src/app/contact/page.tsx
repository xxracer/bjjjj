import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          We&apos;re here to answer your questions. Start your Jiu-Jitsu journey today!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-secondary/50 p-8 rounded-none">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" className="rounded-none"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="rounded-none"/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="e.g., Free Trial Inquiry" className="rounded-none"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" className="min-h-[120px] rounded-none" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/80 rounded-none text-lg py-6">
              Submit
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-secondary/50 p-8 rounded-none">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <span>1234 BJJ Street, Katy, TX 77494</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <span>info@reignbjjkaty.com</span>
              </div>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9">
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
  );
}
