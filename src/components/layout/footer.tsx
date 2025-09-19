import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';
import styles from './footer.module.css';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoColumn}>
            <Logo />
            <p>
              Katy's premier Jiu-Jitsu academy.
            </p>
          </div>
          <div className={styles.column}>
            <h3>Navigation</h3>
            <ul>
              {navLinks.map((link) => (
                 <li key={link.href}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Social</h3>
            <ul>
              {socialLinks.map(link => (
                <li key={link.name}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
             <h3>Sponsor</h3>
             <div>
                <a href="https://rekt.com" target="_blank" rel="noopener noreferrer">
                    <p>Proudly sponsored by</p>
                    <span>REKT</span>
                </a>
             </div>
          </div>
        </div>
        <div className={styles.bottomText}>
          <p>&copy; {new Date().getFullYear()} Reign Jiu Jitsu Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}