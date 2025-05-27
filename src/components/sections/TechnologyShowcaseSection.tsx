
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Database, Code, Cloud, ShieldCheck, GitBranchPlus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechExpertise {
  icon: LucideIcon;
  name: string;
  category: string;
}

const technologies: TechExpertise[] = [
  { icon: Cloud, name: 'Cloud Platforms (AWS, Azure, GCP)', category: 'Infrastructure' },
  { icon: Code, name: 'Modern Frameworks (React, Next.js, Node.js, .NET)', category: 'Development' },
  { icon: GitBranchPlus, name: 'DevOps & CI/CD', category: 'Operations' },
  { icon: Database, name: 'Database Technologies (SQL, NoSQL)', category: 'Data Management' },
  { icon: ShieldCheck, name: 'Security Best Practices', category: 'Security' },
  { icon: Server, name: 'Microservices & APIs', category: 'Architecture' },
];

const TechCard = ({ icon: Icon, name, category }: TechExpertise) => (
  <Card className="transform transition-all duration-300 hover:shadow-lg hover:border-primary/50">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-md font-medium">{name}</CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground">{category}</div>
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
