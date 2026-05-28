'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Easter egg letter to PMMs
function LetterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Postcard */}
          <motion.div
            className="relative z-10 w-full max-w-xl overflow-hidden"
            initial={{ scale: 0.94, y: 28, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Paper texture card */}
            <div
              className="relative rounded-sm p-8 md:p-10"
              style={{
                background: '#f8f5f0',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.08)',
                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")
                `,
                backgroundBlendMode: 'soft-light',
              }}
            >
              {/* Stamp with scalloped edges and abstract art */}
              <div className="absolute right-6 top-6 md:right-8 md:top-8">
                <svg width="80" height="100" viewBox="0 0 80 100" fill="none" className="drop-shadow-md">
                  <defs>
                    {/* Gradient for abstract rays */}
                    <linearGradient id="stampGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E85D3B" />
                      <stop offset="100%" stopColor="#D94E2A" />
                    </linearGradient>
                    <linearGradient id="rayGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#F4A261" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#E76F51" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Scalloped border */}
                  <path
                    d="M6 10 Q6 6 10 6
                       Q13 6 14.5 8 Q16 6 19 6 Q22 6 23.5 8 Q25 6 28 6 Q31 6 32.5 8 Q34 6 37 6 Q40 6 41.5 8 Q43 6 46 6 Q49 6 50.5 8 Q52 6 55 6 Q58 6 59.5 8 Q61 6 64 6 Q67 6 68.5 8 Q70 6 74 6
                       Q78 6 78 10
                       Q78 13 76 14.5 Q78 16 78 19 Q78 22 76 23.5 Q78 25 78 28 Q78 31 76 32.5 Q78 34 78 37 Q78 40 76 41.5 Q78 43 78 46 Q78 49 76 50.5 Q78 52 78 55 Q78 58 76 59.5 Q78 61 78 64 Q78 67 76 68.5 Q78 70 78 73 Q78 76 76 77.5 Q78 79 78 82 Q78 85 76 86.5 Q78 88 78 91 Q78 94 76 95
                       Q74 98 70 98
                       Q67 98 65.5 96 Q64 98 61 98 Q58 98 56.5 96 Q55 98 52 98 Q49 98 47.5 96 Q46 98 43 98 Q40 98 38.5 96 Q37 98 34 98 Q31 98 29.5 96 Q28 98 25 98 Q22 98 20.5 96 Q19 98 16 98 Q13 98 11.5 96 Q10 98 6 98
                       Q2 98 2 94
                       Q2 91 4 89.5 Q2 88 2 85 Q2 82 4 80.5 Q2 79 2 76 Q2 73 4 71.5 Q2 70 2 67 Q2 64 4 62.5 Q2 61 2 58 Q2 55 4 53.5 Q2 52 2 49 Q2 46 4 44.5 Q2 43 2 40 Q2 37 4 35.5 Q2 34 2 31 Q2 28 4 26.5 Q2 25 2 22 Q2 19 4 17.5 Q2 16 2 13 Q2 10 6 10Z"
                    fill="#FDF8F4"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="0.5"
                  />
                  
                  {/* Abstract sunburst rays */}
                  <g opacity="0.6">
                    <path d="M40 52 L40 20 L44 52 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L55 28 L48 52 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L65 40 L52 52 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L65 55 L52 56 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L25 28 L32 52 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L15 40 L28 52 Z" fill="url(#rayGradient)" />
                    <path d="M40 52 L15 55 L28 56 Z" fill="url(#rayGradient)" />
                  </g>
                  
                  {/* Central O */}
                  <circle cx="40" cy="52" r="16" fill="url(#stampGradient)" />
                  <circle cx="40" cy="52" r="10" fill="#FDF8F4" />
                  <text x="40" y="57" textAnchor="middle" fill="url(#stampGradient)" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">O</text>
                  
                  {/* Top text */}
                  <text x="40" y="18" textAnchor="middle" fill="#E85D3B" fontSize="7" fontFamily="ui-monospace, monospace" fontWeight="600" letterSpacing="1.5">FOR PMMS</text>
                  
                  {/* Bottom text */}
                  <text x="40" y="88" textAnchor="middle" fill="#E85D3B" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600" letterSpacing="2">2026</text>
                </svg>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute left-4 top-4 rounded-full p-2 text-black/30 hover:bg-black/5 hover:text-black/50 transition-colors"
                aria-label="Close letter"
              >
                <X className="size-4" />
              </button>

              {/* Letter content - handwritten style */}
              <div className="mt-4 space-y-5">
                <p
                  className="text-black/40"
                  style={{
                    fontSize: '11px',
                    fontFamily: 'ui-monospace, monospace',
                    letterSpacing: '1.5px',
                  }}
                >
                  TO: EVERY PMM OUT THERE
                </p>
                
                <h3
                  style={{
                    fontSize: 'clamp(26px, 5vw, 34px)',
                    fontWeight: 500,
                    fontFamily: 'Georgia, serif',
                    color: '#1a1a1a',
                    lineHeight: 1.25,
                  }}
                >
                  We understand you.
                </h3>

                <div
                  className="space-y-4"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.85,
                    color: '#3d3d3d',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  <p>
                    You sit at the center of a company that doesn&apos;t always see you. You translate product into story, 
                    market into strategy, and chaos into clarity.
                  </p>
                  <p>
                    You&apos;re the one who knows the buyer better than anyone, but spends half the week hunting for context 
                    instead of using it. The one who builds the deck everyone else presents. The one who gets asked 
                    &ldquo;can you just tweak the positioning?&rdquo; the day before launch.
                  </p>
                  <p>
                    We built Oden because we&apos;ve been there. Because PMM deserves a system that remembers, 
                    that compounds, that makes every week easier than the last.
                  </p>
                  <p>
                    This one&apos;s for you.
                  </p>
                </div>

                <p
                  className="pt-3"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Georgia, serif',
                    color: '#1a1a1a',
                    fontWeight: 500,
                  }}
                >
                  — With love, The Oden team
                </p>
              </div>

              {/* Decorative line */}
              <div
                className="mt-8 h-px w-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const pmmFortunes = [
  "May your positioning never be questioned in the next meeting.",
  "Your ICP is valid. Trust yourself.",
  "The battle card you seek is already up to date.",
  "Today, Sales will not ask 'where's the latest deck?'",
  "Your competitor's pricing change has already been captured.",
  "The Gong call you need? Already indexed.",
  "May your launch be on time and your stakeholders aligned.",
  "Your messaging will resonate. The data says so.",
  "No one will say 'can we just tweak the positioning' today.",
  "The context you gathered will not be lost.",
]

function PMMFortune() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * pmmFortunes.length))
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let swapTimeout: number | undefined
    const rotate = () => {
      setVisible(false)
      swapTimeout = window.setTimeout(() => {
        setIndex((i) => (i + 1) % pmmFortunes.length)
        setVisible(true)
      }, 450)
    }
    const id = window.setInterval(rotate, 8000)
    return () => {
      window.clearInterval(id)
      if (swapTimeout) window.clearTimeout(swapTimeout)
    }
  }, [])

  return (
    <p
      className="pointer-events-none mx-auto max-w-xl text-center text-[13px] not-italic transition-opacity duration-500 md:text-[15px] md:leading-relaxed"
      style={{
        color: 'rgba(0,0,0,0.42)',
        opacity: visible ? 1 : 0,
      }}
      aria-live="polite"
    >
      &ldquo;{pmmFortunes[index]}&rdquo;
    </p>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

const productLinks: FooterLink[] = [
  { name: 'Buyer Intel', href: '/#what-it-does' },
  { name: 'Competitor Intel', href: '/#what-it-does' },
  { name: 'Positioning', href: '/#what-it-does' },
  { name: 'Sales Enablement', href: '/#what-it-does' },
  { name: 'GTM Strategy', href: '/#what-it-does' },
]

const resourceLinks: FooterLink[] = [
  { name: 'Templates', href: '/tools/templates' },
  { name: 'Product Marketing Jobs', href: 'https://productmarketingjobs.co?utm_referrer=Oden', external: true },
  { name: 'Glossary', href: '/tools/product-marketing-glossary' },
  { name: 'Events', href: '/tools/product-marketing-events' },
  { name: 'Blog', href: '/blog' },
]

const companyLinks: FooterLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]

const connectLinks: FooterLink[] = [
  { name: 'Twitter / X', href: 'https://x.com/getodennow', external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/getoden/', external: true },
]

const footerSections = [
  { title: 'Product', links: productLinks },
  { title: 'Resources', links: resourceLinks },
  { title: 'Company', links: companyLinks },
  { title: 'Connect', links: connectLinks },
]

export function Footer() {
  const [letterOpen, setLetterOpen] = useState(false)

  return (
    <footer className="relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Easter egg modal */}
      <LetterModal isOpen={letterOpen} onClose={() => setLetterOpen(false)} />
      
      <div className="mx-auto max-w-[1120px] px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <span
                className="text-headline-black cursor-pointer"
                style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}
              >
                Oden
              </span>
            </Link>
            <p className="text-mid-gray text-[15px] leading-[1.65] max-w-[300px] text-pretty">
              The operating system for product marketing. Every signal in, PMM-governed truth on top.
            </p>
            
            {/* Email signup */}
            <form className="flex w-full max-w-[320px] gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-xl border border-border-sand bg-white px-4 py-3 text-[15px] text-headline-black placeholder:text-placeholder-gray focus:outline-none focus:ring-1 focus:ring-headline-black/20"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-headline-black px-4 py-3 text-[15px] font-medium text-white hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Sign up
              </button>
            </form>

            {/* P.S. Easter egg */}
            <button
              onClick={() => setLetterOpen(true)}
              className="group mt-6 flex items-center gap-2.5 text-left"
              aria-label="A letter to PMMs"
            >
              {/* Mini envelope */}
              <div
                className="relative flex h-8 w-10 items-end justify-center overflow-hidden rounded-[3px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
                style={{
                  background: 'linear-gradient(145deg, #f5f0e8 0%, #e8e0d4 100%)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                {/* Flap */}
                <div
                  className="absolute inset-x-0 top-0 h-4 transition-transform duration-300 group-hover:scale-y-90"
                  style={{
                    background: 'linear-gradient(180deg, #ede6dc 0%, #e0d7cb 100%)',
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                  }}
                />
                {/* Seal */}
                <div
                  className="absolute bottom-2 left-1/2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #c9a87c 0%, #a68553 100%)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                  }}
                />
              </div>
              <span
                className="text-[13px] transition-colors duration-200 group-hover:text-headline-black"
                style={{ color: 'rgba(0,0,0,0.35)' }}
              >
                P.S. A letter for you
              </span>
            </button>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[14px] font-semibold text-headline-black mb-5 tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[15px] text-mid-gray hover:text-headline-black transition-colors"
                        >
                          {item.name === 'Twitter / X' && <XIcon className="size-4" />}
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[15px] text-mid-gray hover:text-headline-black transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large watermark text + fortune overlay */}
        <div className="relative mt-16 -mx-6 overflow-hidden pb-16 md:pb-20 lg:-mx-8">
          <div
            className="relative z-[1] text-center select-none pointer-events-none"
            style={{
              fontSize: 'clamp(120px, 20vw, 240px)',
              fontWeight: 500,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              color: 'transparent',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Oden
          </div>
          {/* Gradient glow overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 70%, rgba(255,200,150,0.15) 0%, transparent 70%)',
            }}
          />
          {/* Fortune: lower band of the wordmark */}
          <div className="absolute inset-x-0 bottom-[10%] z-[2] flex justify-center px-4 md:bottom-[14%]">
            <PMMFortune />
          </div>
        </div>

      </div>
    </footer>
  )
}
