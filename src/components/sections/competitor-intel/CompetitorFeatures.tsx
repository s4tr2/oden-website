'use client'

import { Radar, DollarSign, Newspaper } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function CompetitorFeatures() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-zinc-900 mb-4">
                        Always watching. <br />
                        <span className=" text-zinc-500">Always alerting.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                            <Radar className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Website Monitoring</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Tracks every page change across competitor sites-product pages, features, messaging, and more.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">Pricing Intelligence</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Detects pricing changes, new tiers, and packaging updates the moment they go live.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                            <Newspaper className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl text-zinc-900 mb-3">News & PR Tracking</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Monitors press releases, funding announcements, executive hires, and industry coverage.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
