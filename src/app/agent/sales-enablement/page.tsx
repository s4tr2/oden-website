import type { Metadata } from "next";
import { SalesHero } from "@/components/sections/sales-enablement/SalesHero";
import { SalesProblem } from "@/components/sections/sales-enablement/SalesProblem";
import { SalesFeatures } from "@/components/sections/sales-enablement/SalesFeatures";
import { SalesSimulation } from "@/components/sections/sales-enablement/SalesSimulation";
import { SalesFAQ } from "@/components/sections/sales-enablement/SalesFAQ";
import { SalesCTA } from "@/components/sections/sales-enablement/SalesCTA";

export const metadata: Metadata = {
    title: "Sales Enablement Agent",
    description: "Monitor competitors, update battle cards in real-time, and arm your reps with objection handling that actually closes deals.",
};

export default function SalesEnablementPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-8">
            <SalesHero />
            <SalesProblem />
            <SalesFeatures />
            <SalesSimulation />
            <SalesFAQ />
            <SalesCTA />
        </div>
    );
}
