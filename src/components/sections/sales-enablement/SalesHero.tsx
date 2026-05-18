'use client'

import { Target } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function SalesHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium tracking-wide uppercase text-blue-600">
                        <Target className="w-3 h-3" />
                        Sales Enablement Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Your sales team&apos;s{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-blue-600">unfair advantage.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The Sales Enablement Agent monitors competitors, updates battle cards in real-time, and arms your reps with objection handling that actually closes deals.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-blue-600 hover:bg-blue-700 overflow-hidden shadow-lg shadow-blue-500/20 rounded"
                        >
                            <span className="mr-2">Deploy Agent</span>
                            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                        <p className="mt-3 text-xs text-muted-foreground">
                            No credit card required
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
