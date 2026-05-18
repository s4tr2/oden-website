'use client'

import { Section } from "./layout-helpers";

export function DemoVideo() {
    return (
        <Section className="py-4 md:py-8">
            <div className="w-full max-w-5xl mx-auto">
                <div className="relative w-full aspect-video rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden">
                    <div className="flex flex-col items-center gap-3 text-zinc-400">
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Oden Explainer video</span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
