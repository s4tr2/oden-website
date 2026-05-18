import type { Metadata } from "next";
import { ContentHero } from "@/components/sections/content/ContentHero";
import { ContentProblem } from "@/components/sections/content/ContentProblem";
import { ContentFeatures } from "@/components/sections/content/ContentFeatures";
import { ContentSimulation } from "@/components/sections/content/ContentSimulation";
import { ContentFAQ } from "@/components/sections/content/ContentFAQ";
import { ContentCTA } from "@/components/sections/content/ContentCTA";

export const metadata: Metadata = {
    title: "Content Agent",
    description: "Generate case studies, blog posts, one-pagers, and sales collateral-all on-brand, properly sourced, and ready to ship.",
};

export default function ContentPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <ContentHero />
            <ContentProblem />
            <ContentFeatures />
            <ContentSimulation />
            <ContentFAQ />
            <ContentCTA />
        </div>
    );
}
