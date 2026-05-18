import type { Metadata } from "next";
import { CompetitorHero } from "@/components/sections/competitor-intel/CompetitorHero";
import { CompetitorProblem } from "@/components/sections/competitor-intel/CompetitorProblem";
import { CompetitorFeatures } from "@/components/sections/competitor-intel/CompetitorFeatures";
import { CompetitorSimulation } from "@/components/sections/competitor-intel/CompetitorSimulation";
import { CompetitorFAQ } from "@/components/sections/competitor-intel/CompetitorFAQ";
import { CompetitorCTA } from "@/components/sections/competitor-intel/CompetitorCTA";

export const metadata: Metadata = {
    title: "Competitor Intel Agent",
    description: "Monitor competitor websites, pricing pages, feature updates, and market moves 24/7-so you're never caught off guard.",
};

export default function CompetitorIntelPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <CompetitorHero />
            <CompetitorProblem />
            <CompetitorFeatures />
            <CompetitorSimulation />
            <CompetitorFAQ />
            <CompetitorCTA />
        </div>
    );
}
