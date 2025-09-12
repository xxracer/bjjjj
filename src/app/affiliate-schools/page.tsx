import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const affiliates = [
    {
        name: "Gracie Barra HQ",
        location: "Irvine, CA",
        imageUrl: "https://picsum.photos/seed/aff1/600/400",
        imageHint: "cityscape california",
    },
    {
        name: "Renzo Gracie Academy",
        location: "New York, NY",
        imageUrl: "https://picsum.photos/seed/aff2/600/400",
        imageHint: "cityscape new york",
    },
    {
        name: "Atos Jiu-Jitsu",
        location: "San Diego, CA",
        imageUrl: "https://picsum.photos/seed/aff3/600/400",
        imageHint: "cityscape san diego",
    }
];

export default function AffiliateSchoolsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Our Affiliate Schools</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Part of a global network of world-class Jiu-Jitsu academies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {affiliates.map((school) => (
          <Card key={school.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-0">
                <div className="relative aspect-video">
                <Image
                    src={school.imageUrl}
                    alt={`Image of ${school.location}`}
                    fill
                    className="object-cover"
                    data-ai-hint={school.imageHint}
                />
                </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline">{school.name}</CardTitle>
              <p className="text-muted-foreground mt-1">{school.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
