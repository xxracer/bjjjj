import { Button } from "@/components/ui/button";

export default function SponsorshipPage() {
    return (
        <div >
            <div >
                <h1 >Sponsorship</h1>
                <p >
                    We are proud to partner with brands that support our community and the art of Jiu Jitsu.
                </p>
            </div>

            <div >
                <div >
                    <h2 >Proudly Sponsored by REKT</h2>
                    <p >
                        REKT is a leader in high-performance gear and apparel, dedicated to supporting athletes in their pursuit of excellence. We are thrilled to have their support for our competition team and the wider Reign Jiu Jitsu community in Katy.
                    </p>
                    <Button asChild >
                        <a href="https://rekt.com" target="_blank" rel="noopener noreferrer">
                            Visit REKT.com
                        </a>
                    </Button>
                </div>
                <div >
                    <a href="https://rekt.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://picsum.photos/seed/rekt/400/200"
                            alt="REKT logo"

                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
