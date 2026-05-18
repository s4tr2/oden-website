'use client'

import { HelpCircle, Target } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function BuyerProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                You think you know your buyer.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Your personas are based on 6 interviews from 2 years ago. Your messaging targets &quot;decision makers&quot; because you&apos;re not sure who actually holds the budget. Your sales team learns the real pain points-but that intel never makes it back to marketing.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <HelpCircle className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">Personas based on assumptions, not data</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <Target className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">Sales insights stuck in call recordings</span>
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
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    </div>
                                    <div className="text-xs text-zinc-400">Buyer_Personas_v3_FINAL.docx</div>
                                </div>
                            </div>
                            
                            {/* Persona card */}
                            <div className="p-4">
                                <div className="border border-zinc-200 rounded-lg overflow-hidden">
                                    <div className="bg-indigo-50 px-4 py-2 border-b border-indigo-100">
                                        <span className="text-sm font-medium text-indigo-700">&quot;Marketing Mary&quot;</span>
                                    </div>
                                    <div className="p-4 space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Title:</span>
                                            <span className="text-zinc-700">VP Marketing <span className="text-zinc-400">(probably?)</span></span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Pain points:</span>
                                            <span className="text-zinc-400">&quot;Needs better tools&quot;</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Decision criteria:</span>
                                            <span className="text-red-400">Unknown</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">Budget authority:</span>
                                            <span className="text-zinc-400">¯\_(ツ)_/¯</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 flex items-center justify-between text-xs">
                                <span className="text-amber-600">Based on 4 interviews</span>
                                <span className="text-amber-500">Last updated: March 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
