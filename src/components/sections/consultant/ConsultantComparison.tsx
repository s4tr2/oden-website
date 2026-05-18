'use client'

import { Check, X } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function ConsultantComparison() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        "Why not just use ChatGPT?"
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Specialized agents vs. generic assistants
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Generic AI Card */}
                    <div className="p-8 md:p-12 bg-zinc-50/50 border border-zinc-100 rounded-3xl space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xs">
                                Ai
                            </div>
                            <h3 className="text-lg text-zinc-400">Generic AI</h3>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "No PMM expertise.", desc: "Generic outputs need heavy editing." },
                                { title: "No client context.", desc: "Can't access their docs or history." },
                                { title: "One-size-fits-all.", desc: "Same tool for everything." },
                                { title: "Security concerns.", desc: "Client data in shared models." }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <X className="w-4 h-4 text-zinc-300 mt-1 flex-shrink-0" />
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold text-zinc-500">{item.title}</span>{" "}
                                        <span className="text-zinc-400">{item.desc}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Oden Agents Card */}
                    <div className="p-8 md:p-12 bg-white border-t-4 border-[#111111] rounded-3xl shadow-2xl shadow-zinc-200/50 space-y-8 relative overflow-hidden">
                        <h3 className="text-xl text-[#111111]">Oden Agents</h3>

                        <div className="space-y-6">
                            {[
                                { title: "PMM-native.", desc: "Trained on positioning, GTM, enablement frameworks." },
                                { title: "Client-aware.", desc: "Indexes their docs, learns their voice." },
                                { title: "Specialized roles.", desc: "Right agent for the right job." },
                                { title: "Isolated & secure.", desc: "Each client's data stays separate." }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold text-zinc-900">{item.title}</span>{" "}
                                        <span className="text-zinc-500">{item.desc}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
