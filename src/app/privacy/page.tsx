import type { Metadata } from "next";

// ============================================
// PAGE SEO METADATA
// ============================================
// Page Title: Shown in browser tab and search results
// Page Description: Shown in search results (150-160 characters recommended)
// Page URL: /privacy
// ============================================

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Oden protects your privacy and handles your data. Our privacy policy outlines data collection, usage, and protection practices.",
  alternates: {
    canonical: 'https://getoden.com/privacy',
  },
  openGraph: {
    title: "Privacy Policy | Oden",
    description: "Learn how Oden protects your privacy and handles your data. Our privacy policy outlines data collection, usage, and protection practices.",
    url: 'https://getoden.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Privacy Policy | Oden",
    description: "Learn how Oden protects your privacy and handles your data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-gray-600 mb-4">Last Updated: March 2026</p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
            This Privacy Policy applies to <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a>
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <p className="text-base text-gray-700 leading-7 mb-6">
                Oden (&quot;platform&quot;) recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a> and other online sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information we collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact information</h3>
                  <p className="text-base text-gray-700 leading-7">
                    We might collect your name, email, mobile number, phone number, street, city, state, Zip code, country and IP address.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment and billing information</h3>
                  <p className="text-base text-gray-700 leading-7">
                    We might collect your billing name, billing address and payment method when you use the platform. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner who are PCI-DSS compliant service providers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Information you post</h3>
                  <p className="text-base text-gray-700 leading-7">
                    We collect information you post in a public space on our website or on a third-party social media site belonging to Oden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slack integration</h3>
                  <p className="text-base text-gray-700 leading-7">
                    When you connect Oden to Slack, we access your Slack workspace ID and the messages you send directly to our bot. We do not read or store messages from channels or conversations where the bot is not directly mentioned.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gong integration</h3>
                  <p className="text-base text-gray-700 leading-7">
                    When you connect Oden to Gong, we access call recordings, transcripts, and meeting metadata that you explicitly authorize. Oden uses this data solely to provide the requested functionality and does not access calls or recordings beyond what the user has authorized.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">We collect information in different ways</h2>
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-7">
                  <strong className="text-gray-900">Directly from you:</strong> We collect information when you register or set up an account with us on the platform.
                </p>
                <p className="text-base text-gray-700 leading-7">
                  <strong className="text-gray-900">Passively:</strong> We use tracking tools like Google Analytics, Posthog, and Microsoft Clarity for collecting information about your usage.
                </p>
              </div>
            </section>

            {/* Google User Data Access and Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Google User Data Access and Usage</h2>
              <p className="text-base text-gray-700 leading-7 mb-4">
                Oden accesses Google user data (including Google Docs and Google Sheets) only when explicitly authorized by the user.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                The application only accesses:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-7 mb-4">
                <li>Files explicitly selected by the user via the Google Picker, or</li>
                <li>Files created by Oden on behalf of the user</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">
                Oden does not browse, scan, or index Google Drive. All access to Google user data is user-initiated and limited to the specific files selected by the user.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-base text-gray-700 leading-7 mb-4">
                Oden implements industry-standard security measures to protect user data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-7 mb-4">
                <li>Encryption in transit using HTTPS/TLS</li>
                <li>Access controls to restrict unauthorized access</li>
                <li>Secure infrastructure and storage practices</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">
                Access to Google user data is limited to what is necessary to provide the service and occurs only in response to user-initiated actions.
              </p>
            </section>

            {/* Data Retention and Deletion */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention and Deletion</h2>
              <p className="text-base text-gray-700 leading-7 mb-4">
                Oden retains Google user data only for as long as necessary to provide the requested functionality.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                Google Docs and Google Sheets content is processed in real time and is not stored by Oden outside of the user&apos;s Google Drive.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                Users may request deletion of their data by contacting us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>.
              </p>
              <p className="text-base text-gray-700 leading-7">
                Upon account deletion, any associated data is deleted within a reasonable timeframe.
              </p>
            </section>

            {/* Use of your personal information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of your personal information</h2>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information to contact you:</strong> We might use the information you provide to contact you for confirmation of a payment/transaction on our website or for other promotional purposes.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information to respond to your requests or questions.</strong> We might use your information to process and fulfil your request for Services or respond to your comments, and queries on the platform
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information to improve our products and services.</strong> We might use your information to customize your experience with us. This could include displaying content based upon your preferences.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information to look at site trends and customer interests.</strong> We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information for security purposes.</strong> We may use information to protect our company, our customers, or our websites.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information for marketing purposes.</strong> We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you set up an account on our platform, we&apos;ll enroll you in our newsletter.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>We use information to send you transactional communications.</strong> We might send you emails or SMS about your account or a support request or query.
              </p>

              <p className="text-base text-gray-700 leading-7">
                <strong>We use information as otherwise permitted by law.</strong>
              </p>
            </section>

            {/* Sharing of information with third-parties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sharing of information with third-parties</h2>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>We will share information with third parties who perform services on our behalf.</strong> We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of USA.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>We will share information with our business partners.</strong> We may also disclose your Information to third party vendors, consultants, and other service providers who work for the Company and use it only for the purposes for which we disclose it to them. This disclosure may be required for us, for instance, to provide you access to our services and process payments including validation of Your bank accounts, to facilitate and assist our marketing and advertising activities/initiatives, for undertaking auditing or data analysis, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>We may share information if we think we have to in order to comply with the law or to protect ourselves.</strong> We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>We may share information with any successor to all or part of our business.</strong> For example, if part of our business is sold we may give our customer list as part of that transaction.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>We may share your information for reasons not described in this policy.</strong> We will tell you before we do this.
              </p>

              <p className="text-base text-gray-700 leading-7">
                <strong>Google user data:</strong> Oden does not share, transfer, or disclose Google user data to third parties, except as necessary to provide and improve the service, as required by law, or with the user&apos;s explicit consent.
              </p>
            </section>

            {/* Email Opt-Out */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Opt-Out</h2>
              <p className="text-base text-gray-700 leading-7">
                You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.
              </p>
            </section>

            {/* Third party sites */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third party sites</h2>
              <p className="text-base text-gray-700 leading-7">
                If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.
              </p>
            </section>

            {/* Dispute Resolution Officer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution Officer</h2>
              <p className="text-base text-gray-700 leading-7 mb-6">
                In compliance with the laws of the State of India and any relevant regulations, the name and contact information of the Dispute Resolution Officer are provided below:
              </p>
              <p className="text-base text-gray-700 leading-7 mb-6">
                Email: <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>
              </p>
              <p className="text-base text-gray-700 leading-7">
                If you have any questions about this Policy or other privacy concerns, you can also email us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>
              </p>
            </section>

            {/* Updates to this policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to this policy</h2>
              <p className="text-base text-gray-700 leading-7">
                From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.
              </p>
            </section>

            {/* Legal Obligation and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Obligation and Jurisdiction</h2>
              <p className="text-base text-gray-700 leading-7 mb-6">
                <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a> or Oden is bound by the laws of India, including but not limited to statutes and regulations pertaining to data protection, online privacy, and electronic transactions. It shall comply with all applicable provisions under law. Additionally, <a href="https://getoden.com/" className="text-primary-600 hover:text-primary-700 underline">https://getoden.com/</a> and all its vendors are obliged to maintain reasonable security procedures to safeguard your data, as required by relevant laws and regulations.
              </p>
              <p className="text-base text-gray-700 leading-7">
                If you choose to visit the website, your visit and any dispute over privacy are subject to this Policy and the website&apos;s terms of use.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
