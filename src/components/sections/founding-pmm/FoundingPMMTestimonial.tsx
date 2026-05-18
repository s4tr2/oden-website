'use client'

import { Section, FadeIn } from "../layout-helpers";

export function FoundingPMMTestimonial() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="relative bg-white border border-zinc-100 rounded-3xl p-10 md:p-16 shadow-xl shadow-zinc-100/50 max-w-4xl mx-auto">
                    <div className="absolute -top-4 left-10 text-6xl text-[#111111]/20">"</div>

                    <div className="space-y-8">
                        <blockquote className="text-2xl md:text-3xl text-zinc-900 leading-tight">
                            I was drowning before Oden. Now I actually have time to think strategically instead of just reacting to Slack all day. It's like having a team without the overhead.
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">
                                JL
                            </div>
                            <div>
                                <div className="font-bold text-zinc-900">Jamie L.</div>
                                <div className="text-sm text-zinc-500">Founding PMM at a Series A startup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
