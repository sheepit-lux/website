
import { Network } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:py-12">
        <Link href="/" className="flex items-center gap-2" aria-label="SheepIT Home">
          <Network className="h-7 w-7 text-primary" />
          <span className="text-xl font-semibold text-foreground">SheepIT</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SheepIT. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {/* Add social links here if needed */}
          {/* <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></Link> */}
        </div>
      </div>
    </footer>
  );
}
