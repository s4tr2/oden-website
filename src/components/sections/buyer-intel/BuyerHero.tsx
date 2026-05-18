'use client'

import { UserSearch } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function BuyerHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-medium tracking-wide uppercase text-indigo-600">
                        <UserSearch className="w-3 h-3" />
                        Buyer Intel Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Understand buyers{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-indigo-600">better than they do.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The Buyer Intel Agent analyzes buyer needs, pain points, decision criteria, and purchase triggers-turning market research into actionable intelligence.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 overflow-hidden shadow-lg shadow-indigo-500/20 rounded"
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
