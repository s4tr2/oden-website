import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Oden. Contact our team for questions, issues, or feedback.",
  alternates: {
    canonical: "https://getoden.com/support",
  },
};

export default function SupportPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Need help? We&apos;re here for you.</p>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact us</h2>
            <p className="text-gray-600 mb-4">Email us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a></p>
            <p className="text-gray-600">We typically respond within 24 hours on business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Common questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">How do I connect Slack?</h3>
                <p className="mt-1 text-gray-600">Log in to your Oden account, go to Settings → Integrations, and click &quot;Connect Slack&quot;.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">How do credits work?</h3>
                <p className="mt-1 text-gray-600">Each AI interaction uses credits. Check your usage in Settings → Credits. See our <Link href="/billing" className="text-primary-600 hover:text-primary-700 underline">billing page</Link> for details.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Is my data secure?</h3>
                <p className="mt-1 text-gray-600">Yes. Read our <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">privacy policy</Link> for details on how we handle your data.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-2 text-gray-600">
              <p><Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</Link></p>
              <p><Link href="/terms-of-service" className="text-primary-600 hover:text-primary-700 underline">Terms of Service</Link></p>
              <p><Link href="/billing" className="text-primary-600 hover:text-primary-700 underline">Billing & Refunds</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
