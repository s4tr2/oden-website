'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        // Reset scroll position on route change for the window
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })

        // Small timeout as a fallback for potential layout shifts
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0)
        }, 10)

        return () => clearTimeout(timeoutId)
    }, [pathname])

    return null
}
