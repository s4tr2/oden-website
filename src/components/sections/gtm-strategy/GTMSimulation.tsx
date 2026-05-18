'use client'

import { Rocket, CheckCircle2 } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function GTMSimulation() {
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
                        &quot;We&apos;re launching in 3 weeks.&quot;
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

                        {/* User Message - Right Aligned */}
                        <div className="flex justify-end">
                            <div className="flex gap-3 max-w-[80%] flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0" />
                                <div className="bg-green-600 text-white p-5 rounded-2xl rounded-tr-sm text-lg leading-relaxed shadow-sm">
                                    We&apos;re launching the new analytics dashboard in 3 weeks. Can you create a launch plan?
                                </div>
                            </div>
                        </div>

                        {/* Agent Response */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[90%]">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I&apos;ve created a Tier 1 launch plan. Here&apos;s your readiness tracker:
                                        </p>
                                        
                                        <div className="space-y-3 mt-4">
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                <span className="text-zinc-700 font-medium">Product</span>
                                                <span className="ml-auto text-sm text-green-600">Ready</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <div className="w-5 h-5 rounded-full border-2 border-yellow-400 shrink-0" />
                                                <span className="text-zinc-700 font-medium">Marketing</span>
                                                <span className="ml-auto text-sm text-yellow-600">3 items pending</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <div className="w-5 h-5 rounded-full border-2 border-red-400 shrink-0" />
                                                <span className="text-zinc-700 font-medium">Sales Enablement</span>
                                                <span className="ml-auto text-sm text-red-600">Blocked</span>
                                            </div>
                                        </div>
                                        
                                        <p className="mt-4 text-sm text-zinc-500">
                                            ⚠️ Sales is blocked on battle card updates. I&apos;ve flagged the Sales Enablement Agent to prioritize this.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            View Full Timeline
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Send Status to Slack
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
