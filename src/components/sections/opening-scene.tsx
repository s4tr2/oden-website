'use client'

import { ArrowRight } from 'lucide-react'
import { siteShellClassName, Eyebrow } from './layout-helpers'

export function OpeningScene() {
    return (
        <div className="relative w-full pb-24 pt-44 md:pb-28 md:pt-56">
            <style>{`
                @keyframes spin-cd {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .cd-spin {
                    animation: spin-cd 4s linear infinite;
                }
                @keyframes eyebrow-shimmer {
                    0%   { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(300%) skewX(-12deg); }
                }
                .eyebrow-shimmer {
                    position: relative;
                    overflow: hidden;
                }
                .eyebrow-shimmer::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255,255,255,0.7) 50%,
                        transparent 100%
                    );
                    width: 40%;
                    animation: eyebrow-shimmer 2.4s ease-in-out infinite;
                    animation-delay: 1s;
                }
            `}</style>
            <div className={`${siteShellClassName} relative z-10`}>
                <div className="mx-auto max-w-3xl text-center">

                    {/* Eyebrow pill with spinning CD inside */}
                    <div className="mb-5">
                        <Eyebrow className="eyebrow-shimmer border-white/40 bg-white/70 px-2 text-[#1A1A1A]/60 backdrop-blur-sm">
                            <img
                                src="/cd-disc.png"
                                alt=""
                                aria-hidden
                                className="cd-spin mr-2 h-4 w-4 shrink-0"
                            />
                            The operating system for PMMs
                        </Eyebrow>
                    </div>

                    <h1
                        className="text-balance"
                        style={{
                            fontWeight: 500,
                            fontSize: 'clamp(42px, 6.5vw, 72px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        <span
                            style={{
                                display: 'block',
                                background: 'linear-gradient(180deg, #5F5F5F 0%, #191818 95%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Product marketing that compounds
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-[18px] leading-[1.55] text-mid-gray text-pretty">
                        Every signal into one place. PMM governs the commercial truth on top. Oden helps companies tell the same story in unison.
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-headline-black px-7 py-3.5 text-[16px] font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
                        >
                            Start for free
                            <ArrowRight className="size-4" />
                        </a>
                        <a
                            href="#what-it-does"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-border-sand bg-white px-7 py-3.5 text-[16px] font-semibold text-headline-black hover:opacity-70 transition-opacity sm:w-auto"
                        >
                            Talk to us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
