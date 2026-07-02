import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalnomads.com"),
  title: "DigitalNomads.com | Domain Brokerage, Branding & Advisory",
  description:
    "Brand development, domain advisory, and full service brokerage for owners, investors, and internet entrepreneurs. Claim your real estate.",
  openGraph: {
    title: "DigitalNomads.com | Claim your Real Estate",
    description:
      "Brand development, domain advisory, and full service brokerage for owners, investors, and internet entrepreneurs.",
    url: "/",
    siteName: "DigitalNomads.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "DigitalNomads.com" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalNomads.com | Claim your Real Estate",
    description:
      "Brand development, domain advisory, and full service brokerage for owners, investors, and internet entrepreneurs.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans bg-white text-[#0b1020]">
        {children}
      </body>
    </html>
  );
}
