import type { Metadata } from "next";
import { BuyerHero } from "@/components/sections/buyer-intel/BuyerHero";
import { BuyerProblem } from "@/components/sections/buyer-intel/BuyerProblem";
import { BuyerFeatures } from "@/components/sections/buyer-intel/BuyerFeatures";
import { BuyerSimulation } from "@/components/sections/buyer-intel/BuyerSimulation";
import { BuyerFAQ } from "@/components/sections/buyer-intel/BuyerFAQ";
import { BuyerCTA } from "@/components/sections/buyer-intel/BuyerCTA";

export const metadata: Metadata = {
    title: "Buyer Intel Agent",
    description: "Analyze buyer needs, pain points, decision criteria, and purchase triggers-turning market research into actionable intelligence.",
};

export default function BuyerIntelPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <BuyerHero />
            <BuyerProblem />
            <BuyerFeatures />
            <BuyerSimulation />
            <BuyerFAQ />
            <BuyerCTA />
        </div>
    );
}
