'use client'

import { motion } from "framer-motion";
import { Target, Megaphone, Rocket, FileText, Users, Zap } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

const agents = [
    {
        name: "Sales Enablement",
        description: "Builds battle cards, objection docs, and talk tracks from the current client story.",
        icon: Target,
        color: "bg-blue-500",
        delay: 0.1
    },
    {
        name: "Positioning",
        description: "Crafts messaging frameworks, value props, proof points, and differentiation from sourced signal.",
        icon: Megaphone,
        color: "bg-purple-500",
        delay: 0.2
    },
    {
        name: "GTM",
        description: "Plans launch sequences, coordinates cross-functional timelines, and tracks readiness.",
        icon: Rocket,
        color: "bg-green-500",
        delay: 0.3
    },
    {
        name: "Content",
        description: "Generates case studies, launch copy, one-pagers, and web copy that stay on story.",
        icon: FileText,
        color: "bg-orange-500",
        delay: 0.4
    },
    {
        name: "Campaign Output",
        description: "Creates outbound sequences, landing page copy, and conversion-focused assets from the same canon.",
        icon: Users,
        color: "bg-pink-500",
        delay: 0.5
    },
    {
        name: "Client Canon",
        description: "Need something specific? Build a sourced truth layer around each client's unique market and story.",
        icon: Zap,
        color: "text-[#111111]",
        isCustom: true,
        delay: 0.6
    }
];

export function ConsultantAgents() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                            Your PMM operating system
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        5 core outputs.
                        <br />
                        <span className=" text-zinc-500">One powerful toolkit.</span>
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Each output draws from the client's signal base and authored truth. Use them individually or as one compounding PMM foundation.
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
                                <agent.icon className={`w-5 h-5 ${agent.isCustom ? agent.color : 'text-white'}`} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg text-zinc-900">{agent.name}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {agent.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
}
