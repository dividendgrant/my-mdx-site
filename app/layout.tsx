import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalNomads.com — Premium Domain Brokerage",
  description:
    "DigitalNomads.com is a premium domain brokerage firm helping buyers and sellers transact high-value domain names with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
