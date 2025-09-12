'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
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

function DesktopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-full z-40 bg-background flex flex-col p-6 border-r">
       <div className="mb-10">
        <Logo />
      </div>
      <nav className="flex flex-col gap-3 text-lg font-medium">
        <h3 className="font-bold text-xl uppercase tracking-wider mb-2">Programs</h3>
        {programLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
        
        <div className={cn("mt-6 transition-all duration-300 ease-in-out overflow-hidden", isMenuOpen ? "max-h-screen" : "max-h-0")}>
            <div className={cn("flex flex-col gap-3", isMenuOpen ? 'pt-4' : '')}>
                 {otherLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>

      </nav>
       <div className="mt-auto">
         <Button 
            variant="ghost" 
            className="w-full justify-start text-lg p-0 hover:bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           Menu {isMenuOpen ? <X className="ml-2 h-5 w-5"/> : <Menu className="ml-2 h-5 w-5"/>}
        </Button>
        <Button asChild className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/80 rounded-none">
            <Link href="/free-trial">Book Free Trial</Link>
        </Button>
      </div>
    </div>
  );
}

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


export function Header() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    // Return a placeholder or null during server-side rendering/hydration
    return (
       <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
             {/* Placeholder for mobile header */}
        </div>
       </header>
    )
  }
  
  return (
    <>
      {isMobile ? (
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Logo />
                <MobileNav />
            </div>
         </header>
      ) : (
        <DesktopNav />
      )}
    </>
  );
}
