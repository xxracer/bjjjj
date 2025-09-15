'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

export function SideNav() {
  const pathname = usePathname();

  const navContent = (
    <>
        <div className="p-6">
            <Logo />
        </div>
        <nav className="flex flex-col gap-2 px-6">
            {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                'rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors',
                pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
            >
                {link.label}
            </Link>
            ))}
        </nav>
        <div className='p-6 mt-auto'>
            <Button asChild className='w-full'>
                <Link href='/free-trial'>Book Trial Class</Link>
            </Button>
        </div>
    </>
  );


  return (
    <>
        {/* Mobile Nav */}
        <header className="sticky top-0 z-40 flex items-center justify-between w-full p-4 bg-background border-b md:hidden">
            <Logo />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0">
                   {navContent}
                </SheetContent>
            </Sheet>
        </header>

        {/* Desktop Nav */}
        <aside className="fixed top-0 left-0 z-40 h-screen w-64 flex-col border-r bg-card hidden md:flex">
           {navContent}
        </aside>
    </>
  );
}