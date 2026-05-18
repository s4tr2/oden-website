'use client'

import { Section, FadeIn } from "../layout-helpers";

const steps = [
    {
        number: "1",
        title: "Give a brief",
        description: '"Sales Agent: Create battle cards for our new enterprise tier vs. Competitor X"'
    },
    {
        number: "2",
        title: "Agent researches & drafts",
        description: "Pulls from your docs, competitor intel, and PMM frameworks automatically."
    },
    {
        number: "3",
        title: "You refine & ship",
        description: "Review, add your touch, and deliver. 30 min vs. 3 hours."
    }
];

export function FoundingPMMHowItWorks() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl text-zinc-900">How your agents work</h2>
                    <p className="text-zinc-500">Simple to command, powerful to execute</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="p-8 border border-zinc-100 rounded-2xl bg-white space-y-6">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 text-lg">
                                {step.number}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl text-zinc-900">{step.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed font-sans">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
}
