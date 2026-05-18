'use client'

import { motion } from "framer-motion";
import { Check, Target } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function SalesSimulation() {
    return (
        <Section className="py-24 bg-white">
            <FadeIn>
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-zinc-400">
                        <div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center">
                            <div className="w-2 h-0.5 bg-zinc-300" />
                            <div className="w-0.5 h-2 bg-zinc-300 -ml-2" />
                        </div>
                        <span className="text-sm font-medium">Example Interaction</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        &quot;Competitor X just added AI.&quot;
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-zinc-100 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-50">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="p-8 md:p-10 space-y-8 bg-white min-h-[400px]">

                        {/* User Message - Right Aligned Blue Bubble */}
                        <div className="flex justify-end">
                            <div className="flex gap-3 max-w-[80%] flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0" />
                                <div className="bg-blue-600 text-white p-5 rounded-2xl rounded-tr-sm text-lg leading-relaxed shadow-sm">
                                    Competitor X just announced an &quot;AI Assistant&quot; on their pricing page. How do we position against this? They&apos;re charging $20/user.
                                </div>
                            </div>
                        </div>

                        {/* Agent Response */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[90%]">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I&apos;ve analyzed their update. It appears to be a wrapper around GPT-3.5 with no context awareness.
                                        </p>
                                        <p className="font-bold text-zinc-900 mb-3">Here&apos;s your kill sheet:</p>

                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span><strong className="text-zinc-900">Security:</strong> We use training-isolated workflows and enterprise controls aligned to SOC 2 readiness.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span><strong className="text-zinc-900">Cost:</strong> Our AI is included; theirs adds 20% to TCO.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span><strong className="text-zinc-900">Accuracy:</strong> We use RAG on your data; they use generic models.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Update Battle Card
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Draft Email to Team
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
