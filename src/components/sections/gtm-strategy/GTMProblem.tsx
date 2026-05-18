'use client'

import { Calendar, AlertCircle } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function GTMProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                Launches slip. Teams scramble.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Product ships a week early. Marketing finds out the day before. Sales doesn&apos;t have assets. Your &quot;coordinated launch&quot; becomes a fire drill across 47 Slack threads and 12 spreadsheets.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Calendar className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">Launch timelines live in 5 different places</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">No single source of truth for readiness</span>
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
                            {/* Slack-like header */}
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                </div>
                                <div className="text-xs text-zinc-400">#product-launch</div>
                            </div>
                            
                            {/* Messages */}
                            <div className="p-4 space-y-3">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-xs font-medium text-yellow-600 shrink-0">PM</div>
                                    <div>
                                        <div className="text-xs text-zinc-500 mb-1">Product <span className="text-zinc-400">2:34 PM</span></div>
                                        <p className="text-sm text-zinc-700">&quot;We&apos;re launching Tuesday&quot;</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-xs font-medium text-red-600 shrink-0">MK</div>
                                    <div>
                                        <div className="text-xs text-zinc-500 mb-1">Marketing <span className="text-zinc-400">2:41 PM</span></div>
                                        <p className="text-sm text-zinc-700">&quot;I thought it was Thursday?&quot;</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-xs font-medium text-orange-600 shrink-0">SE</div>
                                    <div>
                                        <div className="text-xs text-zinc-500 mb-1">Sales <span className="text-zinc-400">2:45 PM</span></div>
                                        <p className="text-sm text-zinc-700">&quot;Wait, we&apos;re launching? 😬&quot;</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600 shrink-0">CS</div>
                                    <div>
                                        <div className="text-xs text-zinc-500 mb-1">Customer Success <span className="text-zinc-400">2:52 PM</span></div>
                                        <p className="text-sm text-zinc-700">&quot;No one told us.&quot;</p>
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
