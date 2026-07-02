import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { articles } from "@/lib/articles";

/* ------------------------------------------------------------------ */
/* Filler data: domain-broker themed. Tune copy later.               */
/* ------------------------------------------------------------------ */

const values = [
  {
    title: "Portfolio Management",
    body: "Stay on top of every name you own. We monitor pricing and demand, manage your incoming lead flow, close deals as they ripen, and keep expanding your market coverage so your portfolio is always working for you.",
    accent: "from-brand-blue to-brand-indigo",
  },
  {
    title: "Full Service Brokerage",
    body: "A dedicated broker holds your hand through every step. They source buyers, negotiate terms, and handle the paperwork, so the entire transaction feels effortless from first offer to signed deal.",
    accent: "from-brand-green to-brand-blue",
  },
  {
    title: "Secure Closing Agent",
    body: "We act as your closing agent, using Escrow.com and other trusted services to safely move funds and domains between buyers and sellers anywhere in the world. Every transfer is protected from start to finish.",
    accent: "from-brand-orange to-brand-purple",
  },
];

const challenges = [
  { title: "Undervaluation", body: "Most owners price their best names on gut feel and leave real money on the table." },
  { title: "Stalled deals", body: "Private negotiations stall when buyer and seller cannot agree on what a name is worth." },
  { title: "Fraud risk", body: "Direct transfers expose both sides to scams, chargebacks, and bad-faith buyers." },
  { title: "Wrong buyers", body: "Great names rarely reach the one buyer who would pay the most for them." },
];

const solutions = [
  { title: "Full-Market Reach", body: "We surface qualified buyers across our network instead of waiting for inbound offers." },
  { title: "Valuation Obsession", body: "Pricing is grounded in comps and demand data, never guesswork." },
  { title: "Discreet & Secure", body: "Negotiations stay private and every transaction runs through escrow." },
  { title: "End-to-End Handling", body: "From first inquiry to final transfer, we manage the whole deal for you." },
];

const services = [
  {
    title: "Brand Development & Evaluation",
    items: ["Trademark & trade name strategy", "Domain name evaluation", "Naming & positioning"],
  },
  {
    title: "Branding & Marketing",
    items: ["Brand consulting & development", "Brand management", "Go-to-market & marketing"],
  },
  {
    title: "Domain Advisory",
    items: ["Buying, selling & investment", "Registration & renewal", "Monetization & optimization"],
  },
  {
    title: "Business Management Consulting",
    items: ["For domain owners & investors", "For internet entrepreneurs", "Portfolio strategy & growth"],
  },
];

const steps = [
  { n: "01", title: "Inquiry", body: "Tell us about the domain you want to buy or sell." },
  { n: "02", title: "Valuation", body: "We price it against real market comparables." },
  { n: "03", title: "Negotiation", body: "We manage offers and counters on your behalf." },
  { n: "04", title: "Transfer", body: "Escrow closes and the name changes hands safely." },
];

/* ------------------------------------------------------------------ */

function Check() {
  return (
    <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* ---------------- Hero ---------------- */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(231,83%,96%)] via-[hsl(222,89%,98%)] to-white" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[480px] w-[820px] rounded-full bg-[radial-gradient(closest-side,hsl(228_83%_88%/_0.7),transparent)] blur-2xl" />
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-5">
            DOMAINS · BRANDING · ADVISORY
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-7">
            Domain Names.
            <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-royal to-brand-indigo bg-clip-text text-transparent">
              Claim your Real Estate.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-9">
            From brand development and evaluation to buying, selling, and
            monetizing premium domain names, we advise entrepreneurs, owners,
            and investors across the full lifecycle of their internet real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="rounded-full bg-brand-blue px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-blue-dark transition-colors"
            >
              Get a free valuation
            </a>
            <a
              href="#services"
              className="rounded-full border border-neutral-300 px-8 py-3.5 text-base font-semibold text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-y border-neutral-100 bg-white py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-8 px-4 text-sm font-bold tracking-[0.2em] text-neutral-300">
                {["BUY", "SELL", "VALUE", "BROKER", "ESCROW", "TRANSFER"].flatMap((w) => [
                  <span key={`${k}-${w}`}>{w}</span>,
                  <span key={`${k}-${w}-dot`} className="text-brand-blue">•</span>,
                ])}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Value props ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-neutral-100 p-8 hover:shadow-lg hover:shadow-neutral-100 transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${v.accent} mb-5`}>
                <Image src="/icon-footprint-white.png" alt="" width={572} height={1057} className="h-8 w-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Problems / stats ---------------- */}
      <section className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">PREMIUM DOMAIN BROKER</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Selling a premium domain is harder than it looks.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Most owners leave money on the table or get stuck in deals that
              never close. The right broker changes the outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-neutral-100 p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{c.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Solutions ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">OUR APPROACH</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            A smarter way to move premium names.
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Strategy, market reach, and security, all working together to close the
            right deal at the right price.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-100 p-6">
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-blue via-brand-royal to-brand-indigo p-8 sm:p-10 text-center text-white">
          <p className="text-2xl sm:text-3xl font-extrabold">
            Most brokered deals close within 30 to 60 days.
          </p>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section id="services" className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">WHAT WE DO</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              From brand to domain, end to end.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Brand development, branding and marketing, domain advisory, and
              business management consulting for owners, investors, and internet
              entrepreneurs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-neutral-100 p-7">
                <h3 className="text-lg font-bold mb-4">{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-neutral-600">
                      <Check />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">THE PROCESS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Four steps from inquiry to transfer.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-neutral-100 p-6">
              <div className="text-5xl font-extrabold text-neutral-100 mb-3">{s.n}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Digital Nomad ---------------- */}
      <section id="nomad" className="relative overflow-hidden border-y border-neutral-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(231,83%,97%)] via-white to-white" />
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">NOMAD LIFE</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5">
              Looking to become a{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-royal to-brand-indigo bg-clip-text text-transparent">
                Digital Nomad?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
              We&apos;re not just domain brokers. We live the life we sell the names for.
              We work from the road, and we&apos;ve written down what we&apos;ve learned about
              earning an income while you travel the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group flex flex-col rounded-2xl border border-neutral-100 bg-white overflow-hidden hover:shadow-lg hover:shadow-neutral-100 hover:-translate-y-0.5 transition-all"
              >
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-brand-blue transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{a.description}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-blue">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-3">SAY HELLO</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Let&apos;s talk about your domain.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Whether you&apos;re buying or selling, tell us what you have in mind
              and our team will respond within one business day.
            </p>

            <ol className="space-y-5 mb-8">
              {[
                { n: "1", t: "Send your inquiry", d: "Tell us the domain and what you want to do with it." },
                { n: "2", t: "We respond in one business day", d: "You get a clear read on value and the right next step." },
                { n: "3", t: "We broker and close", d: "We negotiate the deal and close it securely through escrow." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-bold text-neutral-900">{s.t}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-4 text-sm text-neutral-600 leading-relaxed">
              Every conversation is confidential, and every transaction is
              protected through Escrow.com and other trusted closing services.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-bold mb-1">Inquire about a domain</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Fill out the form and our team will respond within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ---------------- Logo band ---------------- */}
      <section className="relative overflow-hidden border-t border-neutral-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[hsl(231,83%,97%)] to-[hsl(228,83%,94%)]" />
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="DigitalNomads.com"
            width={4524}
            height={1230}
            className="h-28 sm:h-36 w-auto"
          />
          <p className="mt-6 text-base font-medium tracking-[0.2em] text-brand-indigo">
            BUY · SELL · TRANSFER WITH CONFIDENCE
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
