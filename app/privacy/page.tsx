import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | DigitalNomads.com",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-neutral-400 mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">1. Information we collect</h2>
            <p>
              When you submit an inquiry through our contact form, we collect the
              information you provide: your name, email address, the domain name you
              are enquiring about, and any message you include. We do not collect any
              information automatically beyond standard server logs (IP address, browser
              type, pages visited) that are retained for security purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">2. How we use your information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600">
              <li>Respond to your domain inquiry</li>
              <li>Facilitate a potential domain transaction between buyer and seller</li>
              <li>Contact you with relevant updates related to your inquiry</li>
            </ul>
            <p className="mt-3">
              We do not use your information for marketing, advertising, or any purpose
              unrelated to your inquiry without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">3. How we store your information</h2>
            <p>
              Inquiry submissions are processed through Netlify Forms and delivered
              securely to our team. We retain inquiry records for up to 24 months for
              business correspondence purposes, after which they are permanently deleted.
              We do not sell, rent, or share your personal information with any third
              party, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">4. Cookies</h2>
            <p>
              This website does not use tracking cookies or third-party analytics.
              Standard session and security cookies may be set by our hosting
              infrastructure (Netlify) and are strictly necessary for the site to
              function.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">5. Your rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of
              any personal information we hold about you. To make a request, contact us
              through the form on our website. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">6. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated date. Continued use of the site after
              changes constitutes acceptance of the revised policy.
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
