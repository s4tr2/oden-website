'use client'

import { Section, FadeIn } from "../layout-helpers";

export function PositioningCTA() {
    return (
        <Section className="py-24 flex flex-col items-center text-center">
            <FadeIn>
                <h2 className="text-4xl md:text-6xl mb-10 tracking-tight text-zinc-900 leading-tight">
                    Stop blending in.
                    <br />
                    <span className=" text-purple-600">Start standing out.</span>
                </h2>
                <a
                    href="https://app.getoden.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-purple-600 hover:bg-purple-700 overflow-hidden shadow-lg shadow-purple-500/20 rounded"
                >
                    <span className="mr-2">Deploy Agent</span>
                    <span className="ml-1 opacity-100 transition-opacity duration-200">→</span>
                </a>
            </FadeIn>
        </Section>
    );
}
