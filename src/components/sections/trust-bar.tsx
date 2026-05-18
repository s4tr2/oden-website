'use client'

import { FadeIn } from "./layout-helpers";

export function TrustBar() {
    return (
        <section className="w-full bg-white py-20 md:py-24 border-t border-border-sand/60">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {/* Backed by */}
                        <div>
                            <p
                                className="text-[12px] uppercase text-placeholder-gray mb-5"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                Backed by
                            </p>
                            {/* TODO: swap each placeholder for real investor wordmarks once announced */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                <div className="h-6 w-28 bg-surface-cream rounded-sm" aria-hidden="true" />
                                <div className="h-6 w-28 bg-surface-cream rounded-sm" aria-hidden="true" />
                                <div className="h-6 w-28 bg-surface-cream rounded-sm" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Built by */}
                        <div>
                            <p
                                className="text-[12px] uppercase text-placeholder-gray mb-5"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                Built by
                            </p>
                            <p
                                className="text-[14px] text-headline-black leading-[1.6]"
                                style={{ letterSpacing: '-0.16px' }}
                            >
                                Operators from Udaan, Whatfix, Quizizz, Cuemath, and Grab. A decade shipping enterprise-grade SaaS to Fortune 500 customers.
                            </p>
                        </div>

                        {/* Advised by */}
                        <div>
                            <p
                                className="text-[12px] uppercase text-placeholder-gray mb-5"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                Advised by
                            </p>
                            <p
                                className="text-[14px] text-headline-black leading-[1.6]"
                                style={{ letterSpacing: '-0.16px' }}
                            >
                                David Held, Director of PMM, DealHub.
                                <br />
                                Tanwistha Gope, Director of PMM, FirstHive.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
