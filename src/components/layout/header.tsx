'use client';

import Link from 'next/link';
import {
  Menu,
  X,
  BookOpen,
  CalendarDays,
  Users,
  Building,
  Shield,
  School,
  Rss,
  HelpCircle,
  Info,
  Contact,
  ChevronDown,
  Crown,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type NavLink = {
  href: string;
  label: string;
};

const programLinks: NavLink[] = [
    { href: '/programs/jiu-jitsu', label: 'Jiu Jitsu' },
    { href: '/programs/kids-jiu-jitsu', label: 'Kids Jiu Jitsu' },
    { href: '/programs/competition-training', label: 'Competition Training' },
    { href: '/programs/private-training', label: 'Private Training' },
    { href: '/programs/homeschool-martial-arts', label: 'Homeschool Martial Arts' },
];

const otherLinks: NavLink[] = [
    { href: '/schedule', label: 'Schedule' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/facility', label: 'Our Facility' },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/affiliate-schools', label: 'Affiliate Schools' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
];

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-8 w-8" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4 h-20">
             <Logo />
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
          <nav className="flex-grow p-4 overflow-y-auto">
            <Accordion type="multiple" defaultValue={['Programs']} className="w-full">
              <AccordionItem value="Programs">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                    <span>Programs</span>
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                  {programLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
             {otherLinks.map((link) => (
                 <div key={link.href} className="border-b">
                    <SheetClose asChild>
                    <Link href={link.href} className="flex flex-1 items-center py-4 text-lg font-medium">
                        {link.label}
                    </Link>
                    </SheetClose>
                </div>
             ))}
            </Accordion>
          </nav>
           <div className="border-t p-4">
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80 rounded-none text-lg py-6">
              <Link href="/free-trial">Book Free Trial</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopNav() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Logo />
        <div className="flex items-center gap-6 flex-grow">
            <div 
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
            >
                <Link href="/programs" className="flex items-center gap-1 hover:text-primary transition-colors">
                    Programs <ChevronDown className="h-4 w-4" />
                </Link>
                {isProgramsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-none shadow-lg py-2 z-20">
                        {programLinks.map(link => (
                            <Link key={link.href} href={link.href} className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
             {otherLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                </Link>
             ))}
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-none">
            <Link href="/free-trial">Book Free Trial</Link>
        </Button>
    </nav>
  );
}


export function Header() {
  const isMobile = useIsMobile();
  
  if (isMobile === undefined) {
    return <header className="sticky top-0 z-40 w-full border-b h-20 flex items-center justify-end px-4" />;
  }
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
            {isMobile ? (
                <>
                    <Logo />
                    <MobileNav />
                </>
            ) : (
                <DesktopNav />
            )}
        </div>
    </header>
  );
}
