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
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const navLinks = {
  'Programs': [
    { href: '/programs/kids', label: 'Kids Program' },
    { href: '/programs/homeschool', label: 'Homeschool Program' },
    { href: '/programs/adult', label: 'Adult Program' },
    { href: '/programs/fundamentals', label: 'Fundamentals Program' },
    { href: '/programs/competition', label: 'Competition Training' },
    { href: '/programs/private-lessons', label: 'Private Lessons' },
  ],
  'Schedule': '/schedule',
  'Instructors': '/instructors',
  'Our Facility': '/facility',
  'More': [
    { href: '/affiliate-schools', label: 'Affiliate Schools' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About / Our Method' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
  ],
};

type NavLink = {
  href: string;
  label: string;
};

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
                'transition-colors hover:text-primary',
                pathname === content ? 'text-primary' : 'text-foreground'
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
                'p-0 transition-colors hover:text-primary data-[state=open]:text-primary',
                 content.some(l => l.href === pathname) ? 'text-primary' : 'text-foreground'
              )}>
                {title}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background">
              {content.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className={cn(pathname === link.href ? 'text-primary' : '')}>
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

function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
          <SheetTitle className="sr-only">Menu</SheetTitle>
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
                            className={cn(
                              'flex flex-1 items-center py-4 text-xl font-medium transition-all hover:text-primary',
                              pathname === content ? 'text-primary' : ''
                            )}
                          >
                            {title}
                          </Link>
                        </SheetClose>
                      </div>
                    );
                  }
                  return (
                    <AccordionItem key={title} value={title}>
                      <AccordionTrigger className="py-4 text-xl font-medium hover:no-underline">
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {content.map(link => (
                          <SheetClose asChild key={link.href}>
                             <Link
                              href={link.href}
                              className={cn(
                                'block py-3 text-lg font-medium transition-colors hover:text-primary',
                                pathname === link.href ? 'text-primary' : 'text-foreground'
                              )}
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Logo />
        {isMobile === undefined ? (
          <div className="h-8 w-8 animate-pulse rounded-md bg-muted" />
        ) : isMobile ? (
          <MobileNav />
        ) : (
          <DesktopNav />
        )}
      </div>
    </header>
  );
}