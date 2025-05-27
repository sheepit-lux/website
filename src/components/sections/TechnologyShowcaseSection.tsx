
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Database, Code, Cloud, ShieldCheck, Coffee, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechExpertise {
  icon: LucideIcon;
  name: string;
  category: string;
}

const technologies: TechExpertise[] = [
  { icon: Coffee, name: 'Enterprise Java Ecosystem', category: 'Java, Kotlin, Groovy, Scala, Spring Boot, Spring Framework, Hibernate, JOOQ' },
  { icon: Server, name: 'Microservices & APIs', category: 'Domain-Driven Design, CQRS/Event Sourcing, REST APIs, Microservices, Enterprise Integration Patterns' },
  { icon: Globe, name: 'Modern Web Technologies', category: 'TypeScript, JavaScript, Node.js, Angular, React, Progressive Web Apps' },
  { icon: Cloud, name: 'Cloud & DevOps', category: 'AWS, Microsoft Azure, Docker, Kubernetes, Jenkins, GitLab CI/CD, Prometheus, Grafana' },
  { icon: Database, name: 'Enterprise Databases', category: 'PostgreSQL, MongoDB, Oracle DB, Flyway migrations, Time-series processing' },
  { icon: ShieldCheck, name: 'Security & Authentication', category: 'OAuth2, Spring Security, SAML/OIDC, Keycloak, Hashicorp Vault, SSL/TLS' },
];

const TechCard = ({ icon: Icon, name, category }: TechExpertise) => (
  <Card className="transform transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full flex flex-col">
    <CardHeader className="flex flex-row items-start gap-4 pb-4">
      <div className="bg-primary/10 p-3 rounded-full mt-1">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-grow">
        <CardTitle className="text-xl font-semibold text-foreground leading-tight">{name}</CardTitle> {/* Adjusted title style */}
      </div>
    </CardHeader>
    <CardContent className="pt-0 flex-grow">
      <p className="text-sm text-muted-foreground">{category}</p>
    </CardContent>
  </Card>
);


export default function TechnologyShowcaseSection() {
  return (
    <section id="tech" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Technology Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging a wide array of modern technologies to build exceptional software.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> {/* Increased gap slightly */}
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
