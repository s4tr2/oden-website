'use client'

import { Brain, Mic, BarChart3 } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function BuyerFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        Data-driven personas. <br />
                        <span className=" text-zinc-500">Not guesswork.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Pain Point Analysis</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Identifies real pain points from sales calls, reviews, and support tickets-not assumed ones.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <Mic className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Call Intelligence</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Listens to Gong/Chorus calls to surface objections, concerns, and decision criteria at scale.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Trend Detection</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Spots emerging buyer needs before they become obvious-so you can build for tomorrow&apos;s market.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
