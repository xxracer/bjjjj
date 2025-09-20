import { PlaceHolderImages } from '@/lib/placeholder-images';
import { instructors } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'insta-1');

  return (
    <div >
      <div >
        <h1 >About Reign & Our Method</h1>
        <p >
          Discover the philosophy and passion behind our academy.
        </p>
      </div>

      <div >
        <div >
          <h2 >Our Philosophy</h2>
          <p>
            At Reign Jiu Jitsu, we believe that martial arts is a powerful tool for personal growth. Our method is built on a foundation of respect, discipline, and continuous improvement. We foster a positive and challenging environment where every student, regardless of age or skill level, can thrive.
          </p>
          <p>
            We are more than just a gym; we are a community. We support each other on and off the mats, celebrating victories and learning from setbacks together. Our goal is to empower you with the skills and confidence to not only defend yourself but to conquer any challenge life throws your way.
          </p>
        </div>
        {aboutImage && (
          <div >
            <img
              src={aboutImage.imageUrl}
              alt={aboutImage.description}

            />
          </div>
        )}
      </div>

       <div >
        <h2 >Meet the Team</h2>
      </div>

      <div >
        {instructors.map((instructor) => (
          <Link key={instructor.id} to={`/instructors/${instructor.id}`} >
            <div >
              {instructor.image && (
                <div >
                  <img
                    src={instructor.image.imageUrl}
                    alt={`Portrait of ${instructor.name}`}

                  />
                </div>
              )}
              <h3 >{instructor.name}</h3>
              <p >{instructor.beltRank}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
