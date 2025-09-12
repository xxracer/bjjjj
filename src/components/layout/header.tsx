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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { programs } from '@/lib/data';
import { cn } from '@/lib/utils';

const mainLinks = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/facility', label: 'Our Facility' },
  { href: '/sponsorship', label: 'Sponsorship' },
  { href: '/affiliate-schools', label: 'Affiliate Schools' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
             <div className="flex items-center justify-between p-6 border-b">
                <Logo />
                <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetClose>
            </div>
            <div className="p-6">
                 <Accordion type="single" collapsible defaultValue='programs' className="w-full">
                    <AccordionItem value="programs" className="border-b-0">
                        <AccordionTrigger className="text-2xl font-bold uppercase hover:no-underline">Programs</AccordionTrigger>
                        <AccordionContent>
                             <nav className="flex flex-col gap-4 pt-4">
                                {programs.map((program) => (
                                    <Link key={program.id} href={`/programs/${program.id}`}
                                        className="text-xl text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {program.title}
                                    </Link>
                                ))}
                            </nav>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                 <nav className="flex flex-col gap-4 mt-6">
                    {mainLinks.map((link) => (
                         <Link key={link.href} href={link.href}
                            className="text-2xl font-bold uppercase text-primary hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Button asChild className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none text-lg py-4 px-6 h-auto">
                    <Link href="/free-trial">
                      <div className="flex flex-col items-center justify-center text-center w-full">
                        <div className="w-full border-t border-primary-foreground"></div>
                        <span className="text-sm font-medium tracking-widest my-2">SIGN UP FOR YOUR</span>
                        <span className="text-3xl font-bold text-accent">FREE CLASS TODAY</span>
                        <div className="w-full border-b border-primary-foreground mt-2"></div>
                      </div>
                    </Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}