'use client'

import Link from 'next/link'
import { House, ArrowLeft, BookOpen, LayoutTemplate, Newspaper } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] font-bold text-gray-900 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              This page doesn&apos;t exist
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              The page you&apos;re looking for may have been moved or removed. Here are some places to get started.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-200 shadow-lg shadow-primary-600/30"
            >
              <House size={20} />
              Go to homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 rounded-full border border-gray-200 transition-all duration-200 shadow-lg shadow-gray-900/10"
            >
              <ArrowLeft size={20} />
              Go back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-5">You might be looking for:</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
              >
                <Newspaper size={16} />
                Blog
              </Link>
              <Link
                href="/tools/templates"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
              >
                <LayoutTemplate size={16} />
                Templates
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
              >
                <BookOpen size={16} />
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
