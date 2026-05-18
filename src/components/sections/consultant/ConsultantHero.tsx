'use client'

import { Section, FadeIn } from "../layout-helpers";
import { Layers3 } from "lucide-react";

export function ConsultantHero() {
    return (
        <Section className="pt-20 pb-16">
            <FadeIn>
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f5f5] border border-[#e5e5e5] rounded-full">
                        <Layers3 className="w-3.5 h-3.5 text-[#111111]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                            For PMM Consultants & Agencies
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl text-zinc-900 leading-[1.1]">
                            Your clients need PMM work.
                            <br />
                            <span className=" text-zinc-500">You need more hours in the day.</span>
                        </h1>
                    </div>

                    <p className="text-lg text-zinc-500 leading-relaxed max-w-lg">
                        What if every client had one sourced foundation for buyer signal, positioning, enablement, and launch output? Oden gives you exactly that.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#111111] hover:bg-[#262626] overflow-hidden shadow-lg shadow-[#111111]/20 rounded-none w-full md:w-auto"
                        >
                            <span className="mr-2">Get started free</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                        <p className="mt-4 text-xs font-semibold text-zinc-400">
                            No credit card required
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
