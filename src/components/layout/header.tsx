import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';
import type { NavItem } from '@/lib/data';
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
        <Accordion type="single" collapsible>
          <AccordionItem value={label}>
            <AccordionTrigger>
              {label}
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {submenu.map(item => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link to={item.href}>
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
          <Button>
            {label}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {submenu.map((item) => {
             return (
              <DropdownMenuItem key={item.href} asChild>
                <Link to={item.href}>{item.label}</Link>
              </DropdownMenuItem>
             )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const linkContent = (
    <Link to={href}>
        {label}
    </Link>
  );

  return isMobile ? <SheetClose asChild>{linkContent}</SheetClose> : <>{linkContent}</>;
};

export function Header() {
  const { pathname } = useLocation();

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav>
      {navLinks.map((link) => (
         <NavLink key={link.label} {...link} pathname={pathname} isMobile={isMobile} />
      ))}
    </nav>
  );

  return (
    <header>
      <div>
        <div>
          <div>
             <Link to="/">
                <Logo />
             </Link>
             <NavLinks />
          </div>

          <div>
             <Button asChild>
              <Link to="/free-trial">
                <div>
                    <div></div>
                    <span>SIGN UP FOR YOUR</span>
                    <span>FREE CLASS TODAY</span>
                    <div></div>
                </div>
              </Link>
            </Button>
          </div>

          <div>
             <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <Menu />
                  <span>Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div>
                  <SheetClose asChild>
                    <Link to="/">
                      <Logo />
                    </Link>
                  </SheetClose>
                </div>
                <NavLinks isMobile />
                <Button asChild>
                  <SheetClose asChild>
                    <Link to="/free-trial">Book Free Trial</Link>
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
