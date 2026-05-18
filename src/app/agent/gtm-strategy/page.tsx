import type { Metadata } from "next";
import { GTMHero } from "@/components/sections/gtm-strategy/GTMHero";
import { GTMProblem } from "@/components/sections/gtm-strategy/GTMProblem";
import { GTMFeatures } from "@/components/sections/gtm-strategy/GTMFeatures";
import { GTMSimulation } from "@/components/sections/gtm-strategy/GTMSimulation";
import { GTMFAQ } from "@/components/sections/gtm-strategy/GTMFAQ";
import { GTMCTA } from "@/components/sections/gtm-strategy/GTMCTA";

export const metadata: Metadata = {
    title: "GTM Strategy Agent",
    description: "Plan launch sequences, coordinate cross-functional timelines, and keep everyone aligned on milestones that matter.",
};

export default function GTMStrategyPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <GTMHero />
            <GTMProblem />
            <GTMFeatures />
            <GTMSimulation />
            <GTMFAQ />
            <GTMCTA />
        </div>
    );
}
