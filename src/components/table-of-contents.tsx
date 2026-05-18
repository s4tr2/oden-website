'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { Heading } from '@/lib/blog'

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isManuallyToggled, setIsManuallyToggled] = useState(false)
  const hasAutoExpandedRef = useRef(false)

  useEffect(() => {
    if (isManuallyToggled || hasAutoExpandedRef.current) return

    const checkTitleVisibility = () => {
      if (window.innerWidth < 1024 || hasAutoExpandedRef.current) return

      // Find the first visible h1 (some layouts have hidden mobile h1s)
      const h1 = Array.from(document.querySelectorAll('h1')).find(el => {
        const rect = el.getBoundingClientRect()
        return rect.height > 0 && rect.width > 0
      })

      if (h1 && h1.getBoundingClientRect().bottom < 0) {
        setIsExpanded(true)
        hasAutoExpandedRef.current = true
      }
    }

    window.addEventListener('scroll', checkTitleVisibility, { passive: true })
    // Run initial check after short delay to ensure layout is ready
    const timer = setTimeout(checkTitleVisibility, 500)

    return () => {
      window.removeEventListener('scroll', checkTitleVisibility)
      clearTimeout(timer)
    }
  }, [isManuallyToggled])

  const h2Headings = headings.filter(heading => heading.level === 2)

  if (h2Headings.length === 0) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // Find the visible version of the element (since it's rendered twice for mobile/desktop)
    const element = Array.from(document.querySelectorAll(`#${CSS.escape(id)}`)).find(el => {
      const style = window.getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden' && el.getBoundingClientRect().height > 0
    }) as HTMLElement

    if (!element) return

    const targetScroll = element.getBoundingClientRect().top + window.pageYOffset - 120
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => {
          setIsExpanded(!isExpanded)
          setIsManuallyToggled(true)
        }}
        className="flex items-center justify-between mb-3 w-full text-left hover:opacity-70 transition-opacity"
      >
        <h2 className="text-xs font-semibold text-gray-500 tracking-wide">
          / Table of contents
        </h2>
        <span className="text-gray-500">
          {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div className="border-b border-gray-200 mb-6" />

      {isExpanded && (
        <nav className="space-y-2">
          {h2Headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className="group flex items-start gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
            >
              <span className="text-gray-400 group-hover:text-gray-600 mt-0.5">→</span>
              <span className="flex-1 leading-snug">{heading.text}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}

