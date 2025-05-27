
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Award, BrainCircuit, Users, Linkedin } from 'lucide-react';
import sheepItOptimizedLogo from '@/app/images/SheepIT_optimized_logo.svg';
import manumoutonAvatar from '@/app/images/manumouton_avatar.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection() {
  const linkedInProfileUrl = "https://www.linkedin.com/in/manumouton/";

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: About Text and Logo Card */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: About SheepIT Text */}
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
            <p className="text-lg text-muted-foreground mb-8">
              We empower businesses to innovate and grow by leveraging cutting-edge technologies and best practices in software architecture.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>

          {/* Right Column: Logo Card */}
          <div className="flex md:justify-center items-start pt-4 md:pt-0"> {/* Centering the card in its column */}
            <Card className="p-8 flex justify-center items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-sm md:max-w-md">
              <Image
                src={sheepItOptimizedLogo}
                alt="SheepIT Company Logo"
                width={200}
                height={200}
                className="h-auto w-auto max-h-[200px] max-w-[200px] logo-themeable"
              />
            </Card>
          </div>
        </div>

        {/* Second Row: Emmanuel Mouton Card (Centered) */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Card className="p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full md:max-w-2xl lg:max-w-3xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="w-full md:w-auto md:flex-shrink-0">
                <Image
                  src={manumoutonAvatar}
                  alt="Emmanuel Mouton, Founder & Senior Software Architect"
                  width={160}
                  height={160}
                  className="rounded-lg shadow-md object-cover mx-auto md:mx-0"
                  data-ai-hint="portrait Emmanuel Mouton"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-1">Emmanuel Mouton</h3>
                <p className="text-md text-muted-foreground mb-4">Founder & Senior Software Architect</p>
                <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                  <Link
                    href={linkedInProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium"
                    aria-label="View Emmanuel Mouton's LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    View LinkedIn Profile
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Deep Expertise</h4>
                  <p className="text-muted-foreground text-sm">Architecting solutions for complex enterprise challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">16+ Years Experience</h4>
                  <p className="text-muted-foreground text-sm">Proven track record in technical leadership and software design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Client-Focused</h4>
                  <p className="text-muted-foreground text-sm">Building long-term partnerships for sustained success.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
