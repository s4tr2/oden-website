'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface MetadataAccordionDesktopProps {
  date: string
  formattedDate: string
  tags: string[]
  slug: string
  title: string
  category?: string
}

export function MetadataAccordionDesktop({ date, formattedDate, tags, slug, title, category }: MetadataAccordionDesktopProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Check if this is a versus or comparison page
  const showBanner = category?.toLowerCase().includes('vs') || category?.toLowerCase().includes('comparison') || false

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between mb-3 w-full text-left hover:opacity-70 transition-opacity"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Collapse metadata' : 'Expand metadata'}
      >
        <h2 className="text-xs font-semibold text-gray-500 tracking-wide">
          / Metadata
        </h2>
        <span className="text-gray-500">
          {isExpanded ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <div className="border-b border-gray-200 mb-6"></div>

      {isExpanded && (
        <div className="space-y-4 text-sm">
          <div>
            <div className="text-gray-500 mb-1">DATE:</div>
            <time dateTime={date} className="font-sans text-gray-900">{formattedDate}</time>
          </div>
          <div>
            <div className="text-gray-500 mb-2">CATEGORIES:</div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-900 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Oden Banner - Only show on versus and comparison pages */}
      {showBanner && (
        <a
          href="https://app.getoden.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full block cursor-pointer"
          style={{ aspectRatio: '3/2' }}
        >
          {/* Outer frame - pale purple background with thicker bottom */}
          <div className="relative w-full h-full rounded-lg shadow-sm transition-opacity hover:opacity-95" style={{ backgroundColor: '#C2BAEC', padding: '4px', paddingTop: '4px', paddingBottom: '16px' }}>
            {/* Inner white frame */}
            <div className="absolute top-[4px] left-[4px] right-[4px] bottom-[16px] bg-white rounded-lg flex flex-col items-center justify-center p-6" style={{ borderRadius: '8px' }}>
              <div className="flex flex-col items-center gap-2">
                {/* Main text - center aligned */}
                <p className="text-base font-medium text-gray-900 leading-snug text-center">
                  Create your own versus pages with <strong>Oden</strong>
                </p>
                {/* Button - center aligned, smaller */}
                <div className="text-center">
                  <span
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: '#e9d5ff', color: '#6b21a8', border: '1px solid #6b21a8' }}
                  >
                    Get started for free
                  </span>
                </div>
              </div>
            </div>
            {/* Bottom footer with POWERED BY ODEN */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center rounded-b-lg" style={{ padding: '4px 0', backgroundColor: '#C2BAEC' }}>
              <span className="text-xs font-semibold uppercase" style={{ color: '#6b21a8', letterSpacing: '0.15em' }}>POWERED BY ODEN</span>
            </div>
          </div>
        </a>
      )}

      {/* Share Buttons */}
      <div className="mt-4">
        <div className="text-gray-500 text-sm mb-3">SHARE:</div>
        <div className="space-y-2">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://getoden.com/blog/${slug}`)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Twitter/X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://getoden.com/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

