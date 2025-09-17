'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';
import type { NavItem } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const NavLink = ({ href, label, pathname, submenu, isMobile }: { href: string, label: string, pathname: string, submenu?: NavItem[], isMobile?: boolean }) => {
  if (submenu) {
    if (isMobile) {
      return (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={label} className="border-b-0">
            <AccordionTrigger className="text-lg font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground py-0 hover:no-underline">
              {label}
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0 pl-4">
              <ul className="space-y-4">
                {submenu.map(item => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link href={item.href} className={cn(
                        'text-lg font-medium uppercase tracking-wider transition-colors',
                        pathname === item.href
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-transparent p-0">
            {label}
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {submenu.map((item) => {
             return (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
             )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const Comp = isMobile ? SheetClose : 'div';
  const mobileClass = isMobile ? 'text-lg' : 'text-sm';
  
  return (
    <Comp>
      <Link
        href={href}
        className={cn(
          `${mobileClass} font-medium uppercase tracking-wider transition-colors`,
          pathname === href
            ? 'text-foreground font-bold'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {label}
      </Link>
    </Comp>
  );
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className, isMobile = false }: { className?: string, isMobile?: boolean }) => (
    <nav className={cn('items-center gap-6', className, isMobile ? 'flex flex-col items-start space-y-4' : 'hidden md:flex')}>
      {navLinks.map((link) => (
         <NavLink key={link.label} {...link} pathname={pathname} isMobile={isMobile} />
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 border-b border-border backdrop-blur-sm shadow-md' : 'bg-transparent border-b-transparent',
        !isHomePage && 'bg-background/95 border-b border-border backdrop-blur-sm shadow-md'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          
          <div className="flex items-center gap-6">
             <Link href="/">
                <Logo />
             </Link>
             <NavLinks />
          </div>

          <div className="hidden md:flex items-center justify-end">
             <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground rounded-none px-3 py-5 h-auto">
              <Link href="/free-trial">
                <div className="flex flex-col items-center justify-center text-center w-full px-2">
                    <div className="w-full border-t border-primary-foreground/50"></div>
                    <span className="text-xs font-medium tracking-wider my-1">SIGN UP FOR YOUR</span>
                    <span className="text-lg font-bold text-accent leading-tight">FREE CLASS TODAY</span>
                    <div className="w-full border-b border-primary-foreground/50 mt-1"></div>
                </div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs p-6">
                <div className='mb-8'>
                  <SheetClose asChild>
                    <Link href="/">
                      <Logo />
                    </Link>
                  </SheetClose>
                </div>
                <NavLinks isMobile />
                <Button asChild className="mt-8 w-full">
                  <SheetClose asChild>
                    <Link href="/free-trial">Book Free Trial</Link>
                  </SheetClose>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
