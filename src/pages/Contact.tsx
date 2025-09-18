import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div >
      <div >
        <h1 >Get In Touch</h1>
        <p >
          We&apos;re here to answer your questions. Start your Jiu-Jitsu journey today!
        </p>
      </div>

      <div >
        <div >
          <h2 >Send Us a Message</h2>
          <form >
            <div >
              <div >
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div >
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div >
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="e.g., Free Trial Inquiry" />
            </div>
            <div >
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message"  />
            </div>
            <Button type="submit" >
              Submit
            </Button>
          </form>
        </div>

        <div >
          <div >
            <h2 >Contact Information</h2>
            <div >
              <div >
                <MapPin  />
                <span>1234 BJJ Street, Katy, TX 77494</span>
              </div>
              <div >
                <Phone  />
                <span>(123) 456-7890</span>
              </div>
              <div >
                <Mail  />
                <span>info@reignbjjkaty.com</span>
              </div>
            </div>
          </div>
          <div >
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
