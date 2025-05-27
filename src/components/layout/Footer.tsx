
import Image from 'next/image';
import Link from 'next/link';
import sheepItLogo from '@/app/images/Sheep_IT_logo.svg'; // Import the logo

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:py-12">
        <Link href="/" className="flex items-center gap-2" aria-label="SheepIT Home">
          <Image src={sheepItLogo} alt="SheepIT Logo" width={72} height={72} className="h-18 w-18" /> {/* Increased logo size */}
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
