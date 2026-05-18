'use client'

import { RotateCcw, ShieldCheck } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function SalesProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                Battle cards die on day one.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                You spend weeks building them. Reps ignore them because "they're outdated." Meanwhile, your competitor just launched a feature that kills your main differentiator.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <RotateCcw className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">Assets stale within 30 days</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">Reps "winging it" on objections</span>
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
                            {/* File browser header */}
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                </div>
                                <div className="text-xs text-zinc-400">Sales Enablement</div>
                            </div>
                            
                            {/* File list */}
                            <div className="p-4 space-y-2">
                                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="w-8 h-10 bg-red-100 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-red-500">PDF</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-zinc-700 truncate">Battle_Card_v1_FINAL_REAL.pdf</div>
                                        <div className="text-xs text-zinc-400">Modified 8 months ago</div>
                                    </div>
                                    <div className="text-xs text-red-400 shrink-0">Outdated</div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="w-8 h-10 bg-blue-100 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-blue-500">DOC</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-zinc-700 truncate">Objection_Handling_Guide.docx</div>
                                        <div className="text-xs text-zinc-400">Modified 5 months ago</div>
                                    </div>
                                    <div className="text-xs text-red-400 shrink-0">Outdated</div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="w-8 h-10 bg-green-100 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-green-500">XLS</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-zinc-700 truncate">Competitor_Pricing_2024.xlsx</div>
                                        <div className="text-xs text-zinc-400">Modified 11 months ago</div>
                                    </div>
                                    <div className="text-xs text-red-400 shrink-0">Outdated</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
