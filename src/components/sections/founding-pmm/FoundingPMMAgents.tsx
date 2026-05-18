'use client'

import { motion } from "framer-motion";
import { Target, Megaphone, Rocket, FileText, Users, Share2 } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

const agents = [
    {
        name: "Sales Enablement",
        description: "Builds battle cards, objection handling, and talk tracks from the current company story.",
        tag: "Battle cards, objection docs",
        icon: Target,
        color: "bg-blue-500",
        delay: 0.1
    },
    {
        name: "Positioning",
        description: "Keeps messaging, value propositions, proof points, and differentiation tied to sourced signal.",
        tag: "Messaging, value props",
        icon: Megaphone,
        color: "bg-purple-500",
        delay: 0.2
    },
    {
        name: "GTM",
        description: "Turns product updates and authored truth into launch plans, timelines, and cross-functional readiness.",
        tag: "Launch plans, timelines",
        icon: Rocket,
        color: "bg-green-500",
        delay: 0.3
    },
    {
        name: "Content",
        description: "Generates case studies, launch copy, one-pagers, and web copy from approved, sourced claims.",
        tag: "Case studies, content",
        icon: FileText,
        color: "bg-orange-500",
        delay: 0.4
    },
    {
        name: "Campaign Output",
        description: "Creates campaign copy, landing pages, and field assets that match the same current story.",
        tag: "Sequences, landing pages",
        icon: Users,
        color: "bg-pink-500",
        delay: 0.5
    },
    {
        name: "One Foundation",
        description: "Every output flows from the same PMM-authored truth, so sales, marketing, and launches stay aligned.",
        icon: Share2,
        color: "text-[#111111]",
        isCustom: true,
        delay: 0.6
    }
];

export function FoundingPMMAgents() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                            Your PMM Operating System
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        5 outputs.
                        <br />
                        <span className=" text-zinc-500">5 fewer things on your plate.</span>
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Every output starts from the same signal base and PMM-authored truth, so the work compounds instead of resetting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: agent.delay }}
                            className={`p-8 border border-zinc-100 rounded-2xl flex flex-col items-start gap-4 transition-all hover:shadow-xl hover:shadow-zinc-100 ${agent.isCustom ? 'bg-[#f5f5f5] border-[#e5e5e5]' : 'bg-white'
                                }`}
                        >
                            <div className={`p-2.5 rounded-lg ${agent.isCustom ? '' : agent.color}`}>
                                <agent.icon className={`w-5 h-5 ${agent.isCustom ? 'text-[#111111]' : 'text-white'}`} />
                            </div>
                            <div className="space-y-4 flex-1 flex flex-col">
                                <h3 className="text-lg text-zinc-900">{agent.name}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                                    {agent.description}
                                </p>
                                {agent.tag && (
                                    <div className="pt-2">
                                        <span className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded text-xs font-bold text-zinc-400 uppercase tracking-tight">
                                            {agent.tag}
                                        </span>
                                    </div>
                                )}
                                {agent.isCustom && (
                                    <h3 className="text-center pt-2 text-zinc-900">Working Together</h3>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
}
