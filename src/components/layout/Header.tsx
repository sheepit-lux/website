
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import sheepItLogo from '@/app/images/Sheep_IT_logo.svg'; // Import the logo

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Clients', href: '#clients' },
  { label: 'Tech', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8"> {/* Increased header height */}
        <Link href="/" className="flex items-center gap-2" aria-label="SheepIT Home">
          <Image src={sheepItLogo} alt="SheepIT Logo" width={80} height={80} className="h-20 w-20" /> {/* Increased logo size */}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={handleLinkClick} aria-label="SheepIT Home">
                  <Image src={sheepItLogo} alt="SheepIT Logo" width={60} height={60} className="h-16 w-16" /> {/* Increased logo size in mobile menu */}
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild className="w-full mt-4" onClick={handleLinkClick}>
                      <Link href="#contact">Get In Touch</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
