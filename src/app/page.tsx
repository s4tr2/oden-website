import type { Metadata } from "next";
import { OpeningScene } from "@/components/sections/opening-scene";
import { ProductMedia } from "@/components/sections/product-media";
import { BeforeAfter } from "@/components/sections/before-after";
import { CustomerStory } from "@/components/sections/customer-story";
import { Integrations } from "@/components/sections/integrations";
import { FAQSection, homeFaqItems } from "@/components/sections/faq";
import { ClosingCTA } from "@/components/sections/closing-cta";

// ============================================
// PAGE SEO METADATA
// ============================================

export const metadata: Metadata = {
  title: {
    absolute: "Oden | Product marketing that compounds"
  },
  description: "Oden is the operating system for product marketing. PMM authors the company's story on top of every buyer and market signal, so every artifact comes out current and sourced.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getoden.com/#organization",
      "name": "Oden",
      "url": "https://getoden.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getoden.com/logo.png",
        "width": "512",
        "height": "512"
      },
      "description": "Oden is the operating system for product marketing. PMM authors the company's story on top of every buyer and market signal, so every artifact comes out current and sourced.",
      "foundingDate": "2025",
      "sameAs": [
        "https://www.linkedin.com/company/getoden/",
        "https://x.com/getodennow"
      ],
      "email": "support@getoden.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "support@getoden.com",
        "url": "https://getoden.com"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://getoden.com/#product",
      "name": "Oden",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Oden is the operating system for product marketing. It pulls every signal in, holds the company's authored story, and produces current, sourced PMM artifacts.",
      "url": "https://getoden.com",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "89",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Business",
          "price": "199",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ],
      "featureList": [
        "Buyer and Market Signal Ingestion",
        "PMM Authored Truth",
        "Sourced Claims",
        "Current Positioning",
        "Sales Enablement",
        "Launch Content",
        "Battle Card Generation",
        "Messaging Frameworks",
        "Launch Playbooks",
        "Unlimited Seats"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://getoden.com/#website",
      "url": "https://getoden.com",
      "name": "Oden",
      "publisher": {
        "@id": "https://getoden.com/#organization"
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1 + 2. Hero and product demo on a shared background */}
      <section className="relative isolate overflow-hidden bg-background-off-white">
        {/* Mobile warm tint */}
        <div
          className="pointer-events-none absolute inset-0 z-0 md:hidden"
          style={{
            backgroundImage:
              'radial-gradient(120% 70% at 50% 0%, #FFE9D6 0%, #FFF3E4 35%, #FBF6EE 70%, #FAF9F6 100%)',
          }}
          aria-hidden
        />
        {/* Background image — desktop only */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: "url('/hero-compounding-bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'auto 100%',
          }}
          aria-hidden
        />
        <div className="hero-curtain-bg pointer-events-none absolute inset-0 z-[1] hidden md:block" aria-hidden />
        <div className="relative z-10">
          <OpeningScene />
          {/* Product demo — desktop only */}
          <div className="hidden md:block">
            <ProductMedia />
          </div>
        </div>
      </section>

      {/* 3. Before → After sticky overlap */}
      <BeforeAfter />

      {/* 4. Customer story */}
      <CustomerStory />

      {/* Integrations */}
      <Integrations />

      <FAQSection items={homeFaqItems} />

      {/* 5. Free trial CTA */}
      <ClosingCTA />
    </>
  );
}
