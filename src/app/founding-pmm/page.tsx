import type { Metadata } from "next";
import { FoundingPMMHero } from "@/components/sections/founding-pmm/FoundingPMMHero";
import { FoundingPMMReality } from "@/components/sections/founding-pmm/FoundingPMMReality";
import { FoundingPMMTransition } from "@/components/sections/founding-pmm/FoundingPMMTransition";
import { FoundingPMMAgents } from "@/components/sections/founding-pmm/FoundingPMMAgents";

import { FoundingPMMStats } from "@/components/sections/founding-pmm/FoundingPMMStats";
import { FoundingPMMHowItWorks } from "@/components/sections/founding-pmm/FoundingPMMHowItWorks";
import { FoundingPMMTestimonial } from "@/components/sections/founding-pmm/FoundingPMMTestimonial";
import { FoundingPMMFAQ } from "@/components/sections/founding-pmm/FoundingPMMFAQ";
import { FoundingPMMClosingCTA } from "@/components/sections/founding-pmm/FoundingPMMClosingCTA";

export const metadata: Metadata = {
    title: "Oden for Founding PMMs | Product marketing that compounds",
    description: "Oden gives founding PMMs one operating system for buyer signal, PMM-authored truth, and current sourced outputs across positioning, GTM, and sales enablement.",
};

export default function FoundingPMMPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-4">
            <FoundingPMMHero />
            <FoundingPMMReality />
            <FoundingPMMTransition />
            <FoundingPMMAgents />

            <FoundingPMMStats />
            <FoundingPMMHowItWorks />
            <FoundingPMMTestimonial />
            <FoundingPMMFAQ />
            <FoundingPMMClosingCTA />
        </div>
    );
}
