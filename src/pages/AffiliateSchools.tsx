import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div >
      <div >
        <h1 >Our Affiliate Schools</h1>
        <p >
          Part of a global network of world-class Jiu-Jitsu academies.
        </p>
      </div>

      <div >
        {affiliates.map((school) => (
          <Card key={school.name} >
            <CardHeader >
                <div >
                <img
                    src={school.imageUrl}
                    alt={`Image of ${school.location}`}

                />
                </div>
            </CardHeader>
            <CardContent >
              <CardTitle >{school.name}</CardTitle>
              <p >{school.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
