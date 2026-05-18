'use client'

import { Rocket } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function GTMHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-medium tracking-wide uppercase text-green-600">
                        <Rocket className="w-3 h-3" />
                        GTM Strategy Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Launch with{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-green-600">surgical precision.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The GTM Strategy Agent plans launch sequences, coordinates cross-functional timelines, and keeps everyone aligned on milestones that matter.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-green-600 hover:bg-green-700 overflow-hidden shadow-lg shadow-green-500/20 rounded"
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
