import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | DigitalNomads.com",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-neutral-400 mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">1. About these terms</h2>
            <p>
              These Terms of Service govern your use of the DigitalNomads.com website
              and any brokerage services we provide. By submitting an inquiry or
              engaging our services, you agree to these terms. If you do not agree,
              please do not use this site or our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">2. Brokerage services</h2>
            <p>
              DigitalNomads.com acts as an independent domain name broker, facilitating
              transactions between domain buyers and sellers. We do not guarantee that
              any specific domain name is available for purchase or that any transaction
              will be completed. All domain availability and pricing are subject to
              negotiation and change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">3. Confidentiality</h2>
            <p>
              All inquiries and negotiations handled through DigitalNomads.com are
              treated as confidential. We do not disclose buyer or seller identities
              to third parties without explicit consent from all parties involved,
              except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">4. Fees</h2>
            <p>
              Our brokerage fees are agreed upon separately with each client prior to
              any transaction. Submitting an inquiry through this website does not
              constitute a binding agreement and does not obligate you to pay any fees.
              Fee structures will be outlined in a separate engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">5. No warranties</h2>
            <p>
              This website and our services are provided &ldquo;as is&rdquo; without
              warranty of any kind. DigitalNomads.com makes no representations
              regarding the accuracy of domain valuations, market conditions, or the
              likelihood of a successful transaction. Domain investments carry inherent
              risk and past results do not guarantee future outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, DigitalNomads.com shall not be
              liable for any indirect, incidental, or consequential damages arising
              from your use of this website or our brokerage services. Our total
              liability to you for any claim shall not exceed the fees paid by you
              in connection with the specific transaction giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">7. Governing law</h2>
            <p>
              These terms are governed by and construed in accordance with applicable
              law. Any disputes arising from these terms or our services shall be
              subject to the exclusive jurisdiction of the relevant courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">8. Contact</h2>
            <p>
              Questions about these Terms of Service can be directed to our team
              through the contact form on our website.
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
