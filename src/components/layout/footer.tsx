import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';
import { navLinks } from '@/lib/data';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
];

export function Footer() {
  return (
    <footer >
      <div >
        <div >
          <div >
            <Logo />
            <p >
              Katy's premier Jiu-Jitsu academy.
            </p>
          </div>
          <div >
            <h3 >Navigation</h3>
            <ul >
              {navLinks.map((link) => (
                 <li key={link.href}><Link to={link.href} >{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div >
            <h3 >Social</h3>
            <ul >
              {socialLinks.map(link => (
                <li key={link.name}><a href={link.href} >{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div >
             <h3 >Sponsor</h3>
             <div >
                <a href="https://rekt.com" target="_blank" rel="noopener noreferrer" >
                    <p className='text-sm text-muted-foreground'>Proudly sponsored by</p>
                    <span className='text-2xl font-bold'>REKT</span>
                </a>
             </div>
          </div>
        </div>
        <div >
          <p>&copy; {new Date().getFullYear()} Reign Jiu Jitsu Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}