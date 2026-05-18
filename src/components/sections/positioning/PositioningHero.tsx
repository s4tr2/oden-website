'use client'

import { Megaphone } from "lucide-react";
import { FadeIn } from "../layout-helpers";

export function PositioningHero() {
    return (
        <div className="min-h-[40vh] flex flex-col justify-center py-24 relative">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-medium tracking-wide uppercase text-purple-600">
                        <Megaphone className="w-3 h-3" />
                        Positioning Agent
                    </div>

                    <h1 className="leading-[1.1] text-zinc-900">
                        Messaging that{' '}
                        <span className="md:hidden"><br /></span>
                        <span className=" text-purple-600">actually resonates.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                        The Positioning Agent crafts messaging frameworks, value propositions, and differentiation narratives that cut through the noise and stick with your buyers.
                    </p>

                    <div className="pt-4">
                        <a
                            href="https://app.getoden.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-purple-600 hover:bg-purple-700 overflow-hidden shadow-lg shadow-purple-500/20 rounded"
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
