'use client'

import { Eye, Zap } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function CompetitorProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                You find out from your prospect.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Your competitor shipped a major feature. Changed their pricing. Hired a new executive. And you learn about it from a prospect asking &quot;What about their new X?&quot; That&apos;s not competitive intelligence-that&apos;s playing catch-up.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Eye className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">Manual monitoring is impossible at scale</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">By the time you know, it&apos;s too late</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Mock */}
                    <div className="relative">
                        {/* The Old Way Badge */}
                        <div className="absolute -top-3 right-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase z-20 shadow-sm border border-red-200">
                            The Old Way
                        </div>

                        <div className="relative bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
                            {/* Spreadsheet header */}
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                </div>
                                <div className="text-xs text-zinc-400">Competitor_Tracking_2024.xlsx</div>
                            </div>
                            
                            {/* Spreadsheet content */}
                            <div className="text-xs">
                                <div className="grid grid-cols-3 bg-zinc-50 border-b border-zinc-200 font-medium text-zinc-500">
                                    <div className="px-4 py-2 border-r border-zinc-200">Competitor</div>
                                    <div className="px-4 py-2 border-r border-zinc-200">What to track</div>
                                    <div className="px-4 py-2">Last checked</div>
                                </div>
                                <div className="grid grid-cols-3 border-b border-zinc-100">
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-700">Competitor A</div>
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-500">Pricing page</div>
                                    <div className="px-4 py-3 text-red-500">???</div>
                                </div>
                                <div className="grid grid-cols-3 border-b border-zinc-100">
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-700">Competitor B</div>
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-500">Features</div>
                                    <div className="px-4 py-3 text-red-500">6 months ago</div>
                                </div>
                                <div className="grid grid-cols-3 border-b border-zinc-100">
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-700">Competitor C</div>
                                    <div className="px-4 py-3 border-r border-zinc-100 text-zinc-500">Messaging</div>
                                    <div className="px-4 py-3 text-red-500">never</div>
                                </div>
                            </div>
                            
                            <div className="px-4 py-3 bg-red-50 border-t border-red-100 flex items-center gap-2">
                                <span className="text-red-500">⚠️</span>
                                <span className="text-xs text-red-600">3 competitors changed pricing this month. You missed all of them.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
