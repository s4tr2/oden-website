'use client'

import { FadeIn } from "./layout-helpers";

// TODO: as real customers sign on, replace each placeholder slot with a wordmark SVG.
// Keep all logos at uniform height (~24px) and visual weight for a calm strip.
const customerLogos = [
    { name: "DealHub", real: true },
    { name: "TODO Customer 2", real: false },
    { name: "TODO Customer 3", real: false },
    { name: "TODO Customer 4", real: false },
    { name: "TODO Customer 5", real: false },
    { name: "TODO Customer 6", real: false },
];

export function CustomerLogos() {
    return (
        <section className="w-full border-y border-border-sand/50 bg-white py-12 md:py-14">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <p
                        className="text-center text-[12px] uppercase text-placeholder-gray mb-8"
                        style={{ letterSpacing: '1.2px' }}
                    >
                        Trusted by product marketing teams at
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center">
                        {customerLogos.map((logo) => (
                            <div
                                key={logo.name}
                                className="h-7 flex items-center justify-center"
                            >
                                {logo.real ? (
                                    <span
                                        className="text-[18px] font-medium text-canvas-beige tracking-tight"
                                        style={{ letterSpacing: '-0.32px' }}
                                    >
                                        {logo.name}
                                    </span>
                                ) : (
                                    /* TODO: swap with real customer wordmark */
                                    <div className="h-5 w-24 bg-surface-cream rounded-sm" aria-hidden="true" />
                                )}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
