
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, UsersRound, Workflow, Globe, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Building2,
    title: 'Enterprise Software Architecture',
    description: 'Designing scalable, resilient, and high-performing software architectures tailored to your business needs.',
  },
  {
    icon: UsersRound,
    title: 'Technical Leadership & Consulting',
    description: 'Providing expert guidance, team leadership, and strategic consulting to elevate your team technical capabilities.',
  },
  {
    icon: Workflow,
    title: 'Process Automation & Integration',
    description: 'Streamlining workflows and integrating disparate systems to enhance efficiency and productivity of your business.',
  },
  {
    icon: Globe,
    title: 'Enterprise Web Solutions',
    description: 'Developing robust and modern web applications, platforms, and APIs for complex business requirements.',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Building tailor-made software solutions from scratch to meet your unique business and operational requirements.',
  },
];

const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
    <CardHeader className="flex flex-row items-center gap-4 pb-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Offerings</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide specialized services to help your business thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
