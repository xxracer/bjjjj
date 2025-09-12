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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Katy&apos;s premier destination for Brazilian Jiu-Jitsu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="/instructors" className="text-muted-foreground hover:text-primary transition-colors">Instructors</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>1234 BJJ Street, Katy, TX 77494</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@reignbjjkaty.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Reign BJJ Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
