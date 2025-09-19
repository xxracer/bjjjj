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
import styles from './header.module.css';

const NavLink = ({ href, label, pathname, submenu, isMobile }: { href: string, label: string, pathname: string, submenu?: NavItem[], isMobile?: boolean }) => {
  const isActive = pathname === href;

  if (submenu) {
    // Mobile submenu (Accordion)
    if (isMobile) {
      return (
        <Accordion type="single" collapsible>
          <AccordionItem value={label}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>
              <ul>
                {submenu.map(item => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link to={item.href} className={pathname === item.href ? styles.navLinkActive : styles.navLink}>
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

    // Desktop submenu (Dropdown)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            {label}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {submenu.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Regular link
  const linkClass = `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

  const linkContent = (
    <Link to={href} className={linkClass}>
        {label}
    </Link>
  );

  return isMobile ? <SheetClose asChild>{linkContent}</SheetClose> : linkContent;
};

export function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `${styles.header} ${isScrolled ? styles.headerScrolled : ''}`;

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={isMobile ? styles.mobileNav : styles.desktopNav}>
      {navLinks.map((link) => (
         <NavLink key={link.label} {...link} pathname={pathname} isMobile={isMobile} />
      ))}
    </nav>
  );

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
             <Link to="/">
                <Logo />
             </Link>
             <NavLinks />
          </div>

          <div className={styles.rightSection}>
             <Button asChild>
              <Link to="/free-trial">
                {/* This button content will need its own styling */}
                FREE CLASS
              </Link>
            </Button>
          </div>

          <div className={styles.mobileMenuButton}>
             <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <Menu />
                  <span>Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className={styles.mobileSheetContent}>
                <div style={{ marginBottom: '2rem' }}>
                  <SheetClose asChild>
                    <Link to="/">
                      <Logo />
                    </Link>
                  </SheetClose>
                </div>
                <NavLinks isMobile />
                <Button asChild style={{ marginTop: '2rem', width: '100%' }}>
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
