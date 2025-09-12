'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

function NavLink({ href, children, closeMenu }: { href: string; children: React.ReactNode; closeMenu: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={closeMenu} className={cn("text-2xl md:text-3xl font-bold uppercase tracking-wider transition-colors hover:text-primary-foreground", isActive ? "text-primary-foreground" : "text-muted-foreground" )}>
        {children}
    </Link>
  )
}

function NavContent({closeMenu}: {closeMenu: () => void}){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                <div className="md:col-span-1 flex flex-col justify-center space-y-6 py-16 md:py-0">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-primary-foreground">Programs</h3>
                    <nav className="flex flex-col space-y-4">
                        {programLinks.map((link) => (
                           <NavLink key={link.href} href={link.href} closeMenu={closeMenu}>
                             {link.label}
                           </NavLink>
                        ))}
                    </nav>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center space-y-6 py-16 md:py-0">
                     <h3 className="text-xl font-bold uppercase tracking-wider text-primary-foreground">Academy</h3>
                     <nav className="flex flex-col space-y-4">
                        {otherLinks.slice(0, 4).map((link) => (
                            <NavLink key={link.href} href={link.href} closeMenu={closeMenu}>
                                {link.label}
                            </NavLink>
                        ))}
                     </nav>
                </div>
                 <div className="md:col-span-1 flex flex-col justify-center space-y-6 py-16 md:py-0">
                     <h3 className="text-xl font-bold uppercase tracking-wider text-primary-foreground">Resources</h3>
                      <nav className="flex flex-col space-y-4">
                        {otherLinks.slice(4).map((link) => (
                             <NavLink key={link.href} href={link.href} closeMenu={closeMenu}>
                                {link.label}
                            </NavLink>
                        ))}
                     </nav>
                </div>
            </div>
        </div>
    )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-colors duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent")}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:text-foreground">
              <span className="sr-only">Open Menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className={cn("fixed inset-0 z-50 bg-background transition-transform duration-500 ease-in-out", isOpen ? "translate-y-0" : "-translate-y-full")}>
         <div className="absolute top-0 left-0 right-0 h-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
                 <Logo />
                 <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:text-foreground">
                    <span className="sr-only">Close Menu</span>
                    <X className="h-6 w-6" />
                </Button>
            </div>
         </div>
         <div className="h-full overflow-y-auto pt-20">
            <NavContent closeMenu={closeMenu}/>
         </div>
      </div>
    </>
  );
}
