'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FadeIn, siteShellClassName } from "./layout-helpers";

const stats = [
    { value: "60%", label: "less time on competitor research" },
    { value: "3x", label: "faster battle card production" },
    { value: "10+ tools", label: "replaced in one workflow" },
];

function DealHubLogo() {
    return (
        <div
            className="flex h-14 w-14 items-center justify-center rounded-sm"
            style={{ backgroundColor: '#2fc7b2' }}
            aria-label="DealHub logo"
        >
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                <path
                    d="M13.8 7h4.8v20h-4.5v-1.8c-1.5 1.5-3.4 2.3-5.7 2.3-5 0-8.6-3.8-8.6-9s3.7-9 8.8-9c2.2 0 4.1.8 5.2 2V7Z"
                    fill="#111a63"
                />
                <path
                    d="M8.9 23.2c2.8 0 4.8-2 4.8-4.8 0-2.9-2-4.9-4.8-4.9-2.8 0-4.8 2-4.8 4.9 0 2.8 2 4.8 4.8 4.8Z"
                    fill="#2fc7b2"
                />
                <circle cx="23.8" cy="18.4" r="3.1" fill="#111a63" />
                <circle cx="30" cy="18.4" r="3.1" fill="#111a63" />
            </svg>
        </div>
    )
}

export function CustomerStory() {
    return (
        <section className="w-full bg-background-off-white py-24 md:py-32">
            <div className={siteShellClassName}>
                <FadeIn>
                    <div
                        className="relative overflow-hidden rounded-2xl"
                        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                        {/* Static dark background */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{ background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)' }}
                        />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12">
                            {/* Eyebrow pill */}
                            <div className="mb-7">
                                <span className="inline-flex items-center rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-1 text-[11px] uppercase tracking-[1.4px] text-white/70">
                                    Customer story
                                </span>
                            </div>

                            {/* Main quote headline */}
                            <h2
                                className="mb-12 max-w-3xl text-balance"
                                style={{
                                    fontSize: 'clamp(32px, 4.5vw, 54px)',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    fontWeight: 400,
                                }}
                            >
                                <span className="text-white">&ldquo;I can&apos;t go back.</span>{' '}
                                <span style={{ color: 'rgba(255,255,255,0.5)' }}>The system knows too much.&rdquo;</span>
                            </h2>

                            {/* Inner content card */}
                            <div
                                className="rounded-xl p-5 sm:p-8 md:p-10"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                                    {/* Left: Person info */}
                                    <div className="md:col-span-4">
                                        <div className="relative mb-6 inline-block">
                                            <Image
                                                src="/david-held.jpeg"
                                                alt="David Held"
                                                width={80}
                                                height={80}
                                                className="aspect-square w-20 rounded-full object-cover"
                                                style={{ border: '2px solid rgba(255,255,255,0.1)' }}
                                            />
                                            {/* DealHub logo badged at bottom-right of avatar */}
                                            <div className="absolute -bottom-2 -right-2 rounded-full p-1 shadow-md"
                                                style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full"
                                                    style={{ backgroundColor: '#2fc7b2' }}>
                                                    <svg width="14" height="14" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                                                        <path d="M13.8 7h4.8v20h-4.5v-1.8c-1.5 1.5-3.4 2.3-5.7 2.3-5 0-8.6-3.8-8.6-9s3.7-9 8.8-9c2.2 0 4.1.8 5.2 2V7Z" fill="#111a63" />
                                                        <path d="M8.9 23.2c2.8 0 4.8-2 4.8-4.8 0-2.9-2-4.9-4.8-4.9-2.8 0-4.8 2-4.8 4.9 0 2.8 2 4.8 4.8 4.8Z" fill="#2fc7b2" />
                                                        <circle cx="23.8" cy="18.4" r="3.1" fill="#111a63" />
                                                        <circle cx="30" cy="18.4" r="3.1" fill="#111a63" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p
                                            className="text-[16px] font-medium text-white mb-1"
                                            style={{ letterSpacing: '-0.16px' }}
                                        >
                                            David Held
                                        </p>
                                        <p
                                            className="text-[14px]"
                                            style={{ letterSpacing: '-0.16px', color: 'rgba(255,255,255,0.5)' }}
                                        >
                                            Director of Product Marketing, DealHub
                                        </p>
                                    </div>

                                    {/* Right: Stats + quote */}
                                    <div className="md:col-span-8">
                                        {/* Stats row */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {stats.map((s) => (
                                                <div key={s.label}>
                                                    <p
                                    className="text-white mb-1 tabular-nums font-medium"
                                                    style={{ fontSize: 'clamp(18px, 3vw, 26px)', letterSpacing: '-0.32px' }}
                                                    >
                                                        {s.value}
                                                    </p>
                                                    <p
                                                        className="text-[13px] leading-[1.5] text-pretty"
                                                        style={{ letterSpacing: '-0.16px', color: 'rgba(255,255,255,0.5)' }}
                                                    >
                                                        {s.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Secondary quote */}
                                        <blockquote
                                            className="pl-5 text-white leading-[1.55] text-pretty"
                                            style={{
                                                fontSize: 'clamp(15px, 2vw, 18px)',
                                                letterSpacing: '-0.16px',
                                                borderLeft: '2px solid rgba(255,255,255,0.15)',
                                            }}
                                        >
                                            &ldquo;There&apos;s something about what you&apos;ve done. That thinks like a product marketer. I don&apos;t have to tell it.&rdquo;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            {/* CTA — coming soon */}
                            <div className="mt-8">
                                <span
                                    className="inline-flex items-center gap-2.5 cursor-default select-none"
                                    style={{ opacity: 0.45 }}
                                >
                                    <span
                                        className="text-[14px] font-medium text-white"
                                        style={{ letterSpacing: '-0.12px' }}
                                    >
                                        Read the full story
                                    </span>
                                    <span className="inline-flex items-center rounded-md border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.8px] text-white/70">
                                        Coming soon
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
