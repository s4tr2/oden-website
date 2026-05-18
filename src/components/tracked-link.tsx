'use client'

import React from 'react'

interface TrackedLinkProps {
  href: string
  slug: string
  className?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

export function TrackedLink({ href, slug, className, target, rel, children }: TrackedLinkProps) {
  const handleClick = () => {
    if (href.includes('app.getoden.com/signup')) {
      window.dispatchEvent(new CustomEvent('oden_signup_click', {
        detail: { source: 'blog', slug, href }
      }))
      // GTM dataLayer support
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      if (w.dataLayer) {
        w.dataLayer.push({ event: 'oden_signup_click', source: 'blog', slug, href })
      }
    }
  }

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
