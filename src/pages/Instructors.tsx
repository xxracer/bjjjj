import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { instructors } from '@/lib/data';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function InstructorsPage() {
  return (
    <div >
      <div >
        <h1 >Meet Our Instructors</h1>
        <p >
          Learn from a dedicated team of experienced and passionate martial artists.
        </p>
      </div>

      <div >
        {instructors.map((instructor) => (
          <Card key={instructor.id} >
            <CardHeader >
              {instructor.image && (
                <Link to={`/instructors/${instructor.id}`} >
                  <div >
                    <img
                      src={instructor.image.imageUrl}
                      alt={`Portrait of ${instructor.name}`}

                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardContent >
              <CardTitle >
                 <Link to={`/instructors/${instructor.id}`}>{instructor.name}</Link>
              </CardTitle>
              <Badge variant="secondary" >{instructor.beltRank}</Badge>
            </CardContent>
            <CardFooter >
              <Button asChild >
                <Link to={`/instructors/${instructor.id}`}>
                  View Profile
                  <ArrowRight  />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
