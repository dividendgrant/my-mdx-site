import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-14 max-w-3xl mx-auto">
        <Image
          src="/logo.png"
          alt="DigitalNomads.com"
          width={480}
          height={130}
          priority
          className="mx-auto mb-10"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
          Premium domain brokerage
          <br />
          <span className="text-neutral-400">for serious buyers and sellers.</span>
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed">
          We connect buyers with high-value domain names and help owners sell
          with confidence — discreet, expert-led transactions from inquiry to
          transfer.
        </p>
      </section>

      {/* Two-column: images + form */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/image1.jpg"
                alt="Work from anywhere — the digital nomad lifestyle"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/image2.jpg"
                alt="Global domain marketplace — connecting buyers and sellers worldwide"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
            <h2 className="text-xl font-bold tracking-tight mb-1">
              Inquire about a domain
            </h2>
            <p className="text-sm text-neutral-500 mb-6">
              Fill out the form and our team will respond within one business day.
            </p>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} DigitalNomads.com. All rights reserved.</span>
          <nav className="flex gap-5">
            <a href="/privacy" className="hover:text-neutral-700 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-neutral-700 transition-colors">Terms</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
