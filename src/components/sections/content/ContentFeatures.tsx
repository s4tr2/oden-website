'use client'

import { BookOpen, FileCheck, Palette } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function ContentFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        Quality at scale. <br />
                        <span className=" text-zinc-500">No compromises.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-100 hover:bg-orange-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Case Studies</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Transforms customer interviews and win data into compelling narratives with real metrics and quotes.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-100 hover:bg-orange-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                            <FileCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">One-Pagers & Collateral</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Generates industry-specific tearsheets, solution briefs, and comparison guides on demand.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-100 hover:bg-orange-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                            <Palette className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Brand-Consistent</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Learns your tone, terminology, and style guide. Every piece sounds like it came from your team.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
