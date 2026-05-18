'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteShellClassName } from './layout-helpers'

const navigation = [
  { name: 'Product', href: '/#what-it-does' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    const menuElement = document.querySelector('[role="dialog"]')
    if (menuElement) {
      const focusableElements = menuElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      firstElement?.focus()

      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleTabKey)

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.removeEventListener('keydown', handleTabKey)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-[50] transition-[top,box-shadow] duration-300 ease-out',
        scrolled ? 'top-4' : 'top-3 md:top-4'
      )}
    >
      <div
        className={cn(
          siteShellClassName,
          '!pl-2 !pr-2 lg:!pl-3 lg:!pr-2.5',
          'rounded-lg border border-border-sand/80 bg-white/95 backdrop-blur-md transition-shadow duration-300 ease-out',
          scrolled ? 'shadow-sm' : 'shadow-md'
        )}
      >
      <nav className="pl-1 pr-0 md:pl-2 md:pr-0" aria-label="Global">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group">
              <span className="font-semibold text-headline-black text-lg" style={{ letterSpacing: '-0.4px' }}>Oden</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-mid-gray hover:text-headline-black transition-colors"
                style={{ letterSpacing: '-0.16px' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            <a
              href="https://app.getoden.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mid-gray hover:text-headline-black transition-colors px-3 py-2"
              style={{ letterSpacing: '-0.16px' }}
            >
              Login
            </a>
            <a
              href="https://app.getoden.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-headline-black px-4 py-2 text-sm text-white transition-colors hover:bg-headline-black"
              style={{ letterSpacing: '-0.16px' }}
            >
              Start free trial
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-my-1 inline-flex items-center justify-center rounded p-2 text-headline-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-border-sand/60 pb-3 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <div className="pt-3 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ delay: index * 0.04, duration: 0.16 }}
                  >
                    <Link
                      href={item.href}
                      className="flex min-h-10 items-center rounded px-2 text-sm text-mid-gray hover:text-headline-black hover:bg-off-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-border-sand flex items-center gap-2">
                <a
                  href="https://app.getoden.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mid-gray hover:text-headline-black transition-colors px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="https://app.getoden.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-headline-black text-white text-sm hover:bg-headline-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start free trial
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </div>
    </header>
  )
}
