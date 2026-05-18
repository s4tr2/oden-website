'use client'

import { MessageSquare, Layers, Sparkles } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function PositioningFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        One source of truth. <br />
                        <span className=" text-zinc-500">Infinite applications.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-purple-100 hover:bg-purple-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Messaging Frameworks</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Generates audience-specific messaging matrices with value props, proof points, and objection handlers.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-purple-100 hover:bg-purple-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Value Propositions</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Creates persona-specific value props that connect features to outcomes your buyers actually care about.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-purple-100 hover:bg-purple-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Differentiation</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Analyzes competitor positioning to find white space and craft narratives that make you the obvious choice.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
