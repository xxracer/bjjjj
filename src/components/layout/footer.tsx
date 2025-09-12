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
    <footer className="bg-secondary/50 border-t border-border w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Reign Jiu Jitsu Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
