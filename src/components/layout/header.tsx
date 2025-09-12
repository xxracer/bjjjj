'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import Link from 'next/link';

const programLinks = [
    { href: '/programs/jiu-jitsu', label: 'Jiu Jitsu' },
    { href: '/programs/kids-jiu-jitsu', label: 'Kids Jiu Jitsu' },
    { href: '/programs/competition-training', label: 'Competition Training' },
    { href: '/programs/private-training', label: 'Private Training' },
    { href: '/programs/homeschool-martial-arts', label: 'Homeschool Martial Arts' },
];

const otherLinks = [
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


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <Logo />
          <button onClick={toggleMenu} className="menu-button" aria-label="Toggle Menu">
            Menu
          </button>
        </div>
      </header>

      <div id="menu-overlay" className={isMenuOpen ? 'open' : ''}>
        <div className="overlay-header">
           <Logo />
           <button onClick={toggleMenu} className="close-button" aria-label="Close Menu">
            &times;
          </button>
        </div>
        <nav className="overlay-nav">
            <div className="nav-column">
                <h3>Programs</h3>
                <ul>
                    {programLinks.map((link) => (
                        <li key={link.href}><Link href={link.href} onClick={closeMenu}>{link.label}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="nav-column">
                 <h3>Academy</h3>
                <ul>
                    {otherLinks.slice(0, 5).map((link) => (
                        <li key={link.href}><Link href={link.href} onClick={closeMenu}>{link.label}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="nav-column">
                 <h3>Resources</h3>
                <ul>
                    {otherLinks.slice(5).map((link) => (
                        <li key={link.href}><Link href={link.href} onClick={closeMenu}>{link.label}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
      </div>
    </>
  );
}
