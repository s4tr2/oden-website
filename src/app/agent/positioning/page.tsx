import type { Metadata } from "next";
import { PositioningHero } from "@/components/sections/positioning/PositioningHero";
import { PositioningProblem } from "@/components/sections/positioning/PositioningProblem";
import { PositioningFeatures } from "@/components/sections/positioning/PositioningFeatures";
import { PositioningSimulation } from "@/components/sections/positioning/PositioningSimulation";
import { PositioningFAQ } from "@/components/sections/positioning/PositioningFAQ";
import { PositioningCTA } from "@/components/sections/positioning/PositioningCTA";

export const metadata: Metadata = {
    title: "Positioning Agent",
    description: "Craft messaging frameworks, value propositions, and differentiation narratives that cut through the noise and resonate with your buyers.",
};

export default function PositioningPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <PositioningHero />
            <PositioningProblem />
            <PositioningFeatures />
            <PositioningSimulation />
            <PositioningFAQ />
            <PositioningCTA />
        </div>
    );
}
