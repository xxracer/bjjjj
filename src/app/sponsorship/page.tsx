import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reign Jiu Jitsu Partners with REKT | Katy TX Jiu Jitsu Sponsorship',
    description: 'Reign Jiu Jitsu is proud to be sponsored by REKT. Together we support Jiu Jitsu athletes and the Katy martial arts community.',
};

export default function SponsorshipPage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold uppercase tracking-wider sm:text-5xl md:text-6xl">Sponsorship</h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                    We are proud to partner with brands that support our community and the art of Jiu Jitsu.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold">Proudly Sponsored by REKT</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        REKT is a leader in high-performance gear and apparel, dedicated to supporting athletes in their pursuit of excellence. We are thrilled to have their support for our competition team and the wider Reign Jiu Jitsu community in Katy.
                    </p>
                    <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/80">
                        <a href="https://rekt.com" target="_blank" rel="noopener noreferrer">
                            Visit REKT.com
                        </a>
                    </Button>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://rekt.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="https://picsum.photos/seed/rekt/400/200"
                            alt="REKT logo"
                            width={400}
                            height={200}
                            className="max-w-xs w-full"
                            data-ai-hint="company logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
