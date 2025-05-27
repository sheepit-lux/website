
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
        {/* Row 1: About SheepIT Text (Centered) */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            About SheepIT
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            SheepIT is an enterprise software development company founded by Emmanuel Mouton, a Senior Software Architect with over 16 years of hands-on experience in designing and building complex, scalable, and mission-critical systems.
          </p>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We specialize in translating intricate business requirements into robust technical solutions.
          </p>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our approach is rooted in deep technical expertise, strategic thinking, and a commitment to long-term partnerships.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We empower businesses to innovate and grow by leveraging cutting-edge technologies and best practices in software architecture.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">Discuss Your Project</Link>
          </Button>
        </div>

        {/* Row 2: Emmanuel Mouton Card & Logo Card */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Emmanuel Mouton Card */}
          <Card className="p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
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
                {linkedInProfileUrl && linkedInProfileUrl !== "https://linkedin.com/in/yourprofile" && (
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
                )}
              </div>
            </div>
            
            <div className="space-y-4 mt-auto"> {/* mt-auto to push expertise to bottom if card stretches */}
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

          {/* Right Column: Logo Card */}
          <Card className="p-8 flex justify-center items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
            <Image
              src={sheepItOptimizedLogo}
              alt="SheepIT Company Logo"
              width={250} 
              height={250}
              className="h-auto w-auto max-h-[250px] max-w-[250px] logo-themeable"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
