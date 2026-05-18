'use client'

import { Section, FadeIn } from "../layout-helpers";

export function FoundingPMMTransition() {
    return (
        <Section className="py-32">
            <FadeIn>
                <div className="border border-zinc-200 bg-white shadow-lg p-12 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#111111]/50 to-transparent"></div>

                    <h2 className="text-4xl md:text-6xl leading-tight mb-8 text-zinc-900 tracking-tight">
                        You need a <span className=" text-[#111111]">team</span>.
                    </h2>

                    <div className="flex items-center justify-center gap-6 py-6 opacity-30">
                        <div className="h-px bg-zinc-900 w-24"></div>
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-900 font-semibold">Not Headcount</span>
                        <div className="h-px bg-zinc-900 w-24"></div>
                    </div>

                    <div className="mt-8 relative inline-block">
                        <span className="font-sans text-xl md:text-2xl text-zinc-600 tracking-tight">
                            Just the right help, in the right places.
                        </span>
                    </div>

                    <div className="mt-16 text-xs text-zinc-400 font-semibold tracking-[0.2em] uppercase">
                        Built for solo PMMs at startups
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
