'use client'

import { Section, FadeIn } from "../layout-helpers";

export function FoundingPMMClosingCTA() {
    return (
        <Section className="py-32">
            <FadeIn>
                <div className="text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl text-zinc-900 leading-tight tracking-tight">
                        Stop being a team of one.
                    </h2>

                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Get the AI team you need to do the job you were hired for-without burning out.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#111111] hover:bg-[#262626] overflow-hidden shadow-lg shadow-[#111111]/20 rounded-none w-full md:w-auto"
                        >
                            <span className="mr-2">Start free trial</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                        <p className="mt-4 text-xs font-semibold text-zinc-400">
                            No credit card required · Cancel anytime
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
