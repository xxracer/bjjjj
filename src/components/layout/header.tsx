'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

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

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderLink = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        'block py-2 text-lg font-medium transition-colors hover:text-primary',
        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Logo />

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b p-4">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-grow p-4 overflow-y-auto">
                <Accordion type="multiple" className="w-full">
                  {Object.entries(navLinks).map(([title, content]) => {
                    if (typeof content === 'string') {
                      return (
                        <Link
                          key={content}
                          href={content}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'flex flex-1 items-center py-4 text-lg font-medium transition-all hover:underline',
                            pathname === content ? 'text-primary' : ''
                          )}
                        >
                          {title}
                        </Link>
                      );
                    }
                    return (
                      <AccordionItem key={title} value={title} className="border-b-0">
                        <AccordionTrigger className="py-4 text-lg font-medium hover:no-underline">
                          {title}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {content.map(renderLink)}
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
    </header>
  );
}
