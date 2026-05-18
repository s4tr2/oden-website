import type { Metadata } from "next";

// ============================================
// PAGE SEO METADATA
// ============================================
// Page Title: Shown in browser tab and search results
// Page Description: Shown in search results (150-160 characters recommended)
// Page URL: /billing
// ============================================

export const metadata: Metadata = {
  title: "Billing & Refund Policy",
  description: "Learn about Oden's billing, subscription management, credits, payment methods, and refund policy. Manage your subscription and understand how credits work.",
  alternates: {
    canonical: 'https://getoden.com/billing',
  },
  openGraph: {
    title: "Oden Billing & Refund Policy",
    description: "Learn about Oden's billing, subscription management, credits, payment methods, and refund policy. Manage your subscription and understand how credits work.",
    url: 'https://getoden.com/billing',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Oden Billing & Refund Policy",
    description: "Learn about Oden's billing, subscription management, credits, payment methods, and refund policy.",
  },
};

export default function BillingPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Billing & Refund Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
            Learn about Oden&apos;s billing, subscription management, and refund policy.
          </p>

          <div className="mt-16 space-y-12">
            {/* Managing Your Billing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Billing</h2>
              <p className="text-base text-gray-700 mb-4">To manage your billing:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Log in to your Oden account at <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a></li>
                <li>Click &quot;Billing&quot; in your Dashboard</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">Here you can manage your subscription, update payment methods, and view invoices.</p>
            </section>

            <hr className="my-16 border-gray-200" />

            {/* How Billing Works */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Billing Works</h2>
              <p className="text-base text-gray-700 mb-6 leading-7">Choose how often you want to pay:</p>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Monthly:</strong> Your subscription renews every month on the same date you signed up.</p>
              <p className="text-base text-gray-700 mb-6 leading-7"><strong>Annual:</strong> Your subscription renews once a year on the same date you signed up. Annual plans cost less than paying monthly.</p>
              <p className="text-base text-gray-700 leading-7">You can choose monthly or annual when you sign up. Annual plans are paid upfront for the full year.</p>
            </section>

            {/* How Credits Work */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Credits Work</h2>
              <p className="text-base text-gray-700 mb-6 leading-7">You only pay for what you use. Here&apos;s how it works:</p>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Unlimited Team Members:</strong> Add as many people as you want at no extra cost. No per-person fees.</p>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>What Credits Cost:</strong> Your plan includes credits each month. Here&apos;s what uses credits:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>1 credit</strong> per chat message with Oden AI</li>
                <li><strong>10 credits</strong> per competitor you add</li>
                <li>Other actions and their credit costs are shown in your Dashboard</li>
              </ul>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Your Credit Balance:</strong> Each plan includes a certain number of credits per month. You can see how many you have left anytime in your Dashboard.</p>
              <p className="text-base text-gray-700 leading-7"><strong>Sharing Credits:</strong> Your whole team shares the same credit pool. Admins can see who&apos;s using credits and how much.</p>
            </section>

            {/* Tracking and Buying More Credits */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tracking and Buying More Credits</h2>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Check Your Credits:</strong> See how many credits you have left anytime in the &quot;Billing&quot; section of your Dashboard. You&apos;ll see:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Total credits in your plan</li>
                <li>Credits used this month</li>
                <li>Credits remaining</li>
                <li>Estimated usage based on your activity</li>
              </ul>
              <p className="text-base text-gray-700 mb-6 leading-7"><strong>Running Low on Credits:</strong> If you run out of credits before the month ends, you can:</p>
              <p className="text-base text-gray-700 mb-6 leading-7"><strong>Upgrade Your Plan:</strong> Switch to a plan with more monthly credits.</p>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Unused Credits Roll Over:</strong> If you don&apos;t use all your credits in a month, they carry over to the next month. Here&apos;s how:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Unused credits automatically move to next month</li>
                <li>They stay active for 2 months from when you got them</li>
                <li>After 2 months, unused credits expire</li>
                <li>Your Dashboard shows when credits will expire</li>
              </ul>
              <p className="text-base text-gray-700 leading-7"><strong>Extra Credit Packs:</strong> You can buy credit packs anytime. For large credit packages, email <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>.</p>
            </section>

            {/* Adding Team Members */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Adding Team Members</h2>
              <p className="text-base text-gray-700 mb-6 leading-7"><strong>Unlimited Team Members:</strong> Add as many people as you want at no extra charge.</p>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>How to Add Someone:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Go to &quot;Team&quot; in your Dashboard</li>
                <li>Click &quot;Invite Team Member&quot;</li>
                <li>Enter their email and set their permissions</li>
                <li>They&apos;ll get an invitation to join</li>
              </ul>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Removing Someone:</strong> Admins can remove team members anytime. This doesn&apos;t affect your billing or credits.</p>
              <p className="text-base text-gray-700 leading-7"><strong>Who&apos;s Using Credits:</strong> Everyone shares the same credit pool. You can see who&apos;s using credits in your Dashboard.</p>
            </section>

            {/* Switching Plans */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Switching Plans</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">You can switch between monthly and annual plans:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Go to &quot;Billing&quot; in your Dashboard</li>
                <li>Click &quot;Manage Subscription&quot;</li>
                <li>Click &quot;Update Subscription&quot;</li>
                <li>Choose &quot;Monthly&quot; or &quot;Annual&quot;</li>
                <li>Review and confirm</li>
              </ul>
              <p className="text-base text-gray-700 mb-4 leading-7"><strong>Monthly to Annual:</strong> You&apos;ll pay for the full year right away. Any unused time from your monthly plan gets credited toward the annual plan.</p>
              <p className="text-base text-gray-700 leading-7"><strong>Annual to Monthly:</strong> Email us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a> and we&apos;ll help you switch.</p>
            </section>

            {/* Payment Methods */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">We accept all major credit cards: Visa, Mastercard, American Express, and Discover. All payments are securely processed by our payment partners.</p>
              <p className="text-base text-gray-700 leading-7">We don&apos;t store your full credit card details. Your payment information is safely handled by our payment processor.</p>
            </section>

            {/* Invoices */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Invoices</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">Download your invoices anytime:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Go to &quot;Billing&quot; in your Dashboard</li>
                <li>Click &quot;Invoices&quot; to see your payment history</li>
                <li>Download invoices as PDFs</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">Invoices show your company name, address, tax info, subscription details, and payment amount. To change information on future invoices, update your billing details before your next payment date.</p>
            </section>

            {/* If a Payment Fails */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">If a Payment Fails</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">If your payment doesn&apos;t go through:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>You&apos;ll get email notifications about the issue</li>
                <li>You can update your payment method in your Dashboard</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">If all attempts fail, your subscription will pause. To reactivate, update your payment method and pay any outstanding amount.</p>
            </section>

            {/* Canceling Your Subscription */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Canceling Your Subscription</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">To cancel:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Go to &quot;Billing&quot; in your Dashboard</li>
                <li>Click &quot;Manage Subscription&quot;</li>
                <li>Click &quot;Cancel Subscription&quot;</li>
                <li>Confirm</li>
              </ul>
              <p className="text-base text-gray-700 mb-4 leading-7">You&apos;ll still have access until the end of your current month or year (depending on your plan). You won&apos;t be charged again. Your data stays accessible until your plan ends.</p>
              <p className="text-base text-gray-700 leading-7">If you cancel an annual plan, you keep access until the year ends, but you won&apos;t get money back for unused time (see refund policy below for exceptions).</p>
            </section>

            {/* Refund Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
              <p className="text-base text-gray-700 mb-6 leading-7">We want you to be happy with Oden. Here&apos;s our refund policy:</p>

              <p className="text-base text-gray-700 mb-3 leading-7"><strong>Monthly Plans:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Get a full refund if you request it within 7 days of signing up</li>
                <li>After 7 days, no refunds, but you can cancel anytime to stop future charges</li>
              </ul>

              <p className="text-base text-gray-700 mb-3 leading-7"><strong>Annual Plans:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Get a full refund if you request it within 14 days of signing up</li>
                <li>After 14 days, we only give partial refunds in special cases</li>
              </ul>

              <p className="text-base text-gray-700 mb-3 leading-7"><strong>Credit Purchases:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Credits you buy are non-refundable once added to your account</li>
                <li>But they never expire, so you can use them whenever you want</li>
              </ul>

              <p className="text-base text-gray-700 mb-3 leading-7"><strong>How to Get a Refund:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Email us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a> with subject line &quot;Refund Request&quot;</li>
                <li>Include your email, company name, and reason</li>
                <li>We&apos;ll review and respond within 2 business days</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">Approved refunds go back to your original payment method. It takes 5-10 business days to show up, depending on your bank.</p>
            </section>

            {/* Taxes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Taxes</h2>
              <p className="text-base text-gray-700 leading-7">Depending on where you&apos;re located, we may add taxes (like VAT, GST, or sales tax) to your subscription. Tax rates are based on your billing address.</p>
            </section>

            {/* What Happens to Your Data After Cancellation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens to Your Data After Cancellation</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">After your subscription ends:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We keep your data for 30 days</li>
                <li>You can reactivate anytime during those 30 days and get everything back</li>
                <li>After 30 days, we permanently delete your data</li>
              </ul>
            </section>

            {/* Need Help with Billing? */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Billing?</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">Contact us if you need help with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Changing your subscription</li>
                <li>Payment problems</li>
                <li>Getting invoices</li>
                <li>Requesting refunds</li>
                <li>Upgrading or downgrading</li>
                <li>Questions about credits</li>
                <li>Buying more credits</li>
                <li>Enterprise pricing</li>
                <li>Custom payment options</li>
              </ul>
              <p className="text-base text-gray-700 mb-6 leading-7">Email us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a> with your account details and what you need. We&apos;ll get back to you quickly.</p>
              <p className="text-base text-gray-700 mb-4 leading-7">You can also reach us at:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Email: <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a></li>
                <li>Website: <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a></li>
              </ul>
            </section>

            {/* Legal */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal</h2>
              <p className="text-base text-gray-700 mb-4 leading-7">See our <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a> page to learn how we handle your payment and billing data.</p>
              <p className="text-base text-gray-700 leading-7">See our <a href="/terms-of-service" className="text-primary-600 hover:text-primary-700 underline">Terms of Service</a> page for general terms.</p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-base text-gray-700 leading-7">If you have any questions about these Billing and Refund, please contact us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
