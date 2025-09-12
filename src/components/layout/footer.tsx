import { Crown, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Family friendly Jiu Jitsu in Katy, Texas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="/instructors" className="text-muted-foreground hover:text-primary transition-colors">Instructors</Link></li>
              <li><Link href="/facility" className="text-muted-foreground hover:text-primary transition-colors">Our Facility</Link></li>
              
            </ul>
          </div>

          <div>
             <h3 className="font-semibold tracking-wider text-lg mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
               <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold tracking-wider text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Reign Jiu Jitsu Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
