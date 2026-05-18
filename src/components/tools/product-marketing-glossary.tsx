'use client'

import { useEffect, useMemo, useState } from 'react'
import { productMarketingGlossaryTerms } from '@/data/product-marketing-glossary'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function ProductMarketingGlossary() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredTerms = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    if (!normalizedQuery) return productMarketingGlossaryTerms

    return productMarketingGlossaryTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(normalizedQuery) ||
        term.definition.toLowerCase().includes(normalizedQuery)
    )
  }, [searchQuery])

  const sortedTerms = useMemo(() => {
    return [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term))
  }, [filteredTerms])

  const termsByLetter = useMemo(() => {
    const grouped: Record<string, typeof sortedTerms> = {}
    sortedTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase()
      if (!grouped[letter]) {
        grouped[letter] = []
      }
      grouped[letter].push(term)
    })
    return grouped
  }, [sortedTerms])

  const availableLetters = useMemo(() => {
    return new Set(Object.keys(termsByLetter))
  }, [termsByLetter])

  const handleLetterClick = (letter: string) => {
    if (!availableLetters.has(letter)) return
    setActiveLetter((current) => (current === letter ? null : letter))
  }

  return (
    <section className="mt-12">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 pl-12 text-base text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {searchQuery && (
          <p className="mt-3 text-sm text-gray-500">
            {sortedTerms.length} result{sortedTerms.length !== 1 && 's'} for &ldquo;{searchQuery}&rdquo;
          </p>
        )}
      </div>

      {/* Alphabetical Index */}
      {!searchQuery && (
        <nav className="mb-10 flex flex-wrap justify-center gap-2 border-b border-gray-100 pb-6">
          {/* All button */}
          <button
            type="button"
            onClick={() => setActiveLetter(null)}
            className={`flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition ${
              activeLetter === null
                ? 'border-gray-900 bg-gray-900 text-white shadow-sm'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-900'
            }`}
          >
            All
          </button>

          {/* Alphabet buttons */}
          {alphabet.map((letter) => {
            const isAvailable = availableLetters.has(letter)
            const isActive = activeLetter === letter
            return (
              <button
                key={letter}
                type="button"
                onClick={() => handleLetterClick(letter)}
                disabled={!isAvailable}
                className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition ${
                  !isAvailable
                    ? 'cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300'
                    : isActive
                      ? 'border-gray-900 bg-gray-900 text-white shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                {letter}
              </button>
            )
          })}
        </nav>
      )}

      {/* Terms */}
      <div className="space-y-10">
        {sortedTerms.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No terms found. Try a different search.
          </div>
        )}

        {searchQuery ? (
          // When searching, show flat list
          <div className="space-y-6">
            {sortedTerms.map((term) => (
              <article
                key={term.id}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {term.term}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">
                  {term.definition}
                </p>
                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <p className="mt-3 text-sm text-gray-400">
                    Related: {term.relatedTerms.join(', ')}
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          // When not searching, show grouped by letter (optionally filtered by active letter)
          (activeLetter ? [activeLetter] : alphabet).map((letter) => {
            const terms = termsByLetter[letter]
            if (!terms || terms.length === 0) return null

            return (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold text-gray-200">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {terms.map((term) => (
                    <article
                      key={term.id}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <h3 className="text-xl font-semibold text-gray-900">
                        {term.term}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-gray-600">
                        {term.definition}
                      </p>
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <p className="mt-3 text-sm text-gray-400">
                          Related: {term.relatedTerms.join(', ')}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
          showBackToTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  )
}

