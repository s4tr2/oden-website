'use client'

import { Section, FadeIn } from "../layout-helpers";

const stats = [
    { value: "80%", label: "Less time on first drafts" },
    { value: "5x", label: "More deliverables per week" },
    { value: "∞", label: "Strategic headspace recovered" },
];

export function FoundingPMMStats() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-5xl md:text-6xl text-[#111111]">
                                {stat.value}
                            </div>
                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
}
