'use client'

import { RefreshCw, ShieldAlert, FileText } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function SalesFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        Always watching. <br />
                        <span className=" text-zinc-500">Always updating.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            <RefreshCw className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Live Battle Cards</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Updates automatically when competitors change pricing or messaging. No version control needed.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Objection Handling</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Drafts data-backed responses to FUD and specific competitor claims instantly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">One-Pagers</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Spins up industry-specific assets and tearsheets instantly for any vertical.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
