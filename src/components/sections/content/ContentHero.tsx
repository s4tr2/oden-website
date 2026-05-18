'use client'

import { FileText } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function ContentHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-xs font-medium tracking-wide uppercase text-primary-600">
                        <FileText className="w-3 h-3" />
                        Content Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Content that{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-primary">writes itself.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The Content Agent generates case studies, blog posts, one-pagers, and sales collateral-all on-brand, properly sourced, and ready to ship.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-primary-500 hover:bg-primary-600 overflow-hidden shadow-lg shadow-primary-500/20 rounded"
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
