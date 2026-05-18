import type { Metadata } from 'next'
import { ProductMarketingJobBoard } from '@/components/tools/product-marketing-job-board'
import { jobBoardLastUpdated, productMarketingJobListings, JobListing } from '@/data/product-marketing-job-board'
import { formatDate } from '@/lib/utils'

function getValidThrough(postedDate: string): string {
  const date = new Date(postedDate)
  date.setDate(date.getDate() + 60)
  return date.toISOString().split('T')[0]
}

function parseBaseSalary(salaryRange: string | undefined) {
  if (!salaryRange) return null

  const match = salaryRange.match(/(\d+)K[–-](\d+)K/)
  if (!match) return null

  const minValue = parseInt(match[1]) * 1000
  const maxValue = parseInt(match[2]) * 1000
  const currency = salaryRange.startsWith('USD') ? 'USD' : 'INR'

  return {
    '@type': 'MonetaryAmount',
    currency,
    value: {
      '@type': 'QuantitativeValue',
      minValue,
      maxValue,
      unitText: 'YEAR',
    },
  }
}

function buildJobPostingSchema(job: JobListing, index: number) {
  const baseSchema: Record<string, unknown> = {
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'JobPosting',
      title: job.title,
      description: `${job.description}\n\n${job.responsibilities.map((r) => `• ${r}`).join('\n')}`,
      datePosted: job.postedDate,
      validThrough: getValidThrough(job.postedDate),
      employmentType: 'FULL_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: job.company,
      },
      applicantLocationRequirements: {
        '@type': 'Country',
        name: job.country,
      },
      url: job.applyUrl,
    },
  }

  const item = baseSchema.item as Record<string, unknown>

  // Handle location based on work setting
  if (job.workSetting === 'Remote') {
    // Remote jobs: use jobLocationType, no physical location needed
    item.jobLocationType = 'TELECOMMUTE'
  } else if (job.address) {
    // Hybrid/Onsite jobs with structured address
    item.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: job.address.streetAddress || '',
        addressLocality: job.address.addressLocality,
        addressRegion: job.address.addressRegion || '',
        postalCode: job.address.postalCode || '',
        addressCountry: job.address.addressCountry,
      },
    }
  }

  // Add baseSalary if available
  const baseSalary = parseBaseSalary(job.salaryRange)
  if (baseSalary) {
    item.baseSalary = baseSalary
  }

  return baseSchema
}

export const metadata: Metadata = {
  title: 'Product Marketing Job Board',
  description:
    'Curated, hand-verified Product Marketing Manager openings with quick filters for location, work setting, and experience level.',
  alternates: {
    canonical: '/tools/product-marketing-job-board',
  },
  openGraph: {
    title: 'Product Marketing Job Board | Oden',
    description:
      'Filter the freshest Product Marketing Manager roles across SaaS, AI, and enterprise teams.',
    type: 'website',
    url: 'https://getoden.com/tools/product-marketing-job-board',
    images: [
      {
        url: 'https://getoden.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PMM Job Board by Oden',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PMM Job Board | Oden',
    description: 'Hand-curated PMM roles with filters for location, setting, and seniority.',
    creator: '@getoden',
    site: '@getoden',
    images: ['https://getoden.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  keywords: [
    'PMM jobs',
    'product marketing manager roles',
    'product marketing job board',
    'SaaS marketing jobs',
    'AI marketing roles',
  ],
  category: 'Jobs',
  other: {
    'llm:summary':
      'Live feed of curated Product Marketing Manager roles with filters for location, work setting, and seniority.',
  },
}

export default function JobBoardPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'PMM Job Board | Oden',
    description:
      'Hand-curated Product Marketing Manager openings updated weekly with filters for location, work setting, and seniority.',
    url: 'https://getoden.com/tools/product-marketing-job-board',
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: productMarketingJobListings.map((job, index) =>
        buildJobPostingSchema(job, index)
      ),
    },
  }

  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-0 lg:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
            tools
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Product Marketing Job Board
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              Fresh roles for product marketers, updated by hand so you can find the
              right fit faster. Today&apos;s feed spans AI agents, enterprise SaaS, and
              services teams investing in strategic product marketing talent.
            </p>
            <p className="text-sm text-gray-500">
              Verified on {formatDate(jobBoardLastUpdated)}.
            </p>
          </div>
        </header>

        <ProductMarketingJobBoard />
      </div>
    </div>
  )
}

