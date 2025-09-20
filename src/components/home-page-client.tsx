import { Button } from '@/components/ui/button';
import { programs, instructors, faqContent } from '@/lib/data';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import styles from './home-page-client.module.css';

export function HomePageClient() {
  const generalFaqs = faqContent.find(category => category.title === 'General')?.faqs || [];

  const fundamentalsProgram = programs.find(p => p.id === 'jiu-jitsu-fundamentals');
  const kidsProgram = programs.find(p => p.id === 'kids-jiu-jitsu');
  const privateProgram = programs.find(p => p.id === 'private-training');
  const finalImage = { imageUrl: 'https://picsum.photos/seed/final1/800/600', imageHint: 'jiu jitsu class' };

  return (
    <div>
      {/* Hero Section */}
       <section className={styles.heroSection}>
        <video
          src="https://video.wixstatic.com/video/c5947c_d0a123d1c62d47f0a7688a29ca9325ca/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Reign Jiu Jitsu
          </h1>
          <p className={styles.heroSubtitle}>
            Discover the discipline, confidence, and community of Jiu-Jitsu right here in Katy, TX.
          </p>
          <Button asChild>
            <Link to="/free-trial" className={styles.heroButton}>
              FREE CLASS TODAY
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={styles.sectionTitle}>Welcome to Reign Jiu Jitsu – Katy, TX</h2>
          <div className={`${styles.sectionSubtitle} ${styles.introText}`}>
            <p>Reign Jiu Jitsu is more than a martial arts academy; we are a family-driven community dedicated to personal growth, discipline, and the art of Jiu Jitsu.</p>
            <p>Located in Katy, Texas, we welcome students of all ages—from kids as young as 4 years old to adults seeking fitness, self-defense, or competition-level Jiu Jitsu training.</p>
            <p>Whether you’re searching for “Jiu Jitsu near me”, beginner BJJ classes, kids martial arts in Katy, or advanced Jiu Jitsu competition training, Reign Jiu Jitsu is Katy’s trusted source.</p>
            <p>👉 Start your journey today with a FREE trial class and experience why families across Katy, Richmond, Cypress, and Houston choose Reign Jiu Jitsu.</p>
          </div>
        </div>
      </section>

       {/* Why Choose Section */}
      <section className={`${styles.section} ${styles.sectionBgCard}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={styles.sectionTitle}>Why Choose Jiu Jitsu in Katy?</h2>
          <p className={styles.sectionSubtitle}>Training at Reign BJJ isn’t just about learning techniques. Our Jiu Jitsu classes in Katy provide:</p>
          <ul className={styles.grid}>
            <li><Check /><span>Practical self-defense skills for kids, teens, and adults</span></li>
            <li><Check /><span>Weight loss & fitness training that builds lean muscle</span></li>
            <li><Check /><span>Confidence, focus, and discipline—invaluable both on and off the mats</span></li>
            <li><Check /><span>A positive, family-friendly martial arts community</span></li>
          </ul>
        </div>
      </section>

      {/* Programs Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>Our programs cover:</h2>
          <div className={`${styles.grid} ${styles.gridCols3}`} style={{marginTop: '3rem'}}>
            {fundamentalsProgram && (
              <Link to={`/programs/${fundamentalsProgram.id}`} className={styles.programLink}>
                <div className={styles.programImageContainer}>
                  <img src="https://placehold.co/800x450.png" alt={fundamentalsProgram.title} className={styles.programImage} />
                </div>
                <h3 className={styles.programTitle}>{fundamentalsProgram.title}</h3>
              </Link>
            )}
            {kidsProgram && (
              <Link to={`/programs/${kidsProgram.id}`} className={styles.programLink}>
                <div className={styles.programImageContainer}>
                  <img src="https://placehold.co/800x450.png" alt={kidsProgram.title} className={styles.programImage} />
                </div>
                <h3 className={styles.programTitle}>{kidsProgram.title}</h3>
              </Link>
            )}
            {privateProgram && (
              <Link to={`/programs/${privateProgram.id}`} className={styles.programLink}>
                <div className={styles.programImageContainer}>
                  <img src="https://placehold.co/800x450.png" alt={privateProgram.title} className={styles.programImage} />
                </div>
                <h3 className={styles.programTitle}>{privateProgram.title}</h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ... Other sections will be left unstyled for now ... */}
    </div>
  );
}
