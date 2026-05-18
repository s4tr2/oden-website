'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface MetadataAccordionProps {
  date: string
  formattedDate: string
  tags: string[]
  slug: string
  title: string
}

export function MetadataAccordion({ date, formattedDate, tags, slug, title }: MetadataAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-12">
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
          <div className="flex items-center justify-between">
            <span className="text-gray-500">DATE:</span>
            <time dateTime={date} className="font-sans text-gray-900">{formattedDate}</time>
          </div>

          <div className="flex items-start justify-between gap-4">
            <span className="text-gray-500 flex-shrink-0">CATEGORIES:</span>
            <div className="flex flex-wrap gap-2 justify-end flex-1">
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

      {/* Share Buttons */}
      <div className="mt-6">
        <span className="text-gray-500 text-sm block mb-3">SHARE:</span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://getoden.com/blog/${slug}`)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Twitter/X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://getoden.com/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

