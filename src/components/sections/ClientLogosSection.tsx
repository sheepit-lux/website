
import Image from 'next/image';

interface ClientLogo {
  name: string;
  logoSrc: string;
  aiHint: string;
}

const clientLogos: ClientLogo[] = [
  { name: 'Expeto', logoSrc: '/expeto_optimized_logo.svg', aiHint: 'logo company' },
  { name: 'Tokeny Solutions', logoSrc: 'https://placehold.co/200x80.png', aiHint: 'logo crypto blockchain' },
  // Add more client logos here if needed. For example:
  // { name: 'Another Client', logoSrc: 'https://placehold.co/200x80.png', aiHint: 'logo tech' },
  // { name: 'Startup Inc.', logoSrc: 'https://placehold.co/200x80.png', aiHint: 'logo startup' },
];

export default function ClientLogosSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground mb-10 sm:text-3xl">
          Trusted by Industry Leaders & Innovators
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clientLogos.map((client) => (
            <div key={client.name} className="group relative">
              <Image
                src={client.logoSrc}
                alt={`${client.name} logo`}
                width={160}
                height={64}
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={client.aiHint}
              />
               <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
