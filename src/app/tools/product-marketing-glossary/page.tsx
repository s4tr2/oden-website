import type { Metadata } from 'next'
import { ProductMarketingGlossary } from '@/components/tools/product-marketing-glossary'

export const metadata: Metadata = {
  title: 'Product Marketing Glossary',
  description:
    'A comprehensive glossary of product marketing terms, from battle cards to win/loss analysis. Learn the language of product marketing with clear definitions.',
  alternates: {
    canonical: '/tools/product-marketing-glossary',
  },
  openGraph: {
    title: 'Product Marketing Glossary | Oden',
    description:
      'Master product marketing terminology with our curated glossary covering competitive intelligence, sales enablement, messaging, and more.',
  },
}

export default function GlossaryPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-0 lg:py-16">
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
            Tools
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Product Marketing Glossary
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              Your reference guide to product marketing terminology. From battle
              cards to win/loss analysis, find clear definitions for the terms
              that matter most in product marketing.
            </p>
          </div>
        </header>

        <ProductMarketingGlossary />
      </div>
    </div>
  )
}

