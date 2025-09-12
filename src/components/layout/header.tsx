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
                      <div className="flex items-center gap-4">
                        <category.icon className="h-6 w-6 flex-shrink-0" />
                        <span>{category.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      {category.links.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-4 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                          >
                             <link.icon className="h-5 w-5 flex-shrink-0" />
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
                        className="flex flex-1 items-center gap-4 py-4 text-lg font-medium"
                      >
                        <category.icon className="h-6 w-6 flex-shrink-0" />
                        {category.title}
                      </Link>
                    </SheetClose>
                  </div>
                )
              )}
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

function DesktopNav({ isVisible }: { isVisible: boolean }) {
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
        'fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-x-0' : '-translate-x-full'
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn('relative hidden md:flex h-screen flex-col bg-background border-r w-64')}
      >
        <div className="flex items-center h-20 border-b px-6">
          <Logo />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((category) => (
            <div key={category.title} onMouseEnter={() => handleMouseEnter(category.title)}>
              <Link
                href={category.href || '#'}
                className="flex items-center gap-4 rounded-md p-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <category.icon className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">{category.title}</span>
              </Link>
            </div>
          ))}
        </nav>

         <div className="border-t p-4">
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80 rounded-none text-lg py-6">
              <Link href="/free-trial">Book Free Trial</Link>
            </Button>
        </div>
      </div>

      {navLinks.map(
        (category) =>
          category.links && (
            <div
              key={`${category.title}-submenu`}
              className={cn(
                'absolute top-0 left-full h-full bg-background border-r w-64 transition-opacity duration-300 ease-in-out',
                activeSubMenu === category.title ? 'opacity-100' : 'opacity-0 pointer-events-none'
              )}
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
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
    if (e.clientX < 50) {
      setIsNavVisible(true);
    } else if (e.clientX > 300) { 
      setIsNavVisible(false);
    }
  };

  useState(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  });


  if (isMobile === undefined) {
    return (
      <header className="sticky top-0 z-40 w-full border-b h-20 flex items-center justify-end px-4 md:hidden" />
    );
  }

  return isMobile ? (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur h-20 flex items-center justify-between px-4 md:hidden">
      <Logo />
      <MobileNav />
    </header>
  ) : (
    <DesktopNav isVisible={isNavVisible} />
  );
}
