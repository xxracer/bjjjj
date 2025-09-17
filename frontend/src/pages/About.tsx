import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // This file will contain the styles for the page

// --- Placeholder Data ---
// This data will be replaced later when the `lib` directory is migrated.
const aboutImage = {
  imageUrl: 'https://picsum.photos/seed/about/800/600',
  description: 'A placeholder image for the about section',
};

const instructors = [
  {
    id: '1',
    name: 'Instructor One',
    beltRank: 'Black Belt',
    image: {
      imageUrl: 'https://picsum.photos/seed/instructor1/400/400',
      description: 'Portrait of Instructor One',
    },
  },
  {
    id: '2',
    name: 'Instructor Two',
    beltRank: 'Brown Belt',
    image: {
      imageUrl: 'https://picsum.photos/seed/instructor2/400/400',
      description: 'Portrait of Instructor Two',
    },
  },
  {
    id: '3',
    name: 'Instructor Three',
    beltRank: 'Purple Belt',
    image: {
      imageUrl: 'https://picsum.photos/seed/instructor3/400/400',
      description: 'Portrait of Instructor Three',
    },
  },
];
// --- End of Placeholder Data ---


export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Reign & Our Method</h1>
        <p>Discover the philosophy and passion behind our academy.</p>
      </div>

      <div className="philosophy-section">
        <div className="philosophy-text">
          <h2>Our Philosophy</h2>
          <p>
            At Reign Jiu Jitsu, we believe that martial arts is a powerful tool for personal growth. Our method is built on a foundation of respect, discipline, and continuous improvement. We foster a positive and challenging environment where every student, regardless of age or skill level, can thrive.
          </p>
          <p>
            We are more than just a gym; we are a community. We support each other on and off the mats, celebrating victories and learning from setbacks together. Our goal is to empower you with the skills and confidence to not only defend yourself but to conquer any challenge life throws your way.
          </p>
        </div>
        {aboutImage && (
          <div className="philosophy-image">
            <img
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
            />
          </div>
        )}
      </div>

       <div className="team-header">
        <h2>Meet the Team</h2>
      </div>

      <div className="team-grid">
        {instructors.map((instructor) => (
          <Link key={instructor.id} to={`/instructors/${instructor.id}`} className="instructor-card">
            <div className="instructor-image-wrapper">
              {instructor.image && (
                <img
                  src={instructor.image.imageUrl}
                  alt={`Portrait of ${instructor.name}`}
                  className="instructor-image"
                />
              )}
            </div>
            <h3>{instructor.name}</h3>
            <p className="instructor-rank">{instructor.beltRank}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
