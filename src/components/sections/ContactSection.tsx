
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services?
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
          <div className="space-y-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Contact Information</h3>
              <p className="text-muted-foreground mb-4">
                Feel free to reach out via email, phone, or by filling out the contact form.
              </p>
              <p className="text-muted-foreground mb-4">
                We aim to respond to all inquiries within 24 business hours.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Email Us</h4>
                <a href="mailto:info@sheepit.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@sheepit.eu
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Call Us</h4>
                <a href="tel:+352661629814" className="text-muted-foreground hover:text-primary transition-colors">
                  +352 661 629 814
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-muted-foreground">
                  Remote First Company <br /> (Serving clients globally)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Building className="h-6 w-6 text-primary" /> {/* Using Building icon for office */}
              </div>
              <div>
                <h4 className="font-medium text-foreground">Physical Office</h4>
                <p className="text-muted-foreground">
                  1 Rue de Holtz<br />
                  L-8826 Perlé<br />
                  Luxembourg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
