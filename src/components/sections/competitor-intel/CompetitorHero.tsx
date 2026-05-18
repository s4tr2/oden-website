'use client'

import { Swords } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function CompetitorHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-medium tracking-wide uppercase text-red-600">
                        <Swords className="w-3 h-3" />
                        Competitor Intel Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Know their moves{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-red-600">before they make them.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The Competitor Intel Agent monitors competitor websites, pricing pages, feature updates, and market moves 24/7-so you&apos;re never caught off guard.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-red-600 hover:bg-red-700 overflow-hidden shadow-lg shadow-red-500/20 rounded"
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
