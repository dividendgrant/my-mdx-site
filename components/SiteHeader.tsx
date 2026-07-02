"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#nomad", label: "Nomad Life" },
  { href: "/#contact", label: "Contact" },
];

/** Shared sticky top menu bar with a working mobile menu. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="DigitalNomads.com"
            width={4524}
            height={1230}
            priority
            className="h-16 sm:h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-neutral-900 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="hidden md:inline-flex rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
        >
          Make an Offer
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-neutral-700 hover:text-brand-blue"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
            >
              Make an Offer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
