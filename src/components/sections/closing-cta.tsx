'use client'

import { ArrowRight } from 'lucide-react';
import { FadeIn, siteShellClassName } from "./layout-helpers";

export function ClosingCTA() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className={`${siteShellClassName} relative z-10 py-6`}>
                <FadeIn>
                    <div
                        className="cta-card relative overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-20"
                        style={{
                            // Stack: grid texture, left-to-right dark curtain, then the tree image
                            backgroundImage: `
                                linear-gradient(to right,
                                    #0D0D0D 0%,
                                    #0D0D0D 32%,
                                    rgba(13,13,13,0.92) 42%,
                                    rgba(13,13,13,0.65) 54%,
                                    rgba(13,13,13,0.25) 68%,
                                    rgba(13,13,13,0.05) 80%,
                                    transparent 88%
                                ),
                                url('/cta/roots-tree.png')
                            `,
                            backgroundSize: '100% 100%, cover',
                            backgroundPosition: 'center, right center',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundColor: '#0D0D0D',
                        }}
                    >
                        <div className="relative z-10 max-w-2xl">
                            <h2
                                className="mb-6 text-white"
                                style={{
                                    fontSize: 'clamp(32px, 4.5vw, 52px)',
                                    fontWeight: 400,
                                    lineHeight: 1.15,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Give your team one governed truth to sell from.
                            </h2>
                            <p
                                className="text-white/80 text-pretty"
                                style={{ fontSize: '18px', letterSpacing: '-0.16px', lineHeight: '1.5' }}
                            >
                                Plans from $89/month. Unlimited seats. No per-user pricing.
                            </p>
                            <p
                                className="mt-3"
                                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}
                            >
                                No credit card required.
                            </p>
                            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                                <a
                                    href="https://app.getoden.com/signup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-[15px] font-medium text-headline-black hover:bg-white/90 transition-all w-full sm:w-auto"
                                >
                                    Start free trial
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="mailto:founders@getoden.com"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-[15px] text-white/80 hover:border-white/40 hover:text-white transition-all w-full sm:w-auto"
                                >
                                    Talk to a founder
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
