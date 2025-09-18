import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: '1',
        title: 'The Beginner\'s Guide to Jiu-Jitsu',
        description: 'New to the gentle art? Here are 5 essential tips to get you started on your Jiu-Jitsu journey, from choosing a gym to your first roll.',
        date: 'October 26, 2023',
        imageUrl: 'https://picsum.photos/seed/blog1/800/400',
        imageHint: 'jiu jitsu beginner'
    },
    {
        id: '2',
        title: 'Nutrition for Grapplers: Fueling Your Performance',
        description: 'What you eat is just as important as how you train. Learn how to optimize your diet for better recovery, energy, and performance on the mats.',
        date: 'October 15, 2023',
        imageHint: 'healthy food',
        imageUrl: 'https://picsum.photos/seed/blog2/800/400',
    },
    {
        id: '3',
        title: 'Anti-Bullying through Jiu-Jitsu: Empowering Your Child',
        description: 'Jiu-Jitsu teaches more than self-defense. It builds confidence, discipline, and resilience. Discover how Jiu-Jitsu can empower your child against bullying.',
        date: 'October 5, 2023',
        imageHint: 'confident child',
        imageUrl: 'https://picsum.photos/seed/blog3/800/400',
    },
];


export default function BlogPage() {
  return (
    <div >
      <div >
        <h1 >Reign Jiu Jitsu Blog</h1>
        <p >
          Insights, tips, and stories from our community.
        </p>
      </div>

      <div >
        {blogPosts.map((post) => (
          <Card key={post.id} >
             <CardHeader >
                <Link to={`/blog/${post.id}`} >
                    <div >
                        <img
                            src={post.imageUrl}
                            alt={post.title}

                        />
                    </div>
                </Link>
            </CardHeader>
            <CardContent >
              <CardTitle >
                 <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription >{post.description}</CardDescription>
            </CardContent>
            <CardFooter >
              <span>{post.date}</span>
               <Button asChild variant="link" >
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
