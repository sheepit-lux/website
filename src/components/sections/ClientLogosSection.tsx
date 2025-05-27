
import Image from 'next/image';
import Link from 'next/link'; // Added Link import
import expetoLogo from '@/app/images/expeto_optimized_logo.svg'; 
import tokenyLogo from '@/app/images/tokeny_optimized_logo.svg';

interface ClientLogo {
  name: string;
  logoSrc: string | any; // Can be string (URL) or StaticImageData (imported image)
  aiHint: string;
  isSvg?: boolean; // Flag to identify if the logo is an imported SVG
  href?: string; // Optional link for the logo
}

const clientLogos: ClientLogo[] = [
  { name: 'Expeto', logoSrc: expetoLogo, aiHint: 'logo company', isSvg: true, href: 'https://www.expeto.io/' },
  { name: 'Tokeny Solutions', logoSrc: tokenyLogo, aiHint: 'logo crypto blockchain', isSvg: true, href: 'https://tokeny.com/' },
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
              {client.href ? (
                <Link href={client.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.name} website`}>
                  <Image
                    src={client.logoSrc}
                    alt={`${client.name} logo`}
                    width={160}
                    height={64}
                    className={`opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${client.isSvg ? 'logo-themeable' : ''}`}
                    data-ai-hint={client.aiHint}
                  />
                </Link>
              ) : (
                <Image
                  src={client.logoSrc}
                  alt={`${client.name} logo`}
                  width={160}
                  height={64}
                  className={`opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${client.isSvg ? 'logo-themeable' : ''}`}
                  data-ai-hint={client.aiHint}
                />
              )}
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
