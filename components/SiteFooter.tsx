import Image from "next/image";
import Link from "next/link";

/** Shared site footer. */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <Image
              src="/logo.png"
              alt="DigitalNomads.com"
              width={4524}
              height={1230}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-neutral-500 leading-relaxed">
              Brand development, domain advisory, and full service brokerage for
              owners, investors, and internet entrepreneurs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <nav className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-neutral-900 mb-1">Explore</span>
              <Link href="/#services" className="text-neutral-500 hover:text-neutral-900 transition-colors">Services</Link>
              <Link href="/#process" className="text-neutral-500 hover:text-neutral-900 transition-colors">Process</Link>
              <Link href="/#nomad" className="text-neutral-500 hover:text-neutral-900 transition-colors">Nomad Life</Link>
            </nav>
            <nav className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-neutral-900 mb-1">Get in touch</span>
              <Link href="/#contact" className="text-neutral-500 hover:text-neutral-900 transition-colors">Make an Offer</Link>
              <Link href="/#contact" className="text-neutral-500 hover:text-neutral-900 transition-colors">Contact us</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <span>© {year} DigitalNomads.com. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-neutral-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-neutral-700 transition-colors">Terms</Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-neutral-400">
          Digital Nomads<sup>®</sup> is a registered trademark. All other marks are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
