import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Katy's premier Brazilian Jiu-Jitsu academy.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/schedule" className="text-muted-foreground hover:text-primary">Schedule</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold uppercase tracking-wider">Social</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map(link => (
                <li key={link.name}><a href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
             <h3 className="font-bold uppercase tracking-wider">Sponsor</h3>
             <div className="mt-4">
                <a href="https://rekt.com" target="_blank" rel="noopener noreferrer" className="inline-block opacity-75 hover:opacity-100">
                    <p className='text-sm text-muted-foreground'>Proudly sponsored by</p>
                    <span className='text-2xl font-bold'>REKT</span>
                </a>
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
