import { facilityImages } from "@/lib/data";
import Image from "next/image";

const features = [
    "Over 2,000 sq ft of mat space",
    "Zebra Pro Series Competition Mats",
    "Men's and Women's Changing Rooms with Showers",
    "Strength & Conditioning Area with Free Weights",
    "Comfortable Spectator Seating",
    "Pro Shop with Gis, Rashguards, and Gear",
    "Snacks and Drinks available for purchase",
    "Clean and Sanitized Facility"
]

export default function FacilityPage() {
    return (
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Our State-of-the-Art Facility</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    We've built a world-class training environment designed for your success, safety, and comfort.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-16">
                {facilityImages.map((image) => (
                     <div key={image.id} className="relative aspect-w-16 aspect-h-10">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="bg-secondary/50 p-8 rounded-none">
                    <h2 className="text-3xl font-bold font-headline mb-6">Facility Features</h2>
                    <ul className="space-y-4 text-lg">
                       {features.map((feature, index) => (
                           <li key={index} className="flex items-center gap-3">
                                <svg className="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                               <span>{feature}</span>
                           </li>
                       ))}
                    </ul>
                </div>
                 <div className="aspect-w-4 aspect-h-3">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.689659223013!2d-95.77118968489117!3d29.75783598198759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121da633c3739%3A0x1d5f4a6136d77b81!2sKaty%2C%20TX!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Reign Jiu Jitsu Katy Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
