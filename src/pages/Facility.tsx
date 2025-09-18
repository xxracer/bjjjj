import { facilityImages } from "@/lib/data";

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
        <div >
            <div >
                <h1 >Our State-of-the-Art Facility</h1>
                <p >
                    We've built a world-class training environment designed for your success, safety, and comfort.
                </p>
            </div>

            <div >
                {facilityImages.map((image) => (
                     <div key={image.id} >
                        <img
                            src={image.imageUrl}
                            alt={image.description}

                        />
                    </div>
                ))}
            </div>

            <div >
                 <div >
                    <h2 >Facility Features</h2>
                    <ul >
                       {features.map((feature, index) => (
                           <li key={index} >
                                <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                               <span>{feature}</span>
                           </li>
                       ))}
                    </ul>
                </div>
                 <div >
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
