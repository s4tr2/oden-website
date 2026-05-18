'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, siteShellClassName } from "./layout-helpers";

export function PricingAnchor() {
    return (
        <section className="w-full bg-off-white py-24 md:py-32">
            <div className={siteShellClassName}>
                <FadeIn>
                    <div className="max-w-3xl">
                        <h2>
                            Built for PMM teams.{' '}
                            <span className="text-placeholder-gray">Priced for adoption.</span>
                        </h2>
                        <p
                            className="mt-6 text-headline-black text-pretty"
                            style={{ fontSize: '20px', letterSpacing: '-0.16px', lineHeight: '1.5' }}
                        >
                            Plans from $89/month. Unlimited seats. No per-user pricing.
                        </p>

                        <div className="mt-10">
                            <a
                                href="https://app.getoden.com/signup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[15px] text-white bg-headline-black hover:brightness-110 rounded transition-all"
                                style={{ letterSpacing: '-0.16px' }}
                            >
                                Start free trial
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <p
                            className="mt-4 text-mid-gray"
                            style={{ fontSize: '13px', letterSpacing: '-0.16px' }}
                        >
                            No credit card required.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
