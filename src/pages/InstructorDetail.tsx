import { instructors } from '@/lib/data';
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import NotFoundPage from './NotFound';

export default function InstructorProfilePage() {
  const { id } = useParams<{ id: string }>();
  const instructor = instructors.find((inst) => inst.id === id);

  if (!instructor) {
    return <NotFoundPage />;
  }

  return (
    <div >
      <div >
        <div >
          {instructor.image && (
            <div >
              <img
                src={instructor.image.imageUrl}
                alt={`Portrait of ${instructor.name}`}

              />
            </div>
          )}
          <h1 >{instructor.name}</h1>
          <Badge variant="default" >
            {instructor.beltRank}
          </Badge>
          <div >
            {instructor.yearsOfExperience} Years of Experience
          </div>
        </div>
        <div >
          <h2 >Biography</h2>
          <div >
            <p >{instructor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
