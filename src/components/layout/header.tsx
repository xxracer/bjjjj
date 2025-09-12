'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const navLinks = {
  'Programs': [
    { href: '/programs/kids', label: 'Kids Jiu Jitsu' },
    { href: '/programs/homeschool', label: 'Homeschool Program' },
    { href: '/programs/fundamentals', label: 'Fundamentals' },
    { href: '/programs/adult', label: 'Adult' },
    { href: '/programs/competition', label: 'Competition Training' },
    { href: '/programs/private-lessons', label: 'Private Lessons' },
  ],
  'Schedule': '/schedule',
  'Instructors': '/instructors',
  'Our Facility': '/facility',
  'More': [
    { href: '/sponsorship', label: 'Sponsorship (REKT)' },
    { href: '/affiliate-schools', label: 'Affiliate Schools' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ],
};


function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
           <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
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
            <nav className="flex-grow p-6 overflow-y-auto">
              <Accordion type="multiple" className="w-full">
                {Object.entries(navLinks).map(([title, content]) => {
                  if (typeof content === 'string') {
                    return (
                      <div key={content} className="border-b">
                        <SheetClose asChild>
                          <Link
                            href={content}
                            className='flex flex-1 items-center py-4 text-xl font-medium transition-all hover:text-accent'
                          >
                            {title}
                          </Link>
                        </SheetClose>
                      </div>
                    );
                  }
                  return (
                    <AccordionItem key={title} value={title}>
                      <AccordionTrigger className="py-4 text-xl font-medium hover:no-underline hover:text-accent">
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {content.map(link => (
                          <SheetClose asChild key={link.href}>
                             <Link
                              href={link.href}
                              className='block py-3 text-lg font-medium transition-colors hover:text-accent'
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </nav>
            <div className="border-t p-6">
                 <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                    <Link href="/free-trial">Book Free Trial</Link>
                </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {Object.entries(navLinks).map(([title, content]) => {
        if (typeof content === 'string') {
          return (
            <Link
              key={content}
              href={content}
              className={cn(
                'transition-colors hover:text-accent',
                pathname === content ? 'text-accent' : 'text-foreground'
              )}
            >
              {title}
            </Link>
          );
        }
        return (
          <DropdownMenu key={title}>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className={cn(
                'p-0 transition-colors hover:text-accent data-[state=open]:text-accent',
                 content.some(l => pathname.startsWith(l.href)) ? 'text-accent' : 'text-foreground'
              )}>
                {title}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-card border-border">
              {content.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className={cn('hover:text-accent', pathname === link.href ? 'text-accent' : '')}>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
            <DesktopNav />
             <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/80">
                <Link href="/free-trial">Book Free Trial</Link>
            </Button>
            <MobileNav />
        </div>
      </div>
    </header>
  );
}
