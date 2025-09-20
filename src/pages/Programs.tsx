import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { programs } from '@/lib/data';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div >
      <div >
        <h1 >Our Programs</h1>
        <p >
          A path for everyone, from beginners to world champions. Find the program that's right for you.
        </p>
      </div>

      <div >
        {programs.map((program) => (
          <Card key={program.id} >
            <CardHeader >
              {program.image && (
                <Link to={`/programs/${program.id}`}>
                  <div >
                    <img
                      src={program.image.imageUrl}
                      alt={program.title}

                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardContent >
              <CardTitle >
                <Link to={`/programs/${program.id}`}>{program.title}</Link>
              </CardTitle>
            </CardContent>
            <CardFooter >
              <Button asChild >
                <Link to={`/programs/${program.id}`}>
                  Learn More
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
