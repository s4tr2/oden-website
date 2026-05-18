import type { Metadata } from "next";
import { ConsultantHero } from "@/components/sections/consultant/ConsultantHero";
import { ConsultantDilemma } from "@/components/sections/consultant/ConsultantDilemma";
import { ConsultantTransition } from "@/components/sections/consultant/ConsultantTransition";
import { ConsultantAgents } from "@/components/sections/consultant/ConsultantAgents";
import { ConsultantScale } from "@/components/sections/consultant/ConsultantScale";
import { ConsultantComparison } from "@/components/sections/consultant/ConsultantComparison";
import { ConsultantFAQ } from "@/components/sections/consultant/ConsultantFAQ";
import { ConsultantClosingCTA } from "@/components/sections/consultant/ConsultantClosingCTA";

export const metadata: Metadata = {
    title: "Oden for Consultants | Product marketing that compounds",
    description: "Scale PMM work from one operating system for buyer signal, authored truth, and current sourced outputs across positioning, GTM, sales enablement, and content.",
};

export default function ConsultantPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-4">
            <ConsultantHero />
            <ConsultantDilemma />
            <ConsultantTransition />
            <ConsultantAgents />
            <ConsultantScale />
            <ConsultantComparison />
            <ConsultantFAQ />
            <ConsultantClosingCTA />
        </div>
    );
}
