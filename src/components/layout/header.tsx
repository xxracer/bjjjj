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
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Crown,
} from 'lucide-react';
import { useState, useEffect } from 'react';
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
  icon: React.ElementType;
};

type NavCategory = {
  title: string;
  icon: React.ElementType;
  links?: NavLink[];
  href?: string;
};

const navLinks: NavCategory[] = [
  {
    title: 'Programs',
    icon: BookOpen,
    links: [
      { href: '/programs/kids', label: 'Kids Jiu Jitsu', icon: Users },
      { href: '/programs/homeschool', label: 'Homeschool Program', icon: School },
      { href: '/programs/fundamentals', label: 'Fundamentals', icon: BookOpen },
      { href: '/programs/adult', label: 'Adult', icon: Users },
      { href: '/programs/competition', label: 'Competition', icon: Shield },
      { href: '/programs/private-lessons', label: 'Private Lessons', icon: Users },
    ],
  },
  { title: 'Schedule', href: '/schedule', icon: CalendarDays },
  { title: 'Instructors', href: '/instructors', icon: Users },
  { title: 'Our Facility', href: '/facility', icon: Building },
  {
    title: 'More',
    icon: ChevronRight,
    links: [
      { href: '/sponsorship', label: 'Sponsorship', icon: Shield },
      { href: '/affiliate-schools', label: 'Affiliate Schools', icon: School },
      { href: '/blog', label: 'Blog', icon: Rss },
      { href: '/faq', label: 'FAQ', icon: HelpCircle },
      { href: '/contact', label: 'Contact', icon: Contact },
      { href: '/about', label: 'About', icon: Info },
    ],
  },
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
              </Button>
            </SheetClose>
          </div>
          <nav className="flex-grow p-4 overflow-y-auto">
            <Accordion type="multiple" defaultValue={['Programs']} className="w-full">
              {navLinks.map((category) =>
                category.links ? (
                  <AccordionItem key={category.title} value={category.title}>
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {category.links.map((link) => (
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
                ) : (
                  <div key={category.title} className="border-b">
                    <SheetClose asChild>
                      <Link
                        href={category.href!}
                        className="flex flex-1 items-center py-4 text-lg font-medium"
                      >
                        {category.title}
                      </Link>
                    </SheetClose>
                  </div>
                )
              )}
            </Accordion>
          </nav>
          <div className="border-t p-4">
            <Button asChild className="w-full" variant="destructive">
              <Link href="/free-trial">Book Free Trial</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    if (navLinks.find((c) => c.title === title && c.links)) {
      setActiveSubMenu(title);
    }
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <div
      className={cn(
        'relative hidden md:flex h-screen flex-col bg-background border-r transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center h-20 border-b px-6">
        <Link href="/" className="flex items-center gap-2 overflow-hidden">
          <Crown className="h-8 w-8 text-accent flex-shrink-0" />
          <span
            className={cn(
              'font-bold text-lg uppercase tracking-wider transition-opacity duration-200',
              isCollapsed ? 'opacity-0' : 'opacity-100'
            )}
          >
            Reign
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((category) => (
          <div key={category.title} onMouseEnter={() => handleMouseEnter(category.title)}>
            <Link
              href={category.href || '#'}
              className={cn(
                'flex items-center gap-4 rounded-md p-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                { 'justify-center': isCollapsed }
              )}
            >
              <category.icon className="h-6 w-6 flex-shrink-0" />
              <span className={cn('font-medium', { 'sr-only': isCollapsed })}>
                {category.title}
              </span>
            </Link>
          </div>
        ))}
      </nav>

      <div className="px-4 py-6 border-t">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn('w-full flex gap-4 p-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground', {
            'justify-center': isCollapsed,
          })}
        >
          {isCollapsed ? <ChevronsRight className="h-6 w-6" /> : <ChevronsLeft className="h-6 w-6" />}
          <span className={cn({ 'sr-only': isCollapsed })}>Collapse</span>
        </Button>
      </div>

      {navLinks.map(
        (category) =>
          category.links && (
            <div
              key={`${category.title}-submenu`}
              className={cn(
                'absolute top-0 left-full h-full bg-background border-r transition-transform duration-300 ease-in-out',
                activeSubMenu === category.title
                  ? 'translate-x-0'
                  : '-translate-x-full pointer-events-none'
              )}
              style={{
                width: isCollapsed ? '256px' : '256px',
                left: isCollapsed ? '80px' : '256px',
              }}
            >
              <div className="flex items-center h-20 border-b px-6">
                 <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="py-6 px-4 space-y-2">
                {category.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 rounded-md p-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <link.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export function Header() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return (
      <header className="sticky top-0 z-50 w-full border-b h-20 flex items-center justify-end px-4 md:hidden" />
    );
  }

  return isMobile ? (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur h-20 flex items-center justify-between px-4 md:hidden">
      <Logo />
      <MobileNav />
    </header>
  ) : (
    <DesktopNav />
  );
}
