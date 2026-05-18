'use client'

import { Swords, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function CompetitorSimulation() {
    return (
        <Section className="py-24 bg-white">
            <FadeIn>
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-zinc-400">
                        <div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center">
                            <div className="w-2 h-0.5 bg-zinc-300" />
                            <div className="w-0.5 h-2 bg-zinc-300 -ml-2" />
                        </div>
                        <span className="text-sm font-medium">Real-time Alert</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        &quot;Competitor X just cut prices 20%.&quot;
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

                    {/* Alert Area */}
                    <div className="p-8 md:p-10 space-y-8 bg-white min-h-[400px]">

                        {/* Alert Banner */}
                        <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-100 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <div className="font-medium text-red-900 mb-1">Pricing Change Detected</div>
                                <p className="text-sm text-red-700">Competitor X updated their pricing page 23 minutes ago.</p>
                            </div>
                        </div>

                        {/* Agent Analysis */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[95%]">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                                    <Swords className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I&apos;ve analyzed the changes. Here&apos;s what happened:
                                        </p>
                                        
                                        <div className="space-y-3 mt-4">
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <TrendingDown className="w-5 h-5 text-red-500 shrink-0" />
                                                <div className="flex-1">
                                                    <span className="text-zinc-700 font-medium">Pro Plan</span>
                                                    <span className="text-sm text-zinc-500 ml-2">$99 → $79/mo (-20%)</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <TrendingUp className="w-5 h-5 text-green-500 shrink-0" />
                                                <div className="flex-1">
                                                    <span className="text-zinc-700 font-medium">Enterprise</span>
                                                    <span className="text-sm text-zinc-500 ml-2">No change (still $299/mo)</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                                            <p className="text-sm text-amber-800">
                                                <strong>Impact:</strong> Their Pro plan is now 15% cheaper than ours. This affects 40% of our pipeline. I recommend discussing positioning response with leadership.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            View Full Analysis
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Update Battle Cards
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Alert Sales Team
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
