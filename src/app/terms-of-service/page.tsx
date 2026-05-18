import type { Metadata } from "next";

// ============================================
// PAGE SEO METADATA
// ============================================
// Page Title: Shown in browser tab and search results
// Page Description: Shown in search results (150-160 characters recommended)
// Page URL: /terms-of-service
// ============================================

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Oden's Terms of Service to understand your rights and responsibilities when using our platform. Service policies and user agreements.",
  alternates: {
    canonical: 'https://getoden.com/terms-of-service',
  },
  openGraph: {
    title: "Terms of Service | Oden",
    description: "Read Oden's Terms of Service to understand your rights and responsibilities when using our platform. Service policies and user agreements.",
    url: 'https://getoden.com/terms-of-service',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Terms of Service | Oden",
    description: "Read Oden's Terms of Service to understand your rights and responsibilities when using our platform.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-gray-600 mb-4">Last Updated: March 2026</p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
            Please read these terms carefully before using Oden&apos;s services.
          </p>

          <div className="mt-16 space-y-12">
            {/* Oden Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Oden Disclaimer</h2>
              <p className="text-base text-gray-700 leading-7 mb-6">
                If you do not agree to these Terms of Service, you shouldn&apos;t access (and you don&apos;t have our permission to access) the Service.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-6">
                These Terms of Service (&quot;Terms of Service&quot; or &quot;Terms&quot;) are a legally binding agreement between you (&quot;you&quot; or &quot;your&quot;) and Oden (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your use of the Service and your relationship with us.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">You accept and agree to these Terms of Service by:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Accessing or using the Service;</li>
                <li>Clicking to accept these Terms of Service, or</li>
                <li>Accepting these Terms of Service in any other way.</li>
              </ul>
              <p className="text-base text-gray-700 leading-7">
                We may modify these Terms of Service in our sole discretion by posting updated versions of these Terms of Service on the Website or otherwise providing notice to you. All such changes shall become effective upon the posting of the revised Terms of Service on the Website or upon notice to you, as applicable.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Definitions</h2>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Account Information&quot;</strong> means information provided by you to create, support and maintain an account enabling access to the Service
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Oden Platform&quot;</strong> means the software or other technology provided by us to you under these Terms. The Oden Platform does not include Third-Party Products,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Beta Services&quot;</strong> means products, services, integrations, functionality or features that Oden may make available to you to try at your discretion, which may be described as &quot;alpha,&quot; &quot;beta,&quot; &quot;pilot,&quot; &quot;limited release,&quot; &quot;developer preview,&quot; &quot;non-production,&quot; &quot;early-stage&quot;, or other similar description,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Contributor Database&quot;</strong> means the database of Personal Information and other business information which we make available, directly or indirectly, to you and to other Oden customers through the Oden Platform,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Output Data&quot;</strong> means the information and other content or materials that are included in the Contributor Database or otherwise made available to you through the Oden Platform. Output Data is exclusive of the Submitted Data,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Order Form&quot;</strong> means an ordering document, including an order receipt, related to your ordering of the Service and specifying the details of your subscription and any fees to be paid by you,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Personal Information&quot;</strong> includes any substantially similar terms to &quot;personal information&quot; such as &quot;personal data&quot; or &quot;personally identifiable information&quot; and as to each, shall have the meaning given to such terms under applicable law,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Service&quot;</strong> means the Output Data, the Service Metadata, the Contributor Database, the Oden Platform, the Beta Services and any accompanying or related infrastructure, functionality, technology or analytics, including any services or add-ons described in an Order Form,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Service Metadata&quot;</strong> means information collected or inferred by us in the course of delivering emails (including without limitation information about deliverability and system operations) or otherwise providing the Service,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Submitted Data&quot;</strong> means all data, information, text, recordings, and other content and materials that are collected, submitted, provided, or otherwise transmitted or stored by you in connection with your use of the Service. Submitted Data may vary depending on the products or features used as well as your particular use of such products or features.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>&quot;Third-Party Products&quot;</strong> means products, services, websites, applications or other technology, and any related content, that you choose to integrate with or use in connection with the Service. Third-Party Products are not owned or operated by us,
              </p>
              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>&quot;Website&quot;</strong> means any website or webpage on which these Terms appear,
              </p>
              <p className="text-base text-gray-700 leading-7">
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            {/* Your Account */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information and Security</h2>
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-7">
                  You will need to set up an account in order to access the Service. You must only provide Account Information that is your own and that is accurate.
                </p>
                <p className="text-base text-gray-700 leading-7">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>
            </section>

            {/* Beta Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beta Services</h2>
              <p className="text-base text-gray-700 leading-7">
                From time to time, Oden may offer you access to Beta Services, which are optional for you to use. The Beta Services are not made generally available and may contain bugs, errors, defects, or harmful components. Beta Services may be subject to additional terms which may supplement, but not supersede the terms of these Terms of Service. Oden may terminate access to Beta Services at any time without notice, and may discontinue Beta Services at any time in its sole discretion. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, BETA SERVICES ARE PROVIDED &apos;AS IS&apos; WITHOUT ANY COMMITMENTS, INDEMNITY OR WARRANTY BY ODEN OF ANY KIND AND ODEN SHALL HAVE NO LIABILITY WHATSOEVER FOR ANY DAMAGE OR HARM ARISING FROM OR RELATED TO BETA SERVICES.
              </p>
            </section>

            {/* Third-Party Products */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Products</h2>
              <p className="text-base text-gray-700 leading-7">
                You may procure and use Third-Party Products in connection with the Service. You acknowledge and agree that if you or your users view, access or otherwise interact with Third-Party Products, you or your users, as the case may be, do so at your own risk and we have no liability arising from such access or use. You (and your users, as applicable) are responsible for complying with all terms, conditions and policies imposed by a provider of a Third-Party Product. We cannot guarantee the continued availability of integrations of Third-Party Products with the Service and may cease providing interoperation with a Third-Party Product without entitling you to any refund, credit, or other compensation, if, for example and without limitation, the provider of a Third-Party Product ceases to make the Third-Party Product available for interoperation with the Service in a manner acceptable to us.
              </p>
              <p className="text-base text-gray-700 leading-7 mt-6">
                <strong>Google API Services.</strong> Oden&apos;s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary-600 hover:text-primary-700 underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
              </p>
            </section>

            {/* Account Types; Credits and Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Types; Credits and Payment Terms</h2>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Subscriptions or customized service accounts.</strong> We may provide the Service through paid accounts, such as by offering a monthly or annual subscription, or through customized provision of service and payment terms (as further set forth under an Order Form or separate agreement). If you wish to enter into such an agreement, please contact us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Paid and unpaid self-serve accounts.</strong> The Service may also be offered as a paid or unpaid account on a &quot;self-serve&quot; basis, in which case you will have the opportunity to click-through these Terms and select the aspects of the Service you want to use, including an amount of credits that can be used toward the Service. You may not open multiple accounts for your use under a self-serve offering or otherwise take any actions which would allow you to circumvent the credit or rate limits which apply to self-serve offerings. Should we discover you doing so, we may in our sole discretion terminate your account immediately, with no right to refund or reinstatement.
              </p>

              <p className="text-base text-gray-700 leading-7">
                <strong>Credits and Expiration of Credits.</strong> All credits purchased or otherwise obtained by you in connection with your use of the Service are subject to the rules and restrictions hereunder. These credits may not be resold or transferred. Credits have an expiration date. For paid accounts, credits expire at the end of your billing cycle. For unpaid accounts, credits expire at the end of the free usage time period. Please do not purchase credits if you are not able to use them prior to their expiration date, as no refunds or extensions will be given. You may not sell or transfer your credits, or purchase credits except directly from us. The free usage time period for self-serve is completely controlled by Oden and, may in our sole discretion terminate your account immediately, with no right to refund or reinstatement.
              </p>
            </section>

            {/* Restrictions on the Use of Output Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Restrictions on the Use of Output Data</h2>
              <p className="text-base text-gray-700 leading-7 mb-6">
                You may not use the Service (including use of the Service to send email, mail, SMS, push notifications, fax, phone, or other communications) in a manner that violates any applicable laws (including, without limitation, any marketing or data privacy and security laws) or industry best practices, or that would cause us to violate applicable law. In particular, you agree not to use the Service in a manner that would violate the U.S. CAN-SPAM Act of 2003, the Canadian Anti-Spam Legislation (CASL), the U.S. TCPA, the Telemarketing Sales Rules, or any similar such laws.
              </p>
              <p className="text-base text-gray-700 leading-7 mb-6">
                Additionally, you may not use the Service to advertise or promote any illegal service or product (or send any other communications) that are illegal in the place offered or consumed, including but not limited to tobacco products, firearms, ammunition or other weapons, counterfeit or pirated goods or services, adult content or services (such as pornography or escort services), unlicensed gambling, investment schemes (including promotion of &quot;pink slip&quot; stocks), astrology or psychic services, lotteries, credit repair services, payday loan services, or any type of hate speech (targeting any societal group).
              </p>
              <p className="text-base text-gray-700 leading-7">
                You are also prohibited from using the Service to violate any securities or commodities regulations (such as to support a &quot;pump and dump&quot; scheme), to defraud, deceive, mislead, discriminate against, harass, libel or defame any person, group or entity, to violate or promote any violation of any person&apos;s or entity&apos;s intellectual property rights, to threaten, promote or commit violence or fraud, or to violate any person&apos;s or entity&apos;s rights.
              </p>
            </section>

            {/* Restrictions on Use of Email Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Restrictions on Use of Email Services</h2>
              <p className="text-base text-gray-700 leading-7 mb-6">
                The following practices are not permitted from the Service and will be considered a violation of the license restrictions herein. These practices include, but are not limited to, sending of emails from a group distribution email such as hello@ or marketing@ etc., failing to include appropriate opt-out mechanisms in commercial emails or failing to comply with applicable laws or best practices related to opt-outs or user choice and control principles, using a fictional identity, pseudonym or alias to send emails, sending emails that generate an unacceptable level of bounces, spam or complaints (as determined in our reasonable discretion), transmitting material that contains or links to virus, trojan horse, worms or any malicious or harmful software program, and using our Service in conjunction with any unsolicited or harassing messages (commercial or otherwise) including but not limited to unsolicited emails, text messages or phone calls.
              </p>
              <p className="text-base text-gray-700 leading-7">
                <strong>Notice of Violation; Suspension:</strong> In the event you are aware of or suspect a violation of these restrictions and policies, please notify us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>. We will determine compliance with these restrictions at our sole discretion. In the event that we confirm or reasonably suspect that you have failed to comply with these Terms or have otherwise used the Service in an abusive or fraudulent manner or in a manner intended to circumvent our stated policies or rules, we may immediately terminate your access to the Service, and, upon our written demand, you shall cease all use of the Service and the Output Data.
              </p>
            </section>

            {/* Required Consumer Consents and Permissions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Consumer Consents and Permissions; Your Responsibilities</h2>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Responsibility for your use of Output Data.</strong> You acknowledge and agree that you are solely responsible and liable for your use of the Output Data and any communications made in connection with your use of the Output Data.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Notice and consent.</strong> You acknowledge that in some countries, U.S. states or other jurisdictions, you may be required to obtain consent, provide notice or complete some other action in order to lawfully conduct certain types of marketing activities or processing of Personal Information. You understand that we have not provided any notices nor obtained any rights or consents on your behalf. Therefore, to the extent that any law or regulation may require that you provide notice, obtain consent or complete some other action in order to lawfully market to any person or process their Personal Information, you represent and warrant that you shall obtain such notices or consents or otherwise complete such action on your own behalf.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-4">
                <strong>Legal bases for processing.</strong> In connection with the Services, you may access, receive or otherwise process Output Data which is subject to various privacy and security laws governing Personal Information such as the UK/EU GDPR. If you do so, you agree that you will only access, use or otherwise process such Output Data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>pursuant to explicit consent from the data subject of the Output Data, sufficient to comply with the consent requirements of applicable laws, or</li>
                <li>pursuant to any other legal basis (or substantively similar term) for processing under applicable law.</li>
              </ul>

              <p className="text-base text-gray-700 leading-7 mb-6">
                For example, in accordance with the EU/UK GDPR, you may use Output Data for purposes that you have established are necessary to pursue your legitimate interests under the EU/UK GDPR, such as use of the Output Data in order to perform reasonable and actual data validation or hygiene or updating of your own legally obtained customer database.
              </p>

              <p className="text-base text-gray-700 leading-7">
                <strong>Compliance with law.</strong> You shall comply with all laws applicable to your use of the Service. Notwithstanding anything herein (including any permissions granted by us herein), you are solely responsible for your own understanding of, and compliance with, all applicable laws. We make no representation (and you should not rely on any representation by us) regarding what applicable law might or might not require (including with respect to data subject notices, consents and permissions).
              </p>
            </section>

            {/* Data Privacy and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Privacy and Security</h2>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Data Processing Agreement.</strong> The Oden Data Processing Agreement is hereby incorporated by reference into these Terms. The parties shall comply with the terms of the Oden Data Processing Agreement as it relates to all processing of Personal Information in connection with these Terms.
              </p>

              <p className="text-base text-gray-700 leading-7 mb-6">
                <strong>Privacy Policy.</strong> You acknowledge the collection, use, disclosure and other handling of information, including Personal Information, described in our <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>, which we may update from time to time.
              </p>

              <p className="text-base text-gray-700 leading-7">
                <strong>Nature of Exchange.</strong> Our Service contains certain &quot;co-operative&quot; elements. This means that in exchange for providing the Submitted Data to us for use as described above, through our Contributor Database (at our sole discretion), you will receive access to Output Data consisting of information that we hope is equally valuable to you. This in turn may amount to a &quot;sale&quot; of Personal Information under certain state statutes, and (depending whether you are subject to those statutes, which may depend upon your size or the nature of your business) such &quot;sale&quot; of information may require you to make certain disclosures or provide certain consumer &quot;opt out&quot; or other rights. We may in turn provide you with materials or recommendations regarding these requirements: if we do so, you understand that these are purely advisory in nature and are neither legal advice nor a substitute for legal advice. You therefore should consult counsel regarding requirements you may have under any such applicable law.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers</h2>
              <p className="text-base text-gray-700 leading-7 uppercase">
                YOUR USE OF THE SERVICE IS AT YOUR OWN RISK. THE SERVICE (AND ALL OUTPUT DATA PROVIDED THEREIN) ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE DISCLAIM ALL WARRANTIES AND REPRESENTATIONS, EITHER EXPRESS OR IMPLIED, WITH RESPECT TO THE SERVICE, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES (1) OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (2) OF INFORMATIONAL CONTENT OR ACCURACY, (3) OF NON-INFRINGEMENT, (4) OF PERFORMANCE, (5) OF TITLE, (6) THAT THE SERVICE WILL OPERATE IN AN ERROR FREE, TIMELY, SECURE, OR UNINTERRUPTED MANNER, IS CURRENT AND UP TO DATE AND ACCURATELY DESCRIBES ANYTHING, OR IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, (7) THAT ANY DEFECTS OR ERRORS IN THE SERVICE WILL BE CORRECTED, (8) THAT THE SERVICE IS COMPATIBLE WITH ANY PARTICULAR HARDWARE OR SOFTWARE PLATFORM, OR (9) THAT WE WILL ENFORCE THE TERMS OF SERVICE AGAINST OTHERS TO YOUR SATISFACTION. EFFORTS BY US TO MODIFY THE SERVICE SHALL NOT BE DEEMED A WAIVER OF THESE LIMITATIONS OR ANY OTHER PROVISION OF THESE TERMS OF SERVICE.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-base text-gray-700 leading-7 uppercase mb-6">
                APART FROM CUSTOMER&apos;S INDEMNIFICATION OBLIGATIONS HEREIN, NEITHER PARTY (NOR ITS RESPECTIVE OFFICERS, DIRECTORS, AGENTS, EMPLOYEES, REPRESENTATIVES, AFFILIATES, PARENTS, SUBSIDIARIES, SUBLICENSEES, SUCCESSORS AND ASSIGNS, INDEPENDENT CONTRACTORS, AND RELATED PARTIES) SHALL BE LIABLE TO THE OTHER PARTY FOR ANY LOSS OF PROFITS, LOSS OF USE, LOSS OF DATA, INTERRUPTION OF BUSINESS, OR ANY INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SERVICE OR WITH THE DELAY OR INABILITY TO USE SAME, OR FOR ANY BREACH OF SECURITY, OR FOR ANY CONTENT, PRODUCTS, AND SERVICES OBTAINED THROUGH OR VIEWED ON THE SERVICE, OR OTHERWISE ARISING OUT OF THE USE OF SAME, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, REGULATION, COMMON LAW PRECEDENT OR OTHERWISE, EVEN IF THE RESPECTIVE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES AND EVEN IF SUCH DAMAGES RESULT FROM A PARTY&apos;S ENTITY&apos;S NEGLIGENCE OR GROSS NEGLIGENCE.
              </p>
              <p className="text-base text-gray-700 leading-7 uppercase">
                IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ANY CLAIM UNDER OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE TOTAL OF THE AMOUNT PAID BY YOU TO US DURING THE 12 MONTHS PRIOR TO THE DATE ON WHICH THE CLAIM AROSE.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
              <p className="text-base text-gray-700 leading-7">
                Our <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a> explains how we treat your personal data and protect your privacy when you use our services. By using our services, you agree that Oden can use such data in accordance with our privacy policies. For more information, please visit our Privacy Policy page.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications</h2>
              <p className="text-base text-gray-700 leading-7">
                We may modify these terms or any additional terms that apply to a service. You should look at the terms regularly. Changes will not apply retroactively and will become effective no sooner than (72) seventy-two hours after they are posted.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-base text-gray-700 leading-7">
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:founders@getoden.com" className="text-primary-600 hover:text-primary-700 underline">founders@getoden.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
