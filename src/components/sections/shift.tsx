'use client'

import Link from "next/link";
import { Target, Megaphone, Rocket, FileText, Swords, UserSearch } from "lucide-react";
import { Section, FadeIn } from "./layout-helpers";
import { cn } from "@/lib/utils";

const AGENT_CARDS = [
    {
        href: "/agent/sales-enablement",
        title: "Sales Enablement",
        description: "Builds battle cards, objection docs, and competitive intel.",
        icon: Target,
        iconBoxClass: "bg-blue-50 text-blue-600",
    },
    {
        href: "/agent/positioning",
        title: "Positioning",
        description: "Crafts messaging frameworks, value props, and differentiation.",
        icon: Megaphone,
        iconBoxClass: "bg-purple-50 text-purple-600",
    },
    {
        href: "/agent/gtm-strategy",
        title: "Product Marketing",
        description: "Plans launch sequences, coordinates timelines, and tracks milestones.",
        icon: Rocket,
        iconBoxClass: "bg-green-50 text-green-600",
    },
    {
        href: "/agent/content",
        title: "Content",
        description: "Generates case studies, blog posts, and one-pagers.",
        icon: FileText,
        iconBoxClass: "bg-orange-50 text-orange-600",
    },
    {
        href: "/agent/competitor-intel",
        title: "Competitor Intel",
        description: "Monitors competitor moves, pricing updates, and feature changes.",
        icon: Swords,
        iconBoxClass: "bg-red-50 text-red-600",
    },
    {
        href: "/agent/buyer-intel",
        title: "Buyer Intel",
        description: "Analyzes buyer needs, pain points, and decision criteria.",
        icon: UserSearch,
        iconBoxClass: "bg-indigo-50 text-indigo-600",
    },
] as const;

export function ShiftSection() {
    return (
        <Section className="py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 -z-10" />

            <FadeIn>
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-medium tracking-wide uppercase mb-6 text-orange-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        YOUR NEW AI TEAM
                    </div>
                    <h2 className="text-foreground mb-8 leading-tight">
                        6 specialized agents. <br /> <span className=" text-zinc-500">One powerful platform.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-12 text-pretty">
                        Oden isn't just a tool-it's a team. Specialized agents work together to orchestrate your strategy, execution, and assets.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {AGENT_CARDS.map((agent) => {
                            const Icon = agent.icon;
                            return (
                                <Link
                                    key={agent.title}
                                    href={agent.href}
                                    className="group block rounded-2xl border border-zinc-200 bg-white p-7 md:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-[0_12px_28px_-22px_rgba(24,24,27,0.5)]"
                                >
                                    <div className={cn("size-14 rounded-2xl flex items-center justify-center mb-7", agent.iconBoxClass)}>
                                        <Icon className="size-7" strokeWidth={1.6} />
                                    </div>
                                    <h3 className="text-2xl text-zinc-900 mb-3 text-balance">{agent.title}</h3>
                                    <p className="text-base text-zinc-600 leading-relaxed text-pretty">{agent.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-32 pb-12">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Everything Oden Creates</span>
                    </div>

                    <div className="relative w-full overflow-hidden" style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}>
                        <div className="flex animate-marquee whitespace-nowrap gap-4 py-4">
                            {[
                                "Messaging Frameworks",
                                "FAQs",
                                "Battle Cards",
                                "Case Studies",
                                "Pitch Decks",
                                "One Pagers",
                                "Market Intel Reports",
                                "Competitor Profiles",
                                "Sales Emails"
                            ].map((keyword) => (
                                <div
                                    key={keyword}
                                    className="px-8 py-3 rounded border border-zinc-200 bg-white text-zinc-600 text-sm font-medium shadow-sm hover:border-zinc-300 transition-colors"
                                >
                                    {keyword}
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[
                                "Messaging Frameworks",
                                "FAQs",
                                "Battle Cards",
                                "Case Studies",
                                "Pitch Decks",
                                "One Pagers",
                                "Market Intel Reports",
                                "Competitor Profiles",
                                "Sales Emails"
                            ].map((keyword) => (
                                <div
                                    key={`${keyword}-2`}
                                    className="px-8 py-3 rounded border border-zinc-200 bg-white text-zinc-600 text-sm font-medium shadow-sm hover:border-zinc-300 transition-colors"
                                >
                                    {keyword}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: fit-content;
                        animation: marquee 40s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </FadeIn>
        </Section>
    )
}
