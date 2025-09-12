import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        id: '1',
        title: 'The Beginner\'s Guide to Brazilian Jiu-Jitsu',
        description: 'New to the gentle art? Here are 5 essential tips to get you started on your BJJ journey, from choosing a gym to your first roll.',
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
        title: 'Anti-Bullying through BJJ: Empowering Your Child',
        description: 'Jiu-Jitsu teaches more than self-defense. It builds confidence, discipline, and resilience. Discover how BJJ can empower your child against bullying.',
        date: 'October 5, 2023',
        imageHint: 'confident child',
        imageUrl: 'https://picsum.photos/seed/blog3/800/400',
    },
];


export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Reign BJJ Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Insights, tips, and stories from our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
             <CardHeader className="p-0">
                <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative aspect-video">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            data-ai-hint={post.imageHint}
                        />
                    </div>
                </Link>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline hover:text-primary">
                 <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="mt-2 text-base">{post.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center text-muted-foreground">
              <span>{post.date}</span>
               <Button asChild variant="link" className="p-0">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
