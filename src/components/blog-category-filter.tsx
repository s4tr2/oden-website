'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import type { BlogPost } from '@/types'

interface BlogCategoryFilterProps {
  posts: BlogPost[]
  categories: string[]
  selectedCategory: string | null
}

export function BlogCategoryFilter({
  posts,
  categories,
  selectedCategory
}: BlogCategoryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Count posts per category
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = posts.filter(post => post.category === category).length
    return acc
  }, {} as Record<string, number>)

  const totalPosts = posts.length

  return (
    <div>
      {/* Mobile: Accordion header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden flex items-center justify-between mb-3 w-full text-left hover:opacity-70 transition-opacity"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Collapse categories' : 'Expand categories'}
      >
        <h2 className="text-xs font-semibold text-gray-500 tracking-wide">
          / Categories
        </h2>
        <span className="text-gray-500">
          {isExpanded ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      {/* Desktop: Static header */}
      <h2 className="hidden lg:block text-xs font-semibold text-gray-500 tracking-wide mb-3">
        / Categories
      </h2>

      <div className="border-b border-gray-200 mb-6"></div>

      {/* Mobile: Collapsible content */}
      <div className={`lg:block ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-1">
          {/* All option */}
          <Link
            href="/blog"
            className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${!selectedCategory
                ? 'bg-gray-100 text-gray-900 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <span>All</span>
            <span className="text-gray-400 text-xs">{totalPosts}</span>
          </Link>

          {/* Category options */}
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${selectedCategory === category
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <span>{category}</span>
              <span className="text-gray-400 text-xs">{categoryCounts[category]}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
