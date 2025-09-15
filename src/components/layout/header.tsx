'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent",
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className='ml-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm'>
            <Link href="/free-trial">Free Trial</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
               <div className="flex items-center justify-between p-4 border-b">
                  <Logo />
                  <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
              </div>
              <div className="p-4">
                   <nav className="flex flex-col gap-6 mt-6">
                      {navLinks.map((link) => (
                           <SheetClose asChild key={link.href}>
                             <Link href={link.href} className="text-xl font-semibold uppercase text-primary hover:text-accent transition-colors">
                                {link.label}
                            </Link>
                           </SheetClose>
                      ))}
                  </nav>
                  <Button asChild className="mt-8 w-full bg-accent text-accent-foreground rounded-sm text-lg py-6">
                      <Link href="/free-trial">Book Free Trial</Link>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
