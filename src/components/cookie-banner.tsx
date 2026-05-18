'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    // You can trigger analytics initialization here if needed
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
    // You can disable analytics here if needed
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 z-50 p-4">
      <div className="w-80 max-w-[calc(100vw-2rem)]">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4">
          <div className="flex flex-col gap-3">
            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-base font-medium text-gray-200">
                We use cookies to improve your experience.
              </h3>
              
              <p className="text-sm text-gray-400">
                Find out more in our{' '}
                <Link href="/privacy" className="text-gray-300 underline hover:text-gray-200">
                  privacy policy
                </Link>
                .
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Continue
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2.5 text-sm font-medium text-white bg-transparent border border-gray-500 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

