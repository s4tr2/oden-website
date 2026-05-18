'use client'

import React, { useState, useCallback } from 'react'

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode }
    return extractText(props.children)
  }
  return ''
}

export function CopyableCodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    const text = extractText(children)
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [children])

  return (
    <div className="relative group mb-4 sm:mb-5">
      <pre className="bg-gray-900 text-gray-100 p-4 pt-10 sm:p-5 sm:pt-11 rounded-lg overflow-x-auto text-xs sm:text-sm leading-relaxed -mx-4 sm:mx-0">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-2.5 right-2.5 sm:right-3 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
          copied
            ? 'bg-green-600 text-white'
            : 'bg-gray-700/80 hover:bg-gray-600 text-gray-300 hover:text-white border border-gray-600/50'
        }`}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  )
}
