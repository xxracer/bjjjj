import { Button } from '@/components/ui/button';
import { programs, instructors, faqContent } from '@/lib/data';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import type { InstagramPost } from '@/ai/flows/fetch-instagram-posts';
import { fetchInstagramPosts } from '@/ai/flows/fetch-instagram-posts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function HomePageClient() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const posts = await fetchInstagramPosts();
        setInstagramPosts(posts);
      } catch (error) {
        console.error('Failed to fetch instagram posts', error);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  const generalFaqs = faqContent.find(category => category.title === 'General')?.faqs || [];

  const fundamentalsProgram = programs.find(p => p.id === 'jiu-jitsu-fundamentals');
  const kidsProgram = programs.find(p => p.id === 'kids-jiu-jitsu');
  const privateProgram = programs.find(p => p.id === 'private-training');
  const finalImage = { imageUrl: 'https://picsum.photos/seed/final1/800/600', imageHint: 'jiu jitsu class' };

  return (
    <div >
      {/* Hero Section */}
       <section >
        <video
          src="https://video.wixstatic.com/video/c5947c_d0a123d1c62d47f0a7688a29ca9325ca/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline

        />
        <div  />
        <div >
          <h1 >
            Reign Jiu Jitsu
          </h1>
          <p >
            Discover the discipline, confidence, and community of Jiu-Jitsu right here in Katy, TX.
          </p>
          <Button asChild size="lg" >
            <Link to="/free-trial">
               <div >
                  <div ></div>
                  <span >SIGN UP FOR YOUR</span>
                  <span >FREE CLASS TODAY</span>
                  <div ></div>
              </div>
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section >
        <div >
          <h2 >Welcome to Reign Jiu Jitsu – Katy, TX</h2>
          <div >
            <p>Reign Jiu Jitsu is more than a martial arts academy; we are a family-driven community dedicated to personal growth, discipline, and the art of Jiu Jitsu.</p>
            <p>Located in Katy, Texas, we welcome students of all ages—from kids as young as 4 years old to adults seeking fitness, self-defense, or competition-level Jiu Jitsu training.</p>
            <p>Whether you’re searching for “Jiu Jitsu near me”, beginner BJJ classes, kids martial arts in Katy, or advanced Jiu Jitsu competition training, Reign Jiu Jitsu is Katy’s trusted source.</p>
            <p>👉 Start your journey today with a FREE trial class and experience why families across Katy, Richmond, Cypress, and Houston choose Reign Jiu Jitsu.</p>
          </div>
        </div>
      </section>

       {/* Why Choose Section */}
      <section >
        <div >
          <h2 >Why Choose Jiu Jitsu in Katy?</h2>
          <p >Training at Reign BJJ isn’t just about learning techniques. Our Jiu Jitsu classes in Katy provide:</p>
          <ul >
            <li ><Check  /><span>Practical self-defense skills for kids, teens, and adults</span></li>
            <li ><Check  /><span>Weight loss & fitness training that builds lean muscle</span></li>
            <li ><Check  /><span>Confidence, focus, and discipline—invaluable both on and off the mats</span></li>
            <li ><Check  /><span>A positive, family-friendly martial arts community</span></li>
          </ul>
        </div>
      </section>

      {/* Programs Section */}
      <section >
        <div >
          <h2 >Our programs cover:</h2>

          {/* JJ Fundamentals */}
          {fundamentalsProgram && (
            <Link to={`/programs/${fundamentalsProgram.id}`} >
              <div >
                <div>
                  <h3 >{fundamentalsProgram.title} → perfect for beginners</h3>
                </div>
                <div >
                    <img
                      src="https://placehold.co/800x450.png"
                      alt={fundamentalsProgram.title}

                    />
                </div>
              </div>
            </Link>
          )}

          {/* Kids Jiu-Jitsu Program */}
          {kidsProgram && (
             <Link to={`/programs/${kidsProgram.id}`} >
              <div >
                <div >
                    <img
                      src="https://placehold.co/800x450.png"
                      alt={kidsProgram.title}

                    />
                  </div>
                <div >
                  <h3 >{kidsProgram.title} (ages 4–13) → confidence, focus & anti-bullying skills</h3>
                </div>
              </div>
            </Link>
          )}

          {/* Private Training Program */}
          {privateProgram && (
            <Link to={`/programs/${privateProgram.id}`} >
              <div >
                <div>
                  <h3 >{privateProgram.title} in Katy TX → one-on-one progress with our instructors</h3>
                </div>
                <div >
                    <img
                      src="https://placehold.co/800x450.png"
                      alt={privateProgram.title}

                    />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section >
        <div >
            <div >
                 <h2 >Try Katy’s Favorite Jiu Jitsu Classes Today</h2>
                 <p >No matter your age, skill level, or goals, Reign Jiu Jitsu in Katy has a program tailored for you:</p>
                 <ul >
                    <li >✅ <span>Parents love our after-school martial arts for kids</span></li>
                    <li >✅ <span>Women join us for self-defense and fitness Jiu Jitsu classes</span></li>
                    <li >✅ <span>Adults and athletes push their limits with competition BJJ training in Katy</span></li>
                 </ul>
                 <p >📍 Join us in Katy, TX—just minutes from Richmond, Cinco Ranch, and Cypress—for your first free Jiu Jitsu class.</p>
            </div>
            <div >
                 <img
                    src={finalImage.imageUrl}
                    alt="Try Katy’s Favorite Jiu Jitsu Classes Today"

                />
            </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section >
        <div >
          <div >
            <h2 >Meet Our Instructors</h2>
          </div>
          <div >
            {instructors.map((instructor) => (
              <Link key={instructor.id} to={`/instructors/${instructor.id}`} >
                {instructor.image && (
                  <div >
                    <img
                      src={instructor.image.imageUrl}
                      alt={`Portrait of ${instructor.name}`}

                    />
                  </div>
                )}
                <h3 >{instructor.name}</h3>
                <p >{instructor.beltRank}</p>
              </Link>
            ))}
          </div>
           <div >
                <Button asChild >
                    <Link to="/instructors">View All Instructors</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section >
        <div >
          <div >
            <h2 >Follow us on Instagram</h2>
          </div>
          <div >
            {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}  />
                ))
            ) : (
                instagramPosts.map((post) => (
                <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" >
                  {post.media_type === 'VIDEO' ? (
                    <video src={post.media_url} autoPlay loop muted playsInline  />
                  ) : (
                    <img
                      src={post.media_url}
                      alt={post.caption || 'Instagram post'}

                    />
                  )}
                  <div >
                    <p >{post.caption}</p>

                  </div>
                </a>
              ))
            )}
          </div>
          <div >
            <Button asChild variant="outline" size="lg" >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                View on Instagram
                <ArrowRight  />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section >
        <div >
           <div >
            <h2 >From The Blog</h2>
          </div>
           <div >
              <Card >
                  <CardContent >
                      <h3 >The Beginner's Guide to BJJ</h3>
                      <p >Everything you need to know before stepping on the mats for the first time.</p>
                  </CardContent>
                  <div >
                      <Button asChild variant="link" >
                          <Link to="/blog">Read More</Link>
                      </Button>
                  </div>
              </Card>
               <Card >
                  <CardContent >
                      <h3 >Nutrition for Grapplers</h3>
                      <p >Fuel your body for performance and recovery with these essential tips.</p>
                  </CardContent>
                   <div >
                       <Button asChild variant="link" >
                           <Link to="/blog">Read More</Link>
                       </Button>
                   </div>
              </Card>
               <Card >
                  <CardContent >
                      <h3 >The Importance of Drilling</h3>
                      <p >Why repetition is the key to building muscle memory and sharp technique.</p>
                  </CardContent>
                   <div >
                       <Button asChild variant="link" >
                           <Link to="/blog">Read More</Link>
                       </Button>
                   </div>
              </Card>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section >
        <div >
           <div >
            <h2 >Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible >
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} >
                <AccordionTrigger >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div >
                <Button asChild variant="outline" >
                    <Link to="/faq">View All FAQs</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Contact Section */}
       <section >
        <div >
            <h2 >Get In Touch</h2>
            <p >Questions? Ready to start? We're here to help.</p>
            <form >
                <div >
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                </div>
                <Textarea placeholder="Your Message"  />
                <div >
                    <Button type="submit" size="lg" >
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
      </section>
    </div>
  );
}
