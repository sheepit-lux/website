
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gradient-from to-gradient-to text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Software Development</span>
          <span className="block">Enterprise Architecture</span>
          <span className="block text-primary-foreground opacity-90">Technical Leadership</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg text-primary-foreground opacity-80 sm:max-w-xl md:text-xl lg:text-2xl">
          Crafting robust, scalable, and innovative software solutions for established companies and ambitious startups.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button size="lg" asChild variant="default">
            <Link href="#contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
             <Link href="#services">
              Our Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
