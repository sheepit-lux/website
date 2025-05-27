
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Award, BrainCircuit, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              About SheepIT
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              SheepIT is an enterprise software development company founded by Emmanuel Mouton, a Senior Software Architect with over 16 years of hands-on experience in designing and building complex, scalable, and mission-critical systems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We specialize in translating intricate business requirements into robust technical solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our approach is rooted in deep technical expertise, strategic thinking, and a commitment to long-term partnerships.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We empower businesses to innovate and grow by leveraging cutting-edge technologies and best practices in software architecture.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Deep Expertise</h3>
                  <p className="text-muted-foreground text-sm">Architecting solutions for complex enterprise challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">16+ Years Experience</h3>
                  <p className="text-muted-foreground text-sm">Proven track record in technical leadership and software design.</p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Client-Focused</h3>
                  <p className="text-muted-foreground text-sm">Building long-term partnerships for sustained success.</p>
                </div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Emmanuel Mouton or abstract tech background"
              fill={true}
              style={{objectFit: 'cover'}}
              data-ai-hint="professional office"
              className="transform transition-transform duration-500 hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white">Emmanuel Mouton</h3>
                <p className="text-md text-primary-foreground opacity-90">Founder & Senior Software Architect</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
