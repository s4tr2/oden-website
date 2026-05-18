'use client'

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const siteShellClassName = "mx-auto w-full max-w-[1120px] px-6 lg:px-8";

/**
 * Consistent eyebrow pill component used across all sections.
 * Standard dark style by default; use variant="muted" for softer appearance.
 */
export function Eyebrow({
    children,
    className,
    variant = 'default',
}: {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'muted'
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-xl border px-3.5 py-1 text-[11px] uppercase tracking-[1.4px]",
                variant === 'default' && "border-[#1A1A1A]/15 bg-[#1A1A1A]/[0.04] text-[#1A1A1A]",
                variant === 'muted' && "border-[#D9D5CF] bg-white/70 text-[#6E6B65]",
                className
            )}
        >
            {children}
        </span>
    );
}

export const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => {
    return (
        <section id={id} className={cn("flex flex-col justify-center py-20 md:py-28", siteShellClassName, className)}>
            {children}
        </section>
    );
};

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('fade-in-visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className="fade-in-section">
            {children}
        </div>
    );
};
