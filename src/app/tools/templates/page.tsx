import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTemplates } from '@/lib/templates'

export const metadata: Metadata = {
  title: 'Product Marketing Templates',
  description:
    'Free downloadable templates for product marketers. Win/loss analysis, battle cards, product launch calendars, and more.',
  alternates: {
    canonical: 'https://getoden.com/tools/templates',
  },
  openGraph: {
    title: 'Product Marketing Templates | Oden',
    description:
      'Free downloadable templates for product marketers. Win/loss analysis, battle cards, product launch calendars, and more.',
    url: 'https://getoden.com/tools/templates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Marketing Templates | Oden',
    description:
      'Free downloadable templates for product marketers. Win/loss analysis, battle cards, and more.',
  },
}

export default function TemplatesPage() {
  const templates = getAllTemplates()

  return (
    <div className="text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-0 lg:py-16">
        <header className="space-y-6 mb-16">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
            Tools
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Product Marketing Templates
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              Ready-to-use templates to streamline your product marketing workflows.
              Download and customize for your team.
            </p>
          </div>
        </header>

        <div className="grid gap-6">
          {templates.map((template) => (
            <Link
              key={template.slug}
              href={`/tools/templates/${template.slug}`}
              className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {template.title}
                  </h2>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {template.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-gray-400 group-hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {templates.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Templates coming soon.
          </p>
        )}
      </div>
    </div>
  )
}

