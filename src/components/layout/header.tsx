'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { programs, navLinks } from '@/lib/data';
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


const NavLink = ({ href, label, pathname, isMobile }: { href: string, label: string, pathname: string, isMobile?: boolean }) => {
  if (label === 'Programs') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-transparent p-0">
            {label}
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {programs.map((program) => {
             const Comp = isMobile ? SheetClose : 'div';
             return (
              <Comp key={program.id}>
                <DropdownMenuItem asChild>
                  <Link href={`/programs/${program.id}`}>{program.title}</Link>
                </DropdownMenuItem>
             </Comp>
             )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const Comp = isMobile ? SheetClose : 'div';
  return (
    <Comp>
      <Link
        href={href}
        className={cn(
          'text-sm font-medium uppercase tracking-wider transition-colors',
          pathname === href
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className, isMobile = false }: { className?: string, isMobile?: boolean }) => (
    <nav className={cn('flex items-center gap-6', className)}>
      {navLinks.map((link) => (
         <NavLink key={link.href} {...link} pathname={pathname} isMobile={isMobile} />
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 border-b border-border backdrop-blur-sm' : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Desktop Left Nav */}
          <div className="hidden md:flex">
             <NavLinks />
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>

          {/* Desktop Right Action */}
          <div className="hidden md:flex">
            <Button asChild variant="outline" size="sm">
              <Link href="/free-trial">Book Trial</Link>
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
                  <Logo />
                </div>
                <NavLinks className="flex-col items-start gap-4" isMobile />
                <Button asChild className="mt-8 w-full">
                  <SheetClose asChild>
                    <Link href="/free-trial">Book Free Trial</Link>
                  </SheetClose>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
           <div className="md:hidden flex-1 flex justify-end">
            {/* This is a spacer on mobile to allow the logo to be centered */}
           </div>
        </div>
      </div>
    </header>
  );
}
