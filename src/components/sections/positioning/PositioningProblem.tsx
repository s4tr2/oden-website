'use client'

import { Copy, Users } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function PositioningProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                You sound just like everyone else.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                &quot;AI-powered.&quot; &quot;Enterprise-grade.&quot; &quot;Best-in-class.&quot; Your competitors use the same words. Your buyers can&apos;t tell you apart. And your differentiation gets lost in translation from PMM to sales to website.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Copy className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">Messaging sounds like competitors</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <Users className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">Every team tells a different story</span>
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
                            {/* Header */}
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                </div>
                                <div className="text-xs text-zinc-400">Messaging Audit</div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 space-y-3">
                                <div className="p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-zinc-500">Website Hero</span>
                                        <span className="text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">Generic</span>
                                    </div>
                                    <p className="text-sm text-zinc-600">&quot;The AI-powered platform for modern teams&quot;</p>
                                </div>
                                <div className="p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-zinc-500">Sales Deck</span>
                                        <span className="text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">Generic</span>
                                    </div>
                                    <p className="text-sm text-zinc-600">&quot;Best-in-class solution for enterprises&quot;</p>
                                </div>
                                <div className="p-3 bg-zinc-50 rounded border border-zinc-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-zinc-500">SDR Email</span>
                                        <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">Mismatch</span>
                                    </div>
                                    <p className="text-sm text-zinc-600">&quot;Revolutionary technology that transforms...&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
