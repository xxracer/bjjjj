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
import { navLinks } from '@/lib/data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-foreground' : 'text-white')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
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
                             <Link href={link.href} className="text-xl font-semibold uppercase text-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                           </SheetClose>
                      ))}
                  </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>

        <Button asChild size="sm" className='rounded-sm'>
            <Link href="/free-trial">Free Trial</Link>
        </Button>
      </div>
    </header>
  );
}
